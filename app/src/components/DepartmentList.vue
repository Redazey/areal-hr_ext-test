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
        <td>{{ dep.organization }}</td>
        <td>{{ dep.parent_department }}</td>
        <td>{{ dep.name }}</td>
        <td>{{ dep.comment }}</td>
        <td>
          <button @click="editDepartment(dep.id)">Редактировать</button>
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

const appStore = useAppStore();
const router = useRouter();

onMounted(() => {
  appStore.fetchDepartments();
});

const departments = appStore.departments;

const addDepartment = () => {
  router.push('/departments/new');
};

const editDepartment = (id) => {
  router.push(`/departments/edit/${id}`);
};

const deleteDepartment = (id) => {
  appStore.deleteDepartment(id);
};
</script>