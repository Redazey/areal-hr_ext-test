<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Создать' }} отдел</h2>
    <form @submit.prevent="submitForm">
      <!-- Выпадающий список для выбора организации -->
      <div class="form-group">
        <label>Организация</label>
        <select v-model="department.organizationId" required>
          <option value="" disabled>Выберите организацию</option>
          <option v-for="org in organizations" :key="org.id" :value="org.id">
            {{ org.name }}
          </option>
        </select>
      </div>

      <!-- Выпадающий список для выбора родительского отдела -->
      <div class="form-group">
        <label>Родительский отдел</label>
        <select v-model="department.parentDepartmentId">
          <option value="" disabled>Выберите отдел</option>
          <option v-for="dept in departments" :key="dept.id" :value="dept.id">
            {{ dept.name }}
          </option>
        </select>
      </div>

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

const department = ref({ name: '', comment: '', organizationId: '' });

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
