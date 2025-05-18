<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Добавить' }} пользователя</h2>
    <form @submit.prevent="submitForm">
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

      <TitleSelect
          @update:modelValue="user.role_id = $event"
          :list="roles"
          title="Выберите роль"
      />
      <p v-if="errors.role_id" class="error">{{ errors.role_id }}</p>

      <button type="submit">{{ isEdit ? 'Обновить' : 'Добавить' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';
import * as yup from 'yup';
import TitleSelect from "@/components/TitleSelect.vue";

const router = useRouter();
const appStore = useAppStore();
const { isEdit, roles } = storeToRefs(appStore);

const user = ref({
  last_name: '',
  first_name: '',
  patronymic: '',
  email: '',
  password: '',
  role_id: null,
});

const errors = ref({});

const schema = yup.object({
  last_name: yup.string().min(3).max(255).required('Введите имя'),
  first_name: yup.string().min(3).max(255).required('Введите фамилию'),
  patronymic: yup.string().min(3).max(255),
  email: yup.string().email('Неверный email').required('Введите email'),
  password: yup.string().min(10).max(255).required('Введите пароль'),
  role_id: yup.number().required('Выберите роль'),
});

const submitForm = async () => {
  try {
    await schema.validate(user.value, { abortEarly: false });
    errors.value = {};

    if (isEdit.value) {
      await appStore.updateUser(isEdit.value.id, user.value);
      await appStore.stopEditing();
    } else {
      await appStore.createUser(user.value);
    }

    await router.push('/users');
  } catch (err) {
    if (err.inner) {
      errors.value = err.inner.reduce((acc, e) => {
        acc[e.path] = e.message;
        return acc;
      }, {});
    }
  }
};

onMounted(() => {
  appStore.fetchRoles();
  appStore.fetchUsers();
});
</script>
