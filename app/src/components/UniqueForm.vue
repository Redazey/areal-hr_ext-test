<template>
  <form @submit.prevent="onSubmit(localModel)">
    <div v-for="(field, index) in fields" :key="index">
      <input
        :type="field.type"
        :placeholder="field.label"
        v-model="localModel[field.model]"
        :required="field.required"
        @change="field.onChange"
      />
    </div>

    <button type="submit">{{ submitText }}</button>
  </form>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
  model: Object,
  fields: Array,
  onSubmit: Function,
});

const localModel = ref({ ...props.model });

const submitText = computed(() => {
  return props.model.id ? 'Сохранить' : 'Добавить';
});
</script>
