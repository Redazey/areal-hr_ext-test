<template>
  <div>
    <h2>Список должностей</h2>
    <button @click="addProfession">Добавить должность</button>
    <table>
      <thead>
      <tr>
        <th>Название</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="org in profession" :key="org.id">
        <td>{{ org.name }}</td>
        <td>
          <button @click="editProfession(org.id)">Редактировать</button>
          <button @click="deleteProfession(org.id)">Удалить</button>
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
  appStore.fetchProfessions();
});

const profession = appStore.profession;

const addProfession = () => {
  router.push('/profession/new');
};

const editProfession = (id) => {
  router.push(`/profession/edit/${id}`);
};

const deleteProfession = (id) => {
  appStore.deleteProfession(id);
};
</script>