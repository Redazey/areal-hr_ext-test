<template>
  <div>
    <h2>Корпоративные файлы</h2>
    <input type="file" @change="onFileChange" />
    <table>
      <thead>
      <tr>
        <th>Название файла</th>
        <th>Путь к файлу</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="file in files" :key="file.id">
        <td>{{file.name}}</td>
        <td>{{file.path}}</td>
        <td>
          <button @click="appStore.deleteFile(file.id)">Удалить</button>
          <button @click="appStore.downloadFile(file.id, file.name)">Скачать</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import {useAppStore} from '@/store';
import {storeToRefs} from "pinia";

const appStore = useAppStore();
const {files} = storeToRefs(appStore);

const onFileChange = (e) => {
  const file = e.target.files[0];
  appStore.createFile(file);
}

onMounted(() => {
  appStore.fetchFiles();
});
</script>
