<template>
  <div class="container-fluid bg-dark-cust">
    <Navbar />
    <Alert></Alert>
    <!-- 讀取效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- 購物車明細 -->
    <div>
      <div class="row justify-content-center">
        <div class="col-sm-8 col-lg-5">
          <div class="my-5">
            <div
              class="row text-light justify-content-between text-center pb-5"
              style="border-bottom:2px solid #FFFFFF"
            >
              <div class="col-2">
                <i class="far fa-check-circle fa-3x text-primary"></i>
                <p class="mt-2 text-primary">訂單確認</p>
              </div>
              <div class="col-1">
                <i class="fas fa-arrow-right fa-2x mt-3 "></i>
              </div>
              <div class="col-2">
                <i class="far far fa-check-circle fa-3x text-primary"></i>
                <p class="mt-2 text-primary">基本資料</p>
              </div>
              <div class="col-1">
                <i class="fas fa-arrow-right fa-2x mt-3"></i>
              </div>
              <div class="col-2 text-warning">
                <i class="fas fa-calendar-check fa-3x"></i>
                <p class="mt-2">完成訂單</p>
              </div>
            </div>
          </div>
          <h6 class="text-white text-center mb-3">
            <i class="fas fa-clipboard-list mr-2"></i>以下是您的購買明細
          </h6>
          <table class="table table-striped table-dark">
            <thead class="bg-danger">
              <tr>
                <th scope="col" colspan="2" class="text-center">商品訊息</th>
                <th scope="col">數量</th>
                <th scope="col">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <th scope="row">
                  <img
                    :src="item.product.imageUrl"
                    alt
                    width="50px"
                    height="80px"
                  />
                </th>
                <td class="align-middle">{{item.product.title}}</td>
                <td class="align-middle">{{item.qty}}/{{item.product.unit}}</td>
                <td class="align-middle text-warning">{{item.product.price | currency}}元</td>
              </tr>
            </tbody>
          </table>
          <div class="text-white mt-5 d-flex justify-content-end">
            <div style="border-bottom:2px solid #FFFFFF">   
              <p class="text-warning h4"><span class="text-light mr-3">總計:</span>{{order.total | currency}}元</p>
            </div>
          </div>
          <!-- 基本資料確定群組 -->
          <h6 class="text-white text-center mb-3">
            <i class="fas far fa-id-card mr-2"></i>您的基本資料
          </h6>
          <table class="table table-striped table-dark">
            <thead>
              <tr class="bg-danger">
                <th scope="col" colspan="4" class="text-center">基本資料</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" colspan="2">姓名</th>
                <td colspan="2">{{order.user.name}}</td>
              </tr>
              <tr>
                <th scope="row" colspan="2">電話</th>
                <td colspan="2">{{order.user.tel}}</td>
              </tr>
              <tr>
                <th scope="row" colspan="2">Email</th>
                <td colspan="2">{{order.user.email}}</td>
              </tr>
              <tr>
                <th scope="row" colspan="2">地址</th>
                <td colspan="2">{{order.user.adress}}</td>
              </tr>
              <tr>
                <th scope="row" colspan="2">備註</th>
                <td colspan="2">{{order.message}}</td>
              </tr>
              <tr>
                <th scope="row" colspan="2">付款狀態</th>
                <td colspan="2" class="text-warning" v-if="!order.is_paid">尚未付款</td>
                <td colspan="2" class="text-success" v-if="order.is_paid">付款成功</td>
              </tr>
            </tbody>
          </table>
          <!-- 下一步按鈕群組 -->
          <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-outline-danger rounded-pill" v-if="!order.is_paid" @click="payOrder()">確認付款</button>
            <router-link to="/" class="btn btn-outline-danger rounded-pill" v-if="order.is_paid" >返回賣場</router-link>
          </div>
        </div>
      </div>
    </div>

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
  data(){
    return{
     isLoading :false,
     cart_product:[],
     orderId: "",
      order: {
        user: {}
      },
      isLoading: false
    }
  },
   methods:{
    getOrder(){
      const vm = this;
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.order = response.data.order
        vm.isLoading = false;
      });
    },
    payOrder(){
      const vm = this;
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(api).then(response => {
        this.$bus.$emit("message:push", response.data.message, "primary");
        if (response.data.success){
          console.log('付款成功')
          this.getOrder()
          vm.isLoading = false;
        }
        
      }); 
    },
  },
  created() {
   this.orderId = this.$route.params.orderId
   this.getOrder()
  },
  
};
</script>
<style scoped>


</style>
