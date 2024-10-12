<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores/modules/user';
const userStore = useUserStore();

defineProps<{ msg: string }>()

const count = ref(0)

const user = reactive(userStore.user);
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ user.id }}</h2>
  <h2>{{ user.name }}</h2>
  <h2>{{ user.password }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
