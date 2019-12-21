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
          <h5 class="h5 text-danger text-center font-weight-bold">管理員登入</h5>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="請輸入帳號"
          v-model="user.username"
          required
          autofocus
        />
        <input
          type="password"
          class="form-control"
          placeholder="請輸入密碼"
          v-model="user.password"
          required
        />
        <button class="mt-3 btn btn-primary w-100" @click.prevent="signin">登入</button>
        <div class="text-center mt-3">
          <router-link
            to="/customer_login"
            class="text-decoration-none text-dark"
            style="font-size:12px "
          >返回</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoardLogin",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.APTPATH}/admin/signin`;
      const vm = this;
      console.log(process.env.APTPATH, process.env.CUSTOMPATH);
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/admin/dash_board_products");
        }
      });
    }
  }
};
</script>


<style scoped>
.form-bg {
  background: linear-gradient(to bottom, #a9a9a9 0, #c0c0c0 100%);
}
</style>
