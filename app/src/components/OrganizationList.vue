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
          <button @click="editOrganization(org.id)">Редактировать</button>
          <button @click="deleteOrganization(org.id)">Удалить</button>
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
  appStore.fetchOrganizations();
});

const organizations = appStore.organizations;

const addOrganization = () => {
  router.push('/organizations/new');
};

const editOrganization = (id) => {
  router.push(`/organizations/edit/${id}`);
};

const deleteOrganization = (id) => {
  appStore.deleteOrganization(id);
};
</script>