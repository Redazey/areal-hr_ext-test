<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <RouterLink to="/organizations">Организации</RouterLink>
    <RouterLink to="/departments">Отделы</RouterLink>
    <RouterLink to="/professions">Должности</RouterLink>
    <RouterLink to="/files">Файлы</RouterLink>
    <RouterLink to="/employees">Сотрудники</RouterLink>
    <RouterLink to="/operations">Кадровые операции</RouterLink>
    <RouterLink to="/changes">История изменений</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>
