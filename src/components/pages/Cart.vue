<template>
  <div class="container-fluid bg-dark-cust">
    <Navbar />
    <Alert></Alert>
    <loading :active.sync="isLoading"></loading>
    <!-- 如果購物車內為0則顯示此模板 -->
<template v-if="cart_product.total == 0 ">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-sm-8 col-lg-5 ">
          <div class="my-5">
            <div class="row text-light justify-content-between text-center pb-5" style="border-bottom:2px solid #FFFFFF">
              <div class="col-2 text-warning">
                <i class=" fas fa-list-alt fa-3x"></i>
                <p class="mt-2">訂單確認</p>
              </div>
              <div class="col-1">
                  <i class="fas fa-arrow-right fa-2x mt-3"></i>
              </div>
              <div class="col-2">
                <i class="far fa-id-card fa-3x"></i>
                <p class="mt-2">基本資料</p>
              </div>
              <div class="col-1">
                  <i class="fas fa-arrow-right fa-2x mt-3"></i>
              </div>
              <div class="col-2">
                <i class="fas fa-calendar-check fa-3x "></i>
                <p class="mt-2">完成訂單</p>
              </div>
            </div>
          </div>
          <h6 class="h3 text-white text-center mb-3">目前購物車是空的唷!</h6>
          <div class="text-white mt-5 d-flex justify-content-end">
          </div>
          <!-- 下一步按鈕群組 -->
          <div class="d-flex justify-content-center mt-3">
            <router-link to="/products" class="btn btn-outline-danger rounded-pill">繼續選購遊戲</router-link>
          </div>
        </div>
      </div>
</template>
<!-- 如果購物車內有東西則顯示此模板 -->
    <template v-else>
      <div class="row justify-content-center">
        <div class="col-sm-8 col-lg-5 ">
          <div class="my-5">
            <div class="row text-light justify-content-between text-center pb-5" style="border-bottom:2px solid #FFFFFF">
              <div class="col-2 text-warning">
                <i class=" fas fa-list-alt fa-3x"></i>
                <p class="mt-2">訂單確認</p>
              </div>
              <div class="col-1">
                  <i class="fas fa-arrow-right fa-2x mt-3"></i>
              </div>
              <div class="col-2">
                <i class="far fa-id-card fa-3x"></i>
                <p class="mt-2">基本資料</p>
              </div>
              <div class="col-1">
                  <i class="fas fa-arrow-right fa-2x mt-3"></i>
              </div>
              <div class="col-2">
                <i class="fas fa-calendar-check fa-3x "></i>
                <p class="mt-2">完成訂單</p>
              </div>
            </div>
          </div>
          <h6 class="h3 text-white text-center mb-3">購買明細</h6>
          <ul>
            <li v-for="item in cart_product.carts" :key="item.id" class="d-flex py-3" style="border-bottom:2px solid #FFFFFF">
              <img class="shadow-cust" :src="item.product.imageUrl" alt="" width="90px" height="130px"/>
              <div class="d-flex flex-column text-white w-100">
                <div class="d-flex justify-content-between ">
                  <p class="ml-5 h5">{{item.product.title}}</p>
                  <p class="h50">{{item.qty}}{{item.product.unit}}</p>
                </div>
                 <div class="d-flex justify-content-between ml-5 mb-auto">
                   <span class="badge badge-primary my-2" v-if="item.product.category == 'PS4'">Play Station 4</span>
                   <span class="badge badge-danger my-2" v-if="item.product.category == 'switch'">Switch</span>
                  <span class="badge badge-success my-2" v-if="item.product.category == 'XBOX ONE'">Xbox One</span>
                  </div>
                <div class="d-flex justify-content-between">
                  <button v-if="!is_coupon" class="ml-5 align-self-end btn btn-sm btn-outline-danger" @click="deleteProduct(item.id)">刪除</button>
                  <span v-if="is_coupon"></span>
                  <div>
                    <del class="d-block text-right">{{item.product.origin_price | currency}}元</del>
                    <p class="text-warning h4">{{item.product.price | currency}}元</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="text-white mt-5 d-flex justify-content-end">
            <div style="border-bottom:3px solid #FFFFFF">
              <del class="d-block text-right" >{{cart_product.total | currency}}元</del>
              <p v-if="is_coupon" class="text-right  my-1 "><span class="text-success font-weight-bolder h5">已套用優惠券</span></p>
              <p class="text-warning h4"><span class="text-light mr-3">總計:</span>{{cart_product.final_total | currency}}元</p>
            </div>
          </div>
          <!-- 優惠券群組 -->
          <div class="mt-3" v-if="!is_coupon">
            <label for class="text-white mb-2">優惠券</label>
            <div class="input-group ">
              <input type="text" placeholder="請輸入優惠代碼" class="form-control " v-model="couponCode" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" @click="addCouponCode">送出</button>
              </div>
            </div>
          </div>
          <!-- 下一步群組 -->
          <div class="d-flex justify-content-center mt-3">
            <router-link to="/profile" class="btn btn-outline-danger rounded-pill">下一步</router-link>
          </div>
        </div>
      </div>
   </template>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Navbar";
import Footer from "../Footer";
import Alert from "../AlertMessage";

export default {
  components: {
    Navbar,
    Footer,
    Alert,
  },
  data() {
    return {
      cart_product:{},
      isLoading: false,
      couponCode: '',
      is_coupon:false,
      status:{
        loadingItem:'',
      },
    };
  },
  methods:{
    getCart(){
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.cart_product = response.data.data
        vm.isLoading = false;
      });
    },
    deleteProduct(id){
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        this.$bus.$emit("message:push",'已刪除商品囉', "danger");
        vm.isLoading = false;
        vm.getCart();
      });
    },
    addCouponCode(){
       const vm = this
       const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/coupon`;
       const coupon = {
        code: vm.couponCode
      }
      vm.isLoading = true
      vm.$http.post(api, { data: coupon }).then(response => {
        if(response.data.success){    
          vm.is_coupon = true
          this.$bus.$emit('message:push', response.data.message, 'success')
        }
        else {
          this.$bus.$emit('message:push', response.data.message, 'danger')
        }
        vm.isLoading = false
        vm.getCart()
      })
    }
  },
  created() {
    this.getCart();
  }
};
</script>
<style scoped>
.back {
  background: linear-gradient(to top, #0c0c0c 0, #232323 100%);
}
.Cbtn-secondry {
  background: #ffffff !important;
}
</style>

