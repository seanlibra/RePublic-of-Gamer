<template>
  <div class="container-fluid bg-dark-cust">
    <Navbar />
    <Alert></Alert>
    <loading :active.sync="isLoading"></loading>
    <!-- 購物車明細 -->
    <div >
      <div class="row justify-content-center ">
        <div class="col-md-6 col-lg-5 ">
          <div class="my-5">
            <div
              class="row text-light justify-content-between text-center pb-5"
              style="border-bottom:2px solid #FFFFFF">
              <div class="col-2">
                <i class="fas far fa-check-circle fa-3x text-primary"></i>
                <p class="mt-2 text-primary">訂單確認</p>
              </div>
              <div class="col-1">
                <i class="fas fa-arrow-right fa-2x mt-3"></i>
              </div>
              <div class="col-2 text-warning">
                <i class="far fa-id-card fa-3x"></i>
                <p class="mt-2">資料填寫</p>
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
          <h6 class="h3 text-white text-center mb-3">輸入基本資料</h6>
          <form @submit.prevent="CreatOrder()">
            
            <div class="form-group">
              <label for="Name">姓名:</label>
              <input type="text" class="form-control" v-validate="'required'" :class="{'is-invalid':errors.has('name')}" name="name" id="Name" v-model="form.user.name"  placeholder="請輸入姓名" />
              <span class="text-danger " v-if="errors.has('name')">姓名不得為空</span>
            </div>
            <div class="form-group">
              <label for="tel">電話:</label>
              <input type="text" class="form-control"  v-validate="'required|digits:10'" :class="{'is-invalid':errors.has('tel')}" id="tel" name="tel" v-model="form.user.tel" placeholder="請輸入電話" />
              <span class="text-danger" v-if="errors.has('tel')">電話號碼為10位數的數字</span>
             
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control"  v-validate="'required|email'" :class="{'is-invalid':errors.has('email')}" name="email" id="Email" v-model="form.user.email" placeholder="請輸入Email" />
              <span class="text-danger " v-if="errors.has('email')">{{errors.first('email')}}</span>
            </div>
            <div class="form-group">
              <label for="address">地址:</label>
              <input type="text" class="form-control"   v-validate="'required'" :class="{'is-invalid':errors.has('adress')}"  id="adress" name="adress" v-model="form.user.adress" placeholder="請輸入地址" />
              <span class="text-danger " v-if="errors.has('adress')">地址不得為空</span>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">備註:</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" v-model="form.message" rows="3"></textarea>
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn  btn-danger" >確認</button>
            </div> 
          </form>
          <!-- 付款功能(未實作) -->
          <h6 class="h3 text-white text-center my-4">請選擇付款方式</h6>
        <div class="accordion" id="accordionExample">
        <div class="d-flex justify-content-center">
        <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">ATM轉帳</button>
        <button class="btn btn-danger collapsed mx-2" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">信用卡</button>
        <button class="btn btn-danger collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">貨到付款</button>
        </div>
       
    <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <div class="row">
        <div class="col-8">
          <div class="form-group">
              <label for="credait">此次交易的臨時帳號:</label>
              <input type="text" class="form-control" id="credait" placeholder="12345678932114" readonly/>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
              <label for="credait">銀行代碼:</label>
              <input type="text" class="form-control" id="credait" placeholder="813 玉山" readonly/>
          </div>
        </div>
      </div>
      <p class=" text-center text-warning h4"><i class="fas fa-exclamation-circle ">注意!</i></p>
      <br>
      <p class="text-white">此臨時帳號僅作為本次交易使用。在此提醒您，客服人員絕對不會以電話或簡訊要求您私下匯款，如有任何疑問請撥168反詐騙專線，玩家共和國關心您的荷包。</p>
      </div>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <form action="#">
          <div class="form-group">
              <label for="credait">信用卡卡號:</label>
              <input type="text" class="form-control" id="credait" placeholder="請輸入卡號" />
          </div>
          <div class="row">
           <div class="col">
              <label for="deadline">有效期限:</label>
              <input type="text" class="form-control" id="deadline" placeholder="請輸入有效期限" />
           </div>
           <div class="col">
              <label for="password">安全碼(共3碼:)</label>
              <input type="text" class="form-control" id="password" placeholder="請輸入安全碼" />
           </div>
          </div>
        </form>
      </div>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        <div class="row">
          <div class="col">
           <div class="form-group">
              <label for="Name">收件人姓名:</label>
              <input type="text" class="form-control" id="Name" placeholder="請輸入姓名" />
          </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="cel">收件人電話:</label>
              <input type="text" class="form-control" id="cel" placeholder="請輸入電話" />
              
            </div>
          </div>
        </div>
        <div class="form-group">
              <label for="cus-adress">收件人地址:</label>
              <input type="text" class="form-control" id="cus-adress" placeholder="地址" />
        </div>
      </div>
    </div>
</div>

          <!-- 下一步按鈕群組 -->
          <div class="d-flex justify-content-center mt-3 pt-3">
            <router-link to="/check" class="btn btn-outline-danger rounded-pill">下一步</router-link>
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
    isLoading: false,
    form:{
      user:{
        name:'',
        email:'',
        tel:'',
        adress:'',
      },
      message:''
    },
    }
  },
  methods:{
    CreatOrder(){
      const vm = this;
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order =vm.form;
      //  vm.isLoading = true;
       this.$validator.validate().then(valid => {
        if (valid) {
        this.$http.post(api,{data:order}).then(response => {
        console.log('訂單已建立',response);
        vm.isLoading = false;
        vm.$router.push(`/check/${response.data.orderId}`);
      });
          
       } else {
       console.log("欄位不完整");
      }
      });
    }
  }
};
</script>

<style scoped>
label {
  color: #ffffff;
  margin-bottom: 0.5em;
}
</style>
