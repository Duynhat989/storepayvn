<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
.loadding{
    width: 100%;
    min-height: 80vh;
}
.loadding_content{
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<template>
    <main>
        <div class="loadding">
            <div class="loadding_content">
                <span class="loader"></span>
            </div>
        </div>
    </main>
</template>
<script setup>
import { onMounted, ref } from "vue";
onMounted(() => {

});
</script>