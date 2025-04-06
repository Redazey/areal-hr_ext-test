<template>
  <div>
    <h2>Совершить операцию</h2>
    <form @submit.prevent="submitForm">
      <!-- Выпадающий список для выбора сотрудника -->
      <div>
        <label for="employee">Сотрудник</label>
        <select v-model="operation.employeeId" required>
          <option value="" disabled>Выберите сотрудника</option>
          <option v-for="emp in employees" :key="emp.id" :value="emp.id">
            {{ `${emp.last_name} ${emp.first_name} ${emp.patronymic}` }}
          </option>
        </select>
      </div>

      <!-- Выпадающий список для выбора должности -->
      <div>
        <label for="profession">Должность</label>
        <select v-model="operation.professionId" required>
          <option value="" disabled>Выберите должность</option>
          <option v-for="prof in professions" :key="prof.id" :value="prof.id">
            {{ prof.name }}
          </option>
        </select>
      </div>

      <!-- Выпадающий список для выбора отдела -->
      <div>
        <label for="department">Отдел</label>
        <select v-model="operation.departmentId">
          <option value="" disabled>Выберите отдел</option>
          <option v-for="dep in departments" :key="dep.id" :value="dep.id">
            {{ dep.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="salary">Зарплата</label>
        <textarea v-model="operation.salary"></textarea>
      </div>

      <button type="submit">Подтвердить</button>
    </form>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {useAppStore} from '@/store';
import {storeToRefs} from "pinia";

const operation = ref({employeeId: '', professionId: '', departmentId: '', salary: ''});

const appStore = useAppStore();
const router = useRouter();

const {departments, professions, employees} = storeToRefs(appStore);

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
