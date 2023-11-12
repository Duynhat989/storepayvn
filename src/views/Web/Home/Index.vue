<script setup>
import { onMounted, ref, watch } from "vue";

const SITE_API = ref(import.meta.env.VITE_SITE_API)
const resultContainer = ref()
const setup = () => {
    document.title = "StorePay"
};

async function readImage(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = async function (e) {
            const imageBase64 = e.target.result.split(',')[1];
            let url = await uploadImage(imageBase64)
            let text = await redirect(url)
            resultContainer.value = text
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
    <input type="file" id="imageInput" accept="image/*" @change="readImage">
    <br>
    <img id="previewImage" style="max-width: 100%; max-height: 300px; margin-top: 10px; display: none;">
    <br>
    <button @click="performOCR()">Perform OCR</button>
    <br>
    <div id="resultContainer">{{ resultContainer }}</div>
</template>
<style scoped>
</style>
