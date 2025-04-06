<template>
  <div>
    <h2>Список сотрудников</h2>
    <button @click="addEmployee">Добавить сотрудника</button>
    <table>
      <thead>
      <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Паспорт</th>
        <th>Адрес</th>
        <th>Скан паспорта</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="emp in employees" :key="emp.id">
        <td>{{ `${emp.last_name} ${emp.first_name} ${emp.patronymic}` }}</td>
        <td>{{ emp.dob }}</td>
        <td>{{ emp.passport }}</td>
        <td>{{ emp.registration_address }}</td>
        <td><a @click="appStore.downloadFile(emp.file.id, emp.file.name)" href="#">Файл</a></td>
        <td>
          <button @click="editEmployee(emp)">Редактировать</button>
          <button @click="deleteEmployee(emp.id)">Удалить</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAppStore } from '@/store';
import { useRouter } from 'vue-router';
import {storeToRefs} from "pinia";

const appStore = useAppStore();
const {employees} = storeToRefs(appStore);
const router = useRouter();

onMounted(() => {
  appStore.stopEditing()
  appStore.fetchEmployees();
});

const addEmployee = () => {
  router.push('/employees/new');
};

const editEmployee = (employee) => {
  appStore.setEditing(employee)
  router.push(`/employees/new`);
};

const deleteEmployee = (id) => {
  appStore.deleteEmployee(id);
};
</script>