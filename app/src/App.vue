<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useAppStore } from '@/store/index.js';
import { storeToRefs } from 'pinia';
const appStore = useAppStore();
const { user } = storeToRefs(appStore);
</script>

<template>
  <header v-if="user">
    <RouterLink to="/organizations">Организации</RouterLink>
    <RouterLink to="/departments">Отделы</RouterLink>
    <RouterLink to="/professions">Должности</RouterLink>
    <RouterLink to="/files">Файлы</RouterLink>
    <RouterLink v-if="user?.role_id == 1" to="/employees">Сотрудники</RouterLink>
    <RouterLink to="/operations">Кадровые операции</RouterLink>
    <RouterLink v-if="user?.role_id == 1" to="/users">Пользователи</RouterLink>
    <RouterLink v-if="user?.role_id == 1" to="/changes">История изменений</RouterLink>
    <button @click="appStore.logout">Выход</button>
  </header>

  <main>
    <RouterView />
  </main>
</template>