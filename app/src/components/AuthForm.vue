<template>
  <form @submit.prevent="" class="form">
    <h1>Авторизация</h1>
    <input
      v-model="auth.email"
      type="text"
      required
      maxlength="50"
      placeholder="email"
    />

    <input
      v-model="auth.password"
      type="text"
      required
      maxlength="50"
      placeholder="password"
    />

    <div class="form-group">
      <button @click="sendForm" :disabled="!isFormValid">Войти</button>
      <RouterLink to="/registration">Нет аккаунта?</RouterLink>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAppStore } from '@/store/index.js';
import router from "@/router/index.js";

const appStore = useAppStore();

// Реактивный объект для формы
const auth = ref({
  email: '',
  password: '',
});

// Валидация формы
const isFormValid = computed(() => {
  return (
    auth.value.email.trim().length > 0 && auth.value.password.trim().length > 0
  );
});

// Метод сброса формы
const resetForm = () => {
  auth.value = {
    email: '',
    password: '',
  };
};

const sendForm = async () => {
  await appStore.auth(auth.value);
  resetForm();
};
</script>
