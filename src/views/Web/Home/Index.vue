<script setup>
import { onMounted, ref, watch, reactive } from "vue";
import Loadding from '../../../components/layouts/Loadding.vue'

import request from "../../../utils/request";

import Qrcode from '../../../components/layouts/Qr.vue'
import { notify } from "@kyvg/vue3-notification";

const isLoadding = ref(false)
const userInfo = ref('')
const resultContainer = ref()

//---form input
const infoPay = reactive({ fullname: '', content: '', money: '', timestemp: '' })

const setup = async () => {
    document.title = "StorePay VN"
    info()
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
function clickInput() {
    document.getElementById('imageInput').click()
}
async function readImage(event) {
    const input = event.target;
    isLoadding.value = true
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = async function (e) {
            const imageBase64 = e.target.result.split(',')[1];
            // var url = uploadImage(imageBase64)
            var textContent1 = await redirect(imageBase64)
            if (textContent1 != null) {
                var result = await analysis(textContent1)
                if (result.status) {
                    isLoadding.value = false
                    Object.assign(infoPay, result.data.output);
                    console.log(textContent1)
                    //phân tích
                    notify({
                        title: "Thành công",
                        text: "Done🎉",
                        type: "success",
                    });
                }
                else {
                    notify({
                        title: "Thất bịa",
                        text: "Vui lòng xem lại ảnh",
                        type: "error",
                    });
                }
            }
            else {
                notify({
                    title: "Thất bịa",
                    text: "Vui lòng xem lại ảnh",
                    type: "error",
                });
            }
        };

        reader.readAsDataURL(input.files[0]);
    }
}
async function uploadImage(imageBase64) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("image", imageBase64);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    var res = await fetch("https://api.imgbb.com/1/upload?key=f49b0f6f8143d87f09d1172b4f0dd0d7", requestOptions)
    var json = await res.json()
    return json.data.display_url
}
const redirect = async (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            request.post("read/recognize", { image: url })
                .then(response => {
                    console.log(response.data);
                    resolve(response.data.text);
                }).catch(error => {
                    reject(null);
                });
        } catch (error) {
            reject(null);
        }
    });
}
async function analysis(text) {
    var res = await request.post("read/analysis", {
        text: text
    });
    return res
}

onMounted(() => {
    setup();
});
</script>

<template>
    <div class="site" v-if="!isLoadding">
        <div class="infoStore">
            <h4>Thông tin chuyển khoản</h4>
            <input type="file" id="imageInput" hidden accept="image/*" @change="readImage">
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Người gửi:</label>
                <input type="text" class="form-control" placeholder="Người gửi" v-model="infoPay.fullname" required>
            </div>
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Nội dung:</label>
                <input type="text" class="form-control" placeholder="Nội dung" v-model="infoPay.content" required>
            </div>
            <div class="input-group flex">
                <div class="input-monney mb-2 mt-2">
                    <label for="uname" class="form-label">Số tiền:</label>
                    <input type="text" class="form-control" placeholder="Số tiền" v-model="infoPay.money" required>
                </div>
                <div class="input-time mb-2 mt-2">
                    <label for="uname" class="form-label">Thời gian:</label>
                    <input type="date" class="form-control" placeholder="Thời gian" v-model="infoPay.timestemp" required>
                </div>
            </div>
            <div class="mb-1 mt-1">
                <label for="uname" class="form-label">Cửa hàng:</label>
                <select class="form-select">
                    <option>Cửa hàng 1</option>
                    <option>Cửa hàng 2</option>
                    <option>Cửa hàng 3</option>
                    <option>Cửa hàng 4</option>
                </select>
            </div>
            <div class="">
                <label for="uname" class="form-label">Nhân viên: <span>{{ userInfo.fullname }}</span></label>
            </div>
            <div class="input-group flex">
                <div class="button mb-3 mt-3">
                    <button type="submit" class="btn btn-outline-info">Xác nhận thông tin</button>
                </div>
                <div class="button mb-3 mt-3">
                    <button type="submit" class="btn btn-outline-warning" @click="refresh">Làm mới</button>
                </div>
            </div>
        </div>
        <div class="dropImage">
            <i class='bx bx-camera bx-tada' style='color:#d500e4' @click="clickInput"></i>
        </div>
        <div class="dropImageLeft">
            <i class='bx bx-qr-scan bx-tada' style='color:#d500e4'></i>
        </div>
        <!-- <Qrcode /> -->
    </div>
    <Loadding v-else />
</template>
<style scoped>
.infoStore {
    padding: 15px;
    padding-top: 30px;
    max-width: 400px;
    margin: auto;
    border: 1px solid rgba(128, 128, 128, 0.274);
    border-radius: 10px;
    /* box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.308); */
    margin-top: 30px;
}

.dropImage {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 2em;
    border-radius: 50%;
    padding: 5px;
}

.dropImageLeft {
    position: fixed;
    bottom: 20px;
    left: 20px;
    font-size: 2em;
    border-radius: 50%;
    padding: 5px;
}

.dropImage span {
    border: 1px solid gray;
}

.flex {
    display: flex;
    flex-wrap: nowrap;
}

.input-monney {
    padding-right: 3px;
}

.input-time {
    padding-left: 3px;
}

.button {
    width: calc(100%/2);
    padding: 5px;
}

.button button {
    width: 100%;
}
</style>
