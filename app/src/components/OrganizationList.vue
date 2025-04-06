<template>
  <div>
    <h2>Список организаций</h2>
    <button @click="addOrganization">Добавить организацию</button>
    <table>
      <thead>
      <tr>
        <th>Название</th>
        <th>Комментарий</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="org in organizations" :key="org.id">
        <td>{{ org.name }}</td>
        <td>{{ org.comment }}</td>
        <td>
          <button @click="editOrganization(org)">Редактировать</button>
          <button @click="deleteOrganization(org.id)">Удалить</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import {useAppStore} from '@/store';
import {useRouter} from 'vue-router';
import {storeToRefs} from "pinia";

const appStore = useAppStore();
const {organizations} = storeToRefs(appStore);
const router = useRouter();

onMounted(() => {
  appStore.stopEditing();
  appStore.fetchOrganizations();
});

const addOrganization = () => {
  router.push('/organizations/new');
};

const editOrganization = (organization) => {
  appStore.setEditing(organization);
  router.push(`/organizations/new`);
};

const deleteOrganization = (id) => {
  appStore.deleteOrganization(id);
};
</script>