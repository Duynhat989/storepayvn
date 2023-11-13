<script setup>
import { onMounted, ref } from "vue";
const isLogined = ref(false);

const setup = () => {
  document.title = "Thông báo"
};

onMounted(() => {
  setup();
});
</script>

<template>
  <div class="container">
    danh sách thông báo
  </div>
  <!-- Footer -->
</template>
<style scoped>
</style>
