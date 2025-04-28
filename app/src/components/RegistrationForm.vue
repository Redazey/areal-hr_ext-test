<script setup>
import { useAppStore } from '@/store/index.js';
import { ref } from 'vue';
import * as yup from 'yup';
const appStore = useAppStore();

const user = ref({
  last_name: '',
  first_name: '',
  patronymic: '',
  email: '',
  password: '',
});

const errors = ref({});

const schema = yup.object({
  last_name: yup.string().min(3).max(255).required('Введите имя'),
  first_name: yup.string().min(3).max(255).required('Введите фамилию'),
  patronymic: yup.string().min(3).max(255),
  email: yup.string().email('Неверный email').required('Введите email'),
  password: yup.string().min(10).max(255).required('Введите пароль'),
});

const submitForm = async () => {
  try {
    await schema.validate(user.value, { abortEarly: false });
    errors.value = {};

    await appStore.registration(user.value);
  } catch (err) {
    if (err.inner) {
      errors.value = err.inner.reduce((acc, e) => {
        acc[e.path] = e.message;
        return acc;
      }, {});
    }
  }
};
</script>

<template>
  <form @submit.prevent="">
    <h1>Регистрация</h1>
    <input placeholder="Имя" type="text" v-model="user.last_name" required />
    <p v-if="errors.last_name" class="error">{{ errors.last_name }}</p>

    <input
      placeholder="Фамилия"
      type="text"
      v-model="user.first_name"
      required
    />
    <p v-if="errors.first_name" class="error">{{ errors.first_name }}</p>

    <input
      placeholder="Отчество"
      type="text"
      v-model="user.patronymic"
      required
    />
    <p v-if="errors.patronymic" class="error">{{ errors.patronymic }}</p>

    <input placeholder="Email" type="email" v-model="user.email" required />
    <p v-if="errors.email" class="error">{{ errors.email }}</p>

    <input
      placeholder="Пароль"
      type="password"
      v-model="user.password"
      required
    />
    <p v-if="errors.password" class="error">{{ errors.password }}</p>

    <div class="form-group">
      <button @click="submitForm">Зарегистрироваться</button>
      <RouterLink to="/auth">Уже есть аккаунт?</RouterLink>
    </div>
  </form>
</template>
