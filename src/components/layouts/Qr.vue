<style scoped>
.qrcode{
    width: 100%;
    min-height: 80vh;
    position: fixed;
    top:10%;
}
.qrcode_content{
    width: 300px;
    height: 300px;
    background-color: rgb(43, 43, 43);
    margin: auto;
}
img{
    width: 100%;
}
.close{
    
}
.close span{
    background-color: rgb(179, 7, 7);
    border-radius: 50%;
    display: block;
    width: 30px;
    height: 30px;
    margin:10px auto;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
}
</style>
<template>
    <main>
        <div class="qrcode">
            <div class="qrcode_content">
                <div class="close">
                    <img src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" alt="">
                </div>
                <div class="close">
                    <span>X</span>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { onMounted, ref } from "vue";
onMounted(() => {

});
</script>