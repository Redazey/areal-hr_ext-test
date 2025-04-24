<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Добавить' }} пользователя</h2>
    <form @submit.prevent="submitForm">
      <input placeholder="Имя" type="text" v-model="user.last_name" required />
      <input
        placeholder="Фамилия"
        type="text"
        v-model="user.first_name"
        required
      />
      <input
        placeholder="Отчество"
        type="text"
        v-model="user.patronymic"
        required
      />
      <input placeholder="Email" type="email" v-model="user.email" required />
      <input
        placeholder="Пароль"
        type="password"
        v-model="user.password"
        required
      />

      <!-- Выпадающий список для выбора роли -->
      <div class="form-group">
        <label>Роли</label>
        <select v-model="user.role_id">
          <option value="" disabled>Выберите роль</option>
          <option v-for="role in roles" :key="role.id" :value="role.id">
            {{ role.name }}
          </option>
        </select>
      </div>

      <button type="submit">{{ isEdit ? 'Обновить' : 'Добавить' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';

const user = ref({
  last_name: '',
  first_name: '',
  patronymic: '',
  email: '',
  password: '',
  role_id: null,
});

const appStore = useAppStore();
const router = useRouter();
const { isEdit, roles } = storeToRefs(appStore);

onMounted(() => {
  appStore.fetchRoles();
  appStore.fetchUsers();
});

const submitForm = () => {
  if (isEdit.value) {
    appStore.updateUser(isEdit.value.id, user.value);
    appStore.stopEditing();
  } else {
    appStore.createUser(user.value);
  }
  router.push('/users');
};
</script>
