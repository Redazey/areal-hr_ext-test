<template>
  <div>
    <h2>Список {{ header }}</h2>
    <button @click="addAction">Добавить</button>
    <table v-if="columns.length > 0">
      <thead>
      <tr>
        <th v-for="(key, index) in columns" :key="index">
          {{ key }}
        </th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, rowIndex) in rawData.value" :key="rowIndex">
        <td v-for="(key, colIndex) in columns" :key="colIndex">
          {{ item[key] }}
        </td>
        <td>
          <button @click="editAction(item)">Редактировать</button>
          <button @click="deleteAction(item.id)">Удалить</button>
        </td>
      </tr>
      </tbody>
    </table>
    <h1 v-else>Записи не найдены!</h1>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  header: String,
  rawData: {
    type: Object,
    required: true
  },
  editAction: Function,
  deleteAction: Function,
  addAction: Function
});

const columns = computed(() => {
  if (!props.rawData.value || props.rawData.value.length === 0)
    return []

  const keys = Object.keys(props.rawData.value[0]);
  return keys.filter(k => !['deleted_at', 'updated_at', 'created_at'].includes(k))
});
</script>
