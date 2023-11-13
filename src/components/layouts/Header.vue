<style scoped>
header {
  padding-top: 10px;
  height: 80px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
.right{
  height: 80px;
}
.menu {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.menu-item {
  padding: 0px 15px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.head-item {
  text-decoration: none;
  color: aliceblue;
  /* background-color: aliceblue; */
  border: 1px solid rgba(255, 255, 255, 0.527);
}
.head-item:hover{
  background-color: rgba(255, 255, 255, 0.288);
}
</style>
<template>
  <header>
    <div class="container">
      <div class="left">

      </div>
      <div class="right">
        <ul v-if="loggedIn" class="menu flex">
          <li class="menu-item">
            <RouterLink to="/" class="btn head-item"><i class='bx bx-home-alt'></i></RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="about" class="btn head-item"><i class='bx bxs-bell-ring' ></i></RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="store" class="btn head-item"><i class='bx bx-store' ></i></RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="manager" class="btn head-item"><i class='bx bx-copy-alt'></i></RouterLink>
          </li>
          <li class="menu-item">
            <a href="" class="btn head-item logout" @click="logout"><i class='bx bx-log-in' ></i></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import store from "../../stores/index";

const loggedIn = computed(() => store.getters.usersss)

const logout = () => {
  store.dispatch('logout')
  router.push('/login')
};

onMounted(() => {

});
</script>