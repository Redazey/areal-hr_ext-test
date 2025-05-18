<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: [String, Number, Object, null],
  list: Array,
  label: String,
})

const emit = defineEmits(['update:modelValue'])

const localValue = ref(props.modelValue)
watch(() => props.modelValue, (val) => {
  localValue.value = val
}, { immediate: true })

watch(localValue, (val) => {
  emit('update:modelValue', val)
})
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <select v-model="localValue">
      <option value="" disabled>Выберите:</option>
      <option v-for="element in list" :key="element.id" :value="element.id">
        {{ element.name }}
      </option>
    </select>
  </div>
</template>
