<script setup>
import { onMounted, ref, watch, computed } from "vue";
import Loadding from '../../../components/layouts/Loadding.vue'
import { notify } from "@kyvg/vue3-notification";
import store from "../../../stores/index";
import { useRouter } from 'vue-router'
import request from "../../../utils/request";

const router = useRouter()

const isLoadding = ref(false)
const login_username = ref('')
const login_password = ref('')

const loggedIn = computed(() => store.getters.usersss)
watch(loggedIn.value, (inChange, outChange) => {
    // router.push("/");
})
const setup = () => {
    document.title = "StorePay VN"
    if (loggedIn.value) {
        router.push("/home");
    }
};
function handleLogin() {
    var user = {
        username: login_username.value,
        password: login_password.value
    }
    store
        .dispatch("login", user)
        .then((data) => {
            if (data.status) {
                notify({
                    title: "Thành công",
                    text: "Đăng nhập thành công 🎉",
                    type: "success",
                });
                setTimeout(() => {
                    router.push("/home");
                }, 1000)
            } else {
                notify({
                    title: "Thất bại",
                    text: "Đăng nhập thất bại",
                    type: "error",
                });
                setTimeout(() => {
                    router.push("/login");
                }, 1000)
            }
        })
        .catch((error) => {
            console.log("errr", error);
            notify({
                title: "Thất bại",
                text: "Đăng nhập thất bại!",
                type: "error",
            });
        });
}

onMounted(() => {
    setup();
});
</script>

<template>
    <div class="auth" v-if="!isLoadding">
        <div class="auth-content">
            <div class="login">
                <div class="form-input mb-4">
                    <h4><i class='bx bx-diamond' style='color:#a302c7'  ></i> StorePay VN</h4>
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form2Example1">Tên đăng nhập</label>
                    <input type="text" v-model="login_username" class="form-control" placeholder="Tên đăng nhập" />
                </div>

                <!-- Password input -->
                <div class="form-outline mb-2">
                    <label class="form-label" for="form2Example2">Password</label>
                    <input type="password" v-model="login_password" class="form-control" placeholder="Mật khẩu" />
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-4">
                    <div class="col">
                        <!-- Simple link -->
                        <a href="#!">Quên mật khẩu?</a>
                    </div>
                </div>
                <div class="form-outline mb-2 btn-groups">
                    <button type="button" class="btn mb-4" @click="handleLogin()">Đăng nhập</button>&ensp;
                    <button type="button" class="btn mb-4" @click="handleLogin()">Đăng ký</button>
                </div>
                <!-- Submit button -->
                <div class="backgroud-home mb-4">
                    <div class="col">
                        <!-- Simple link -->
                        <RouterLink to="/">Về trang chủ</RouterLink>
                    </div>
                </div>
                <!-- Register buttons -->
            </div>
        </div>
    </div>
    <Loadding v-else />
</template>
<style scoped>
.backgroud-home{
    text-align: center;
}
a{
    text-decoration: none;
}
.backgroud-home a{
    color: white;
}
.auth {
    padding: 15px;
    padding-top: 30px;
    margin: auto;
    width: 400px;
}

.auth-content {
    border-radius: 50%;
    padding: 5px;
    max-width: 400px;
    margin: auto;
}

.btn-groups {
    text-align: center;
    width: 100%;
}
.login{
    border: 1px solid rgba(128, 128, 128, 0.274);
    padding:30px 15px;
    border-radius: 10px;
}
h4{
    text-align: center;
    text-transform: uppercase;
    border: 1px solid rgba(128, 128, 128, 0.082);
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.308);
    padding: 10px;
    background-color: rgba(137, 43, 226, 0.521);
    border-radius: 5px;
    color: white;
}
.btn{
    
    background-color: rgba(137, 43, 226, 0.658);
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.082);
    color: white;
    min-width: 150px;
}
</style>
