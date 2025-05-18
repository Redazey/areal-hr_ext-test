<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Создать' }} отдел</h2>
    <form @submit.prevent="submitForm">
      <!-- Выпадающий список для выбора организации -->
      <TitleSelect
          @update:modelValue="department.organization_id = $event"
          :list="organizations"
          label="Организация"
      />

      <!-- Выпадающий список для выбора родительского отдела -->
      <TitleSelect
          @update:modelValue="department.parent_department_id = $event"
          :list="departments"
          label="Родительский отдел"
      />

      <input
        placeholder="Название"
        type="text"
        v-model="department.name"
        required
      />

      <textarea
        placeholder="Комментарий"
        v-model="department.comment"
      ></textarea>

      <button type="submit">{{ isEdit ? 'Обновить' : 'Создать' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';
import TitleSelect from "@/components/TitleSelect.vue";

const department = ref({ name: '', comment: '', organization_id: '' });

const appStore = useAppStore();
const router = useRouter();
const { isEdit } = storeToRefs(appStore);

const { departments, organizations } = storeToRefs(appStore);

onMounted(() => {
  appStore.fetchDepartments();
  appStore.fetchOrganizations();
});

const submitForm = () => {
  if (isEdit.value) {
    appStore.updateDepartment(isEdit.value.id, department.value);
    appStore.stopEditing();
  } else {
    appStore.createDepartment(department.value);
  }
  router.push('/departments');
};
</script>
