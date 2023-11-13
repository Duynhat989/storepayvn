<script setup>
import { onMounted, ref } from "vue";
const isLogined = ref(false);

const setup = () => {
  document.title = "Cửa hàng"
};

onMounted(() => {
  setup();
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="item col-6 col-md-4 col-xl-2">
        <div class="item-content">
          Tạo cửa hàng mới
        </div>
      </div>
      <div class="item col-6 col-md-4 col-xl-2">
        <div class="item-content">
          Tạo menu online
        </div>
      </div>
      <div class="item col-6 col-md-4 col-xl-2">
        <div class="item-content">
          Thêm nhân viên mới
        </div>
      </div>
      <div class="item col-6 col-md-4 col-xl-2">
        <div class="item-content">
          Quản lý nhân viên
        </div>
      </div>
      <div class="item col-6 col-md-4 col-xl-2">
        <div class="item-content">
          Cài đặt cửa hàng
        </div>
      </div>
      <div class="item col-6 col-md-4 col-xl-2">
        <div class="item-content">
          Báo cáo lỗi
        </div>
      </div>
    </div>
  </div>
  <br>
  <div class="container">
    <div class="row">
      <h2>Danh sách cửa hàng</h2>
      <p>The .table-dark class adds a black background to the table:</p>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- Footer -->
</template>
<style scoped>
.item {
  padding: 7px;
}

.item-content {
  min-height: 130px;
  border-radius: 10px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(128, 128, 128, 0.24);
  box-shadow: 3px 3px 3px gray;
}

.item-content:hover {
  transform: scale(1.03);
  transition: ease-in-out 0.5s;
  cursor: pointer;
  background-color: rgba(240, 248, 255, 0.295);
}
</style>
