<script setup>
import { onMounted, ref, computed, reactive } from "vue";
import Loadding from '../../../components/layouts/Loadding.vue'

import request from "../../../utils/request";
import store from "../../../stores/index";
import { useRouter } from 'vue-router'
import { notify } from "@kyvg/vue3-notification";

const isLoadding = ref(false)
const userInfo = ref('')
const router = useRouter()


const loggedIn = computed(() => store.getters.usersss)

//---form input
const infoPay = reactive({ fullname: '', content: '', money: '', timestemp: '' })
const setup = () => {
    document.title = "StorePay VN"
    if (loggedIn.value) {
        router.push("/home");
    }
};
const refresh = () => {
    Object.assign(infoPay, {
        fullname: null,
        content: null,
        money: null,
        timestemp: null
    });
}
const info = async () => {
    var user = await request.post("user/info", {});
    userInfo.value = user.data.user
}
onMounted(() => {
    setup();
});
</script>

<template>
    <!-- navbar header -->
    <div class="site" v-if="!isLoadding">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- Container wrapper -->
            <div class="container">
                <!-- Navbar brand -->
                <RouterLink class="navbar-brand me-2" to="/">
                    <!-- <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="16" alt="MDB Logo"
                        loading="lazy" style="margin-top: -1px;" /> -->
                        <h5 style="color: blue;text-transform: uppercase;font-weight: 600;margin: 0;">StorePay VN</h5>
                </RouterLink>

                <!-- Toggle button -->
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class='bx bx-menu' style='color:#43464a' ></i>
                </button>

                <!-- Collapsible wrapper -->
                <div class="collapse navbar-collapse" id="navbarButtonsExample">
                    <!-- Left links -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                    <!-- Left links -->

                    <div class="d-flex align-items-center">
                        <RouterLink type="button" class="btn btn-outline-primary me-2" to="login">
                            Đăng nhập
                        </RouterLink>
                        <RouterLink type="button" class="btn btn-outline-danger me-3" to="login">
                            Đăng ký
                        </RouterLink>
                        <a class="btn btn-dark px-3" target="_blank" href="https://www.facebook.com/profile.php?id=100042254226138" role="button"><i class='bx bxl-facebook bx-tada' style='color:#ffffff'  ></i></a>
                    </div>
                </div>
                <!-- Collapsible wrapper -->
            </div>
            <!-- Container wrapper -->
        </nav>
        <!-- <div class="main">

        </div> -->
        <!-- Navbar -->
    </div>
    <Loadding v-else />
</template>
<style scoped>
.navbar {
    position: fixed;
    width: 100%;
    top: 0;
}
.main{
    background-color: #dbdbdb;
    min-height: 400px;
    margin-top: -34px;
}
</style>
