<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Создать' }} организацию</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Название</label>
        <input type="text" v-model="organization.name" required/>
      </div>
      <div>
        <label for="comment">Комментарий</label>
        <textarea v-model="organization.comment"></textarea>
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

const organization = ref({name: '', comment: ''});

const appStore = useAppStore();
const router = useRouter();
const {isEdit} = storeToRefs(appStore);

const submitForm = () => {
  if (isEdit.value) {
    appStore.updateOrganization(isEdit.value.id, organization.value);
    appStore.stopEditing();
  } else {
    appStore.createOrganization(organization.value);
  }
  router.push('/organizations');
};
</script>