<script setup>
import { onMounted, ref } from "vue";
const isLogined = ref(false);

const setup = () => {
  document.title = "ERROR 404"
};

onMounted(() => {
  setup();
});
</script>

<template>
  <h1>ERROR 404</h1>
</template>
<style scoped>
</style>
