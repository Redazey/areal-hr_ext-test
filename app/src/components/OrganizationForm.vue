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
import {ref, defineProps} from 'vue';
import {useRouter} from "vue-router";
import {useAppStore} from '@/store';

const props = defineProps({
  isEdit: Boolean,
  existingOrganization: Object,
});

const organization = ref(props.isEdit ? {...props.existingOrganization} : {name: '', comment: ''});

const appStore = useAppStore();
const router = useRouter();

const submitForm = () => {
  if (props.isEdit) {
    appStore.updateOrganization(organization.value.id, organization.value);
  } else {
    appStore.createOrganization(organization.value);
  }
  router.push('/organizations');
};
</script>