<script setup>
  import {RouterView, RouterLink} from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/organizations">Организации</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>