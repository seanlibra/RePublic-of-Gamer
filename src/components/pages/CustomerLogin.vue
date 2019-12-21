<template>
  <div class="bg-dark-cust">
    <div class="position-relative" style="min-height:100vh">
      <form
        action="#"
        class="position-absolute p-4 shadow-lg form-bg"
        style="top:50%;left:50%;transform:translate(-50%, -50%);border-radius:16px;"
      >
        <a href class="text-white mr-3 font-en text-decoration-none">
          <h1 class="text-center font-weight-bold">
            ROG
            <i class="fas fa-gamepad"></i> 玩家共和國
          </h1>
          <p class="text-center">
            <span style="color:#3d8cd1;">RePublic</span> of
            <span style="color:#e8636a;">Gamers</span>
          </p>
        </a>
        <div>
          <h5 class="h5 text-white text-center font-weight-bold">玩家登入</h5>
        </div>
        <input type="text" class="form-control" placeholder="請輸入帳號" />
        <input type="text" class="form-control" placeholder="請輸入密碼" />
        <button class="mt-3 btn btn-primary w-100">登入</button>
        <div class="text-center mt-3 d-flex justify-content-around">
          <router-link
            to="/products"
            class="text-decoration-none text-dark"
            style="font-size:12px "
          >返回賣場</router-link>
          <router-link
            to="/dash_board_login"
            class="text-decoration-none text-dark"
            style="font-size:12px "
          >後台登入</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar";
import Footer from "../Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style scoped>
.back {
  background: linear-gradient(to top, #0c0c0c 0, #232323 100%);
  height: 100vh;
}
.form-bg {
  background: linear-gradient(to bottom, #a9a9a9 0, #c0c0c0 100%);
}
</style>