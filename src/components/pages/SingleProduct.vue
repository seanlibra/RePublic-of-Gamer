<template>
    <div class="container-fluid bg-dark-cust">
      <Alert></Alert>
      <Navbar />
      <!-- 讀取效果 -->
      <loading :active.sync="isLoading"></loading>
      <!-- 中間產品 -->
      <div class="row my-5 justify-content-center">
        <div class="col-lg-3 col-md-12">
          <div
            class="position-relative"
            style="margin:50px;height:600px;border-radius: 100px 100px 100px 100px"
          >
            <div class="left-img" :style="{backgroundImage:`url(${product.imageUrl})`}"></div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12">
          <div
            class="position-relative shadow-cust"
            style="margin:50px;background-color:#444444;height:600px;border-radius: 100px 100px 100px 100px"
          >
            <router-link to="/products">
              <div class="position-absolute" style="bottom:10%;left:13%">
                <i class="fas fa-angle-double-left fa-3x text-white"></i>
              </div>
            </router-link>
            <div class="position-absolute" style="top:50%;left:50%;transform:translate(-50%,-50%);">
              <h5 class="h2 text-white">{{product.title}}</h5>
              <span class="badge badge-primary my-2" v-if="product.category == 'PS4'">Play Station 4</span>
              <span class="badge badge-danger my-2" v-if="product.category == 'switch'">Switch</span>
              <span class="badge badge-success my-2" v-if="product.category == 'XBOX ONE'">Xbox One</span>
              <h6 class="h6 text-white">【遊戲介紹】</h6>
              <p class="text-white" style="line-height:20px">{{product.description}}</p>
              <h6 class="h2 text-warning">NT.{{product.price | currency}}元</h6>
              <div class="d-flex justify-content-between">
                <del class="text-white align-self-center">NT.{{product.origin_price}}元</del>
                <button
                  class="btn btn-lg btn-outline-light rounded-pill"
                  @click="addtoCart(product.id)"
                >加入購物車</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 購物車元件 -->
        <div class="fixed-cart">
          <CartIcon :CartData="CartList" @Remove="getCart"></CartIcon>
        </div>
      </div>
      <Footer />
    </div>
</template>

<script>
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartIcon from "../Cart_Icon";
import Alert from "../AlertMessage";
export default {
  components: {
    Navbar,
    Footer,
    CartIcon,
    Alert
  },
  data() {
    return {
      product: {},
      id: "",
      isLoading: false,
      status: {
        loadingItem: ""
      },
      CartList: {}
    };
  },
  methods: {
    getProduct(id) {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.product = response.data.product;
        vm.product.num = 1;
        vm.isLoading = false;
      });
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(response => {
        this.$bus.$emit("message:push", response.data.message, "success");
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
      });
    },
    getCart() {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response);
        vm.CartList = response.data.data;
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduct(this.id);
    this.getCart();
  }
};
</script>
<style scoped>
.left-img {
  height: 450px;
  min-width: 350px;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
}
.fixed-cart {
  position: fixed;
  z-index: 10000;
  bottom: 100px;
  right: 70px;
}
</style>
