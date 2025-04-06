<template>
  <div>
    <h2>Список кадровых операций</h2>
    <button @click="addOperation">Совершить операцию</button>
    <table>
      <thead>
      <tr>
        <th>Сотрудник</th>
        <th>Должность</th>
        <th>Отдел</th>
        <th>Зарплата</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="oper in operations" :key="oper.id">
        <td>{{ `${oper.employee.last_name} ${oper.employee.first_name} ${oper.employee.patronymic}` }}</td>
        <td>{{ oper.profession.name }}</td>
        <td>{{ oper.department.name }}</td>
        <td>{{ oper.salary }}</td>
        <td>
          <button @click="deleteOperation(oper.id)">Удалить</button>
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
const router = useRouter();
const {operations} = storeToRefs(appStore);

onMounted(() => {
  appStore.stopEditing();
  appStore.fetchOperations();
});

const addOperation = () => {
  router.push('/operation/new');
};

const deleteOperation = (id) => {
  appStore.deleteOperation(id);
};
</script>