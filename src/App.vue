<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/layouts/Header.vue'
import { onMounted, ref, computed } from "vue";
// import store from "../../stores/index";

// const loggedIn = computed(() => store.getters.usersss)

// const logout = () => {
//   store.dispatch('logout')
//   router.push('/login')
// };

</script>

<template>
  <div class="div">
    <HeaderVue/>
    <div class="div-2">
      <RouterView />
    </div>
  </div>
  <notifications position="top right" />
</template>

<style scoped>
.div{
  background-color: rgb(11 11 18 / 92%);
  min-height:100vh;
  color: azure;
}
.div-2{
  padding-top: 90px;
}
@media (min-width: 1024px) {
  
}
</style>
