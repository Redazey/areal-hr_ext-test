<template>
  <div>
    <h2>{{ isEdit ? 'Редактировать' : 'Создать' }} должность</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Название</label>
        <input type="text" v-model="profession.name" required/>
      </div>
      <button type="submit">{{ isEdit ? 'Обновить' : 'Создать' }}</button>
    </form>
  </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';
import {useRouter} from "vue-router";
import {useAppStore} from '@/store';

const props = defineProps({
  isEdit: Boolean,
  existingProfession: Object,
});

const profession = ref(props.isEdit ? {...props.existingProfession} : {name: '', comment: ''});

const appStore = useAppStore();
const router = useRouter();

const submitForm = () => {
  if (props.isEdit) {
    appStore.updateProfession(profession.value.id, profession.value);
  } else {
    appStore.createProfession(profession.value);
  }
  router.push('/professions');
};
</script>