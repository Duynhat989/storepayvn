<script setup>
import { onMounted, ref, watch } from "vue";
import Loadding from '../../../components/layouts/Loadding.vue'
import { notify } from "@kyvg/vue3-notification";

const isLoadding = ref(false)
const isLogin = ref(false)
const SITE_API = ref(import.meta.env.VITE_SITE_API)
const resultContainer = ref()
const setup = () => {
    document.title = "StorePay"
};
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
            let url = await uploadImage(imageBase64)
            let text = await redirect(url)
            resultContainer.value = text
            isLoadding.value = false
            notify({
                title: "Thành công",
                text: "Done🎉",
                type: "success",
            });
        };

        var sdi = reader.readAsDataURL(input.files[0]);
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
async function redirect(url) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("image", url);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    var res = await fetch(`${SITE_API.value}api/read/recognize`, requestOptions)
    var json = await res.json()
    return json.text
}

onMounted(() => {
    setup();
});
</script>

<template>
    <div class="site" v-if="!isLoadding">
        <div class="infoStore">
            <h2>Thông tin chuyển khoản</h2>
            <input type="file" id="imageInput" hidden accept="image/*" @change="readImage">
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Người gửi:</label>
                <input type="text" class="form-control" id="uname" placeholder="Người gửi" name="uname" required>
            </div>
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Người nhận:</label>
                <input type="text" class="form-control" id="uname" placeholder="Người nhận" name="uname" required>
            </div>
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Số tiền:</label>
                <input type="text" class="form-control" id="uname" placeholder="Số tiền" name="uname" required>
            </div>
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Thời gian:</label>
                <input type="text" class="form-control" id="uname" placeholder="Thời gian" name="uname" required>
            </div>
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Thời gian:</label>
                <select class="form-select">
                    <option>Cửa hàng 1</option>
                    <option>Cửa hàng 2</option>
                    <option>Cửa hàng 3</option>
                    <option>Cửa hàng 4</option>
                </select>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                <label class="form-check-label" for="myCheck">Lưu kèm hình ảnh.</label>
            </div>
            <button type="submit" class="btn btn-primary">Xác nhận thông tin</button>
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Thông tin từ ảnh:</label>
                <div id="resultContainer">{{ resultContainer }}</div>
            </div>
        </div>
        <div class="dropImage">
            <i class='bx bx-camera bx-tada' style='color:#d500e4' @click="clickInput"></i>
        </div>
    </div>
    <Loadding v-else />
</template>
<style scoped>
.infoStore {
    padding: 15px;
    padding-top: 30px;
    width: 400px;
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

.dropImage span {
    border: 1px solid gray;
}
</style>
