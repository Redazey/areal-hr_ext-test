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
    <RouterLink to="/employees">Сотрудники</RouterLink>
    <RouterLink to="/operations">Кадровые операции</RouterLink>
    <RouterLink to="/users">Пользователи</RouterLink>
    <RouterLink to="/changes">История изменений</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>
