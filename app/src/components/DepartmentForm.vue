<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Создать' }} отдел</h2>
    <form @submit.prevent="submitForm">
      <!-- Выпадающий список для выбора организации -->
      <div>
        <label for="organization">Организация</label>
        <select v-model="department.organization_id" required>
          <option value="" disabled>Выберите организацию</option>
          <option v-for="org in organizations" :key="org.id" :value="org.id">
            {{ org.name }}
          </option>
        </select>
      </div>

      <!-- Выпадающий список для выбора родительского отдела -->
      <div>
        <label for="parent_id">Родительский отдел</label>
        <select v-model="department.parent_id">
          <option value="" disabled>Выберите родительский отдел</option>
          <option v-for="dept in departments" :key="dept.id" :value="dept.id">
            {{ dept.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="name">Имя отдела</label>
        <input type="text" v-model="department.name" required />
      </div>

      <div>
        <label for="comment">Комментарий</label>
        <textarea v-model="department.comment"></textarea>
      </div>

      <button type="submit">{{ isEdit ? 'Обновить' : 'Создать' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store';

const props = defineProps({
  isEdit: Boolean,
  existingDepartment: Object,
});

const department = ref(
    props.isEdit ? { ...props.existingDepartment } : { name: '', comment: '', organization_id: '', parent_id: '' }
);

const appStore = useAppStore();
const router = useRouter();

const organizations = ref([]);
const departments = ref([]);

onMounted(() => {
  organizations.value = appStore.organizations;
  departments.value = appStore.departments;
});

const submitForm = () => {
  if (props.isEdit) {
    appStore.updateDepartment(department.value.id, department.value);
  } else {
    appStore.createDepartment(department.value);
  }
  router.push('/departments');
};
</script>
