<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Создать' }} должность</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Название</label>
        <input type="text" v-model="profession.name" required/>
      </div>
      <div>
        <label for="name">Комментарий</label>
        <textarea v-model="profession.comment"></textarea>
      </div>
      <button type="submit">{{ isEdit ? 'Обновить' : 'Создать' }}</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {useAppStore} from '@/store';
import {storeToRefs} from "pinia";

const appStore = useAppStore();
const router = useRouter();

const profession = ref({name: '', comment: ''});
const {isEdit} = storeToRefs(appStore);

const submitForm = () => {
  if (isEdit.value) {
    appStore.updateProfession(isEdit.value.id, profession.value);
    appStore.stopEditing();
  } else {
    appStore.createProfession(profession.value);
  }
  router.push('/professions');
};
</script>