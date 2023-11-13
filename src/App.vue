<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/layouts/Header.vue'
</script>

<template>
  <div class="div">
    <HeaderVue />
    <RouterView />
  </div>
  <notifications position="top right" />
</template>

<style scoped>
.div{
  background-color: rgb(11 11 18 / 92%);
  min-height:100vh;
  color: azure;
}
@media (min-width: 1024px) {
  
}
</style>
