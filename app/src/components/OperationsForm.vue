<template>
  <div>
    <h2>Совершить операцию</h2>
    <form @submit.prevent="submitForm">
      <!-- Выпадающий список для выбора сотрудника -->
      <TitleSelect
          @update:modelValue="operation.employee_id = $event"
          :list="employees"
          title="Сотрудник"
      />

      <!-- Выпадающий список для выбора должности -->
      <TitleSelect
          @update:modelValue="operation.profession_id = $event"
          :list="professions"
          title="Должность"
      />

      <!-- Выпадающий список для выбора отдела -->
      <TitleSelect
          @update:modelValue="operation.department_id = $event"
          :list="departments"
          title="Отдел"
      />

      <textarea placeholder="Зарплата" v-model="operation.salary" />

      <button type="submit">Подтвердить</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';
import TitleSelect from "@/components/TitleSelect.vue";

const operation = ref({
  employee_id: '',
  profession_id: '',
  department_id: '',
  salary: '',
});

const appStore = useAppStore();
const router = useRouter();

const { departments, professions, employees } = storeToRefs(appStore);

onMounted(() => {
  appStore.fetchDepartments();
  appStore.fetchProfessions();
  appStore.fetchEmployees();
});

const submitForm = () => {
  appStore.createOperation(operation.value);
  router.push('/operations');
};
</script>
