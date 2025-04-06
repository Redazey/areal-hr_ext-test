<template>
  <div>
    <h2>Список отделов</h2>
    <button @click="addDepartment">Добавить отдел</button>
    <table>
      <thead>
      <tr>
        <th>Организация</th>
        <th>Старший отдел</th>
        <th>Название</th>
        <th>Комментарий</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="dep in departments" :key="dep.id">
        <td>{{ dep.organization.name }}</td>
        <td>{{ findDepartment(dep) }}</td>
        <td>{{ dep.name }}</td>
        <td>{{ dep.comment }}</td>
        <td>
          <button @click="editDepartment(dep)">Редактировать</button>
          <button @click="deleteDepartment(dep.id)">Удалить</button>
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
const {departments} = storeToRefs(appStore);
const router = useRouter();

onMounted(() => {
  appStore.stopEditing()
  appStore.fetchDepartments();
});

const findDepartment = (dep) => {
  const parentDepartment = departments.value.find(d => d.id === dep.parentDepartmentId);
  return parentDepartment ? parentDepartment.name : "Это главный отдел";
};

const addDepartment = () => {
  router.push('/departments/new');
};

const editDepartment = (department) => {
  appStore.setEditing(department)
  router.push(`/departments/new`);
};

const deleteDepartment = (id) => {
  appStore.deleteDepartment(id);
};
</script>