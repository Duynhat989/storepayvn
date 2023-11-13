<style scoped>
header{
    height: 50px;
    background-color: blueviolet;
}
</style>
<template>
  <header>
    <div class="container">
      <ul>
        <li>
          <a href="" class="logout" @click="logout">logout</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup>
import { onMounted, ref,computed } from "vue";
import store from "../../stores/index";

const loggedIn = computed(() => store.getters.usersss)

const logout = () => {
  store.dispatch('logout')
  router.push('/login')
};

onMounted(() => {
  
});
</script>