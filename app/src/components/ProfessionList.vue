<template>
  <div>
    <h2>Список должностей</h2>
    <button @click="addProfession">Добавить должность</button>
    <table>
      <thead>
      <tr>
        <th>Название</th>
        <th>Комментарий</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="prof in professions" :key="prof.id">
        <td>{{ prof.name }}</td>
        <td>{{ prof.comment }}</td>
        <td>
          <button @click="editProfession(prof)">Редактировать</button>
          <button @click="deleteProfession(prof.id)">Удалить</button>
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
const {professions} = storeToRefs(appStore);
const router = useRouter();

onMounted(() => {
  appStore.stopEditing();
  appStore.fetchProfessions();
});

const addProfession = () => {
  router.push('/professions/new');
};

const editProfession = (profession)=> {
  appStore.setEditing(profession);
  router.push(`/professions/new`);
};

const deleteProfession = (id) => {
  appStore.deleteProfession(id);
};
</script>