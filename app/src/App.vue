<script setup>
  import {RouterView, RouterLink} from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/organizations">Организации</RouterLink>
    <RouterLink to="/departments">Отделы</RouterLink>
    <RouterLink to="/professions">Должности</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>