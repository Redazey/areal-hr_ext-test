<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Добавить' }} сотрудника</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="last_name">Фамилия</label>
        <input type="text" v-model="employee.last_name" required />
      </div>
      <div>
        <label for="first_name">Имя</label>
        <input type="text" v-model="employee.first_name" required />
      </div>
      <div>
        <label for="patronymic">Отчество</label>
        <input type="text" v-model="employee.patronymic" required />
      </div>
      <div>
        <label for="date">Дата рождения</label>
        <input type="date" v-model="employee.dob" required />
      </div>
      <div>
        <label for="passport">Паспортные данные</label>
        <input type="text" v-model="employee.passport" required />
      </div>
      <div>
        <label for="registration_address">Адрес регистрации</label>
        <input type="text" v-model="employee.registration_address" required />
      </div>

      <!-- Выпадающий список для выбора файла -->
      <div>
        <label for="passport_scan">Файлы</label>
        <select v-model="employee.passport_scan">
          <option value="" disabled>Выберите файл</option>
          <option v-for="file in files" :key="file.id" :value="file.id">
            {{ file.name }}
          </option>
        </select>
      </div>

      <button type="submit">{{ isEdit ? 'Обновить' : 'Добавить' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';

const employee = ref({
  last_name: '',
  first_name: '',
  patronymic: '',
  passport: '',
  registration_address: '',
  passport_scan: null,
});

const appStore = useAppStore();
const router = useRouter();
const { isEdit } = storeToRefs(appStore);

const { files } = storeToRefs(appStore);

onMounted(() => {
  appStore.fetchFiles();
});

const submitForm = () => {
  if (isEdit.value) {
    appStore.updateEmployee(isEdit.value.id, employee.value);
    appStore.stopEditing();
  } else {
    appStore.createEmployee(employee.value);
  }
  router.push('/employees');
};
</script>
