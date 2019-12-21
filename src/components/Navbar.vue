<template>
  <div >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark " style="opacity:0.7;box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.7);border-radius:8px" >
      <router-link to="/" class="text-white mr-3 font-en text-decoration-none" href="#">
        <a class="font-weight-bold ">
          ROG
          <i class="fas fa-gamepad"></i> 玩家共和國
        </a>
        <p class="mb-0">
          <span style="color:#3d8cd1;">RePublic</span> of
          <span style="color:#e8636a;">Gamers</span>
        </p>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center mr-5" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex align-items-center">
          <li class="nav-item mx-5 ">
            <router-link to="/" class="nav-link">首頁</router-link>
          </li>
           <li class="nav-item mx-4 ">
            <router-link to="/news" class="nav-link">最新消息</router-link>
          </li>
          <li class="nav-item mx-4 ">
            <router-link to="/products" class="nav-link">商品列表</router-link>
          </li>
          <li class="nav-item mx-4 ">
            <router-link to="/about_me" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item  d-block d-lg-none">
            <router-link to="/customer_login" class="nav-link ">會員登入</router-link>
          </li>
        </ul>
      </div>
      <div class="mr-5 d-none d-lg-block">
        <router-link to="/customer_login" class=" btn btn-outline-success">登入</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
};
</script>



<style scoped>
.font-en {
  font-family: "Arial Black", "Microsoft JhengHei";
}

</style>



