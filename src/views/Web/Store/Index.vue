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
          Menu online
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
  <div class="container store-container">
    <div class="row">
      <h4>Danh sách cửa hàng</h4>
      <p>Sử dụng các bộ lọc để hiển thị các cửa hàng bị ẩn</p>
      <div class="table-controller">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Tên cửa hàng</th>
              <th>Nhân viên</th>
              <th>Menu Online</th>
              <th>Hóa đơn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cafe Dinh Lang (99 le duan)</td>
              <td><span>6</span> <span>nv</span></td>
              <td><span>Có</span> <a href="#" target="_blank"><i class='bx bx-link-alt' ></i></a></td>
              <td>Có <span>0</span> hóa đơn</td>
            </tr>
            <tr>
              <td>Shop Hoa (99 le duan)</td>
              <td><span>2</span> <span>nv</span></td>
              <td><span>Có</span> <span><a href="#" target="_blank"><i class='bx bx-link-alt' ></i></a></span></td>
              <td>Có <span>0</span> hóa đơn</td>
            </tr>
            <tr>
              <td>Vuong Linh (99 le duan)</td>
              <td><span>1</span> <span>nv</span></td>
              <td><span>Không</span> <span><a href="#" target="_blank"><i class='bx bx-link-alt' ></i></a></span></td>
              <td>Có <span>0</span> hóa đơn</td>
            </tr>
            <tr>
              <td>Cafe Dinh Lang (99 le duan)</td>
              <td><span>1</span> <span>nv</span></td>
              <td><span>Có</span> <span><a href="#" target="_blank"><i class='bx bx-link-alt' ></i></a></span></td>
              <td>Có <span>0</span> hóa đơn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Footer -->
</template>
<style scoped>
.item {
  padding: 7px;
}

.store-container {
  padding: 0 5px;
}

.item-content {
  min-height: 130px;
  border-radius: 10px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(128, 128, 128, 0.24);
  box-shadow: 3px 3px 3px rgba(100, 100, 100, 0.199);
}

.item-content:hover {
  transform: scale(1.03);
  transition: ease-in-out 0.5s;
  cursor: pointer;
  border: none;
  background-color: rgba(240, 248, 255, 0.295);
}

.table-controller {
  /* overflow-x: auto; */
}

.bx-link-alt{
  cursor: pointer;
}

</style>
