<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Добавить' }} сотрудника</h2>
    <form @submit.prevent="submitForm">
      <input
        placeholder="Имя"
        type="text"
        v-model="employee.last_name"
        required
      />
      <input
        placeholder="Фамилия"
        type="text"
        v-model="employee.first_name"
        required
      />
      <input
        placeholder="Отчество"
        type="text"
        v-model="employee.patronymic"
        required
      />
      <div class="form-group">
        <label>День рождения</label>
        <input placeholder="Имя" type="date" v-model="employee.dob" required />
      </div>
      <input
        placeholder="Паспорт"
        type="text"
        v-model="employee.passport"
        required
      />
      <input
        placeholder="Адрес"
        type="text"
        v-model="employee.registration_address"
        required
      />

      <!-- Выпадающий список для выбора файла -->
      <TitleSelect
          @update:modelValue="employee.passport_scan = $event"
          :list="files"
          title="Выберите скан паспорта"
      />

      <button type="submit">{{ isEdit ? 'Обновить' : 'Добавить' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';
import TitleSelect from "@/components/TitleSelect.vue";

const employee = ref({
  last_name: '',
  first_name: '',
  patronymic: '',
  passport: '',
  registration_address: '',
  passport_scan: null,
});

const appStore = useAppStore();
const router = useRouter();
const { isEdit } = storeToRefs(appStore);

const { files } = storeToRefs(appStore);

onMounted(() => {
  appStore.fetchFiles();
});

const submitForm = () => {
  if (isEdit.value) {
    appStore.updateEmployee(isEdit.value.id, employee.value);
    appStore.stopEditing();
  } else {
    appStore.createEmployee(employee.value);
  }
  router.push('/employees');
};
</script>
