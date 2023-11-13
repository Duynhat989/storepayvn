<script setup>
import { onMounted, ref } from "vue";
const isLogined = ref(false);

const setup = () => {
  document.title = "Hóa đơn"
};

onMounted(() => {
  setup();
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="filter flex">
        <div class="filter-item mb-4">
          <select class="form-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div class="filter-item mb-4">
          <select class="form-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
</template>
<style scoped>
.flex{
  display: flex;
  flex-wrap: wrap;
}
.form-select{
  width: 250px;
}
.filter-item {
  margin-right: 5px;
}

</style>
