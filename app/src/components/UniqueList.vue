<template>
  <div>
    <h2>Список {{ header }}</h2>
    <button v-if="showAdd" @click="addAction">Добавить</button>
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
            <template v-if="typeof item[key] === 'object' && item[key] !== null">
              {{ Object.values(item[key]).join(' ') }}
            </template>
            <template v-else>
              {{ item[key] }}
            </template>
          </td>
          <td>
            <button v-if="showEdit" @click="editAction(item)">Редактировать</button>
            <button v-if="showDelete" @click="deleteAction(item.id)">Удалить</button>
            <button
              v-for="(action, index) in customActions"
              :key="index"
              @click="action.onClick(item)"
            >
              {{ action.label }}
            </button>
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
  rawData: Object,
  editAction: Function,
  deleteAction: Function,
  addAction: Function,
  showEdit: { type: Boolean, default: true },
  showDelete: { type: Boolean, default: true },
  showAdd: { type: Boolean, default: true },
  customActions: {
    type: Array,
    default: () => [],
  },
});

console.log(props.customActions)

const columns = computed(() => {
  if (!props.rawData.value || props.rawData.value.length === 0) return [];

  const keys = Object.keys(props.rawData.value[0]);
  return keys.filter(
    (k) => !['deleted_at', 'updated_at', 'created_at'].includes(k),
  );
});
</script>
