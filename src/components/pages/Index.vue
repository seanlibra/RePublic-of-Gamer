<template>
  <div class="container-fluid bg-dark-cust">
    <Navbar />
    <Alert></Alert>
    <!-- 讀取效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- 輪播 -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/image/index/index-img-1.jpg"
            class="d-block w-100 img-fluid"
            alt="..."
            style="max-width:100%;max-height:700px"
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/image/index/index-img-2.jpg"
            class="d-block w-100 img-fluid"
            alt="..."
            style="max-width:100%;max-height:700px"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!-- 中間三主機部分 -->
    </div>
    <div class="container">
      <section class="my-4">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div
              class="card position-relative video-game-bg"
              style="background-color:#7cc6f0;background: linear-gradient(to bottom, #7cc6f0, #3d8cd1);"
              data-toggle="modal"
              data-target="#ps4_model_group"
            >
              <img
                class="index-img"
                src="@/assets/image/index/PS4_Logo.png"
                width="192px"
                height="108px"
                alt
                style="position:absolute;top:0"
              />
              <img
                class="index-img shadow-cust"
                src="@/assets/image/index/PS4.png"
                width="250px"
                height="250px"
                alt
              />
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div
              class="card video-game-bg"
              style="background-color:#D3D3D3;background: linear-gradient(to bottom, 	#D3D3D3, #A9A9A9);"
              data-toggle="modal"
              data-target="#x_box_one_model_group"
            >
              <img
                class="index-img"
                src="@/assets/image/index/Xbox_One_logo.png"
                width="300px"
                height="60px"
                alt
                style="position:absolute;top:15%"
              />
              <img
                class="index-img shadow-cust"
                src="@/assets/image/index/Xbox_One.png"
                width="300px"
                height="250px"
                alt
                style="bottom:-5%;"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="card position-relative video-game-bg"
              style="background-color:#ea878c;background: linear-gradient(to bottom, #ea878c, #e8636a);"
              data-toggle="modal"
              data-target="#switch_model_group"
            >
              <img
                class="index-img"
                src="@/assets/image/index/Nintendo_Switch_Logo.png"
                width="150px"
                height="150px"
                alt
                style="position:absolute;top:10%"
              />
              <img
                class="index-img shadow-cust"
                src="@/assets/image/index/Nintendo_Switch-1.png"
                width="300px"
                height="150px"
                alt
              />
            </div>
          </div>
        </div>
      </section>
      <!-- PS4介紹Modal群組 -->
      <div
        class="modal fade"
        id="ps4_model_group"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header" style="background-color:#0066FF">
              <h5
                class="modal-title text-white font-weight-bold"
                id="exampleModalCenterTitle"
              >PlayStation 4</h5>
            </div>
            <div class="modal-body d-flex justify-content-center">
              <img
                src="@/assets/image/index/PS4.png"
                width="250px"
                height="250px"
                alt
                style="filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))"
              />
              <div style="font-size:14px">
                <p>PS4運用超群的描繪能力及處理性能，提供充滿臨場感的影像及猶如身歷其境的遊戲體驗。</p>
                <p class="mt-2">只需要一個按鈕便能向全世界展現自己的遊玩過程，或是與世界各地的玩家們互相交流，透過網路體驗各種樂趣。</p>
                <p class="mt-2">透過變得更加精巧的PS4，享受各式各樣充滿創新意念的精彩遊戲。</p>
                <a
                  target="_blank"
                  href="https://asia.playstation.com/cht-tw/ps4/"
                  class="btn btn-sm text-white mt-3 px-3"
                  style="background-color:#0066FF"
                >了解更多</a>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>
      <!-- XBOX ONE介紹群組 -->
      <div
        class="modal fade"
        id="x_box_one_model_group"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header bg-success">
              <h5
                class="modal-title text-white font-weight-bold"
                id="exampleModalCenterTitle"
              >Xbox One X</h5>
            </div>
            <div class="modal-body d-flex justify-content-center">
              <img
                src="@/assets/image/index/Xbox_One.png"
                width="250px"
                height="250px"
                alt
                style="filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))"
              />
              <div class="ml-2" style="font-size:14px">
                <h6 class="h5 font-weight-bold">世上最強大的主機</h6>
                <p>比任何其他遊戲主機強大 40%，讓你體驗真正的 4K 遊戲享受。Xbox One X 讓遊戲變得更好玩。</p>
                <h6 class="h5 mt-2 font-weight-bold">更流暢的遊戲體驗</h6>
                <p class="mt-2">8 核心自訂 AMD CPU 的測量結果為 2.3GHz，可將先進的 AI、逼真的細節和更順暢的互動方式帶到你的遊戲中。</p>
                <a
                  target="_blank"
                  href="https://www.xbox.com/zh-TW/xbox-one-s"
                  class="btn btn-sm btn-success mt-3 px-3"
                >了解更多</a>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Switch介紹群組 -->
      <div
        class="modal fade"
        id="switch_model_group"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header" style="background-color:#ea878c">
              <h5
                class="modal-title text-white font-weight-bold"
                id="exampleModalCenterTitle"
              >Nintendo Switch</h5>
            </div>
            <div class="modal-body d-flex justify-content-center">
              <img
                src="@/assets/image/index/Nintendo_Switch-2.png"
                width="250px"
                height="250px"
                alt
                style="filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))"
              />
              <div class="ml-3" style="font-size:14px ">
                <p>任天堂Switch 是日本任天堂公司出品的電子遊戲機</p>
                <p class="mt-2">擁有可拆卸控制器和可分離式主機，遊戲載體使用了專用卡匣。主機處理器使用了NVIDIA客制的Tegra X1系統晶片</p>
                <p
                  class="mt-2"
                >任天堂Switch混合了家用主機和可攜式遊戲機的概念，主體為一個類似平板電腦的裝置，採用了JDI生產的6.2英吋的多觸點顯示屏，解析度為1280x720像素；像素密度為236.87ppi。[25][26]內置32GB儲存空間，並支援Micro SD（SDHC、SDXC）儲存卡作為擴充。</p>
                <a
                  target="_blank"
                  href="https://www.nintendo.tw/software/switch/"
                  class="btn btn-sm text-white mt-3 px-3"
                  style="background-color:#ea878c"
                >了解更多</a>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 結束 -->
      <div
        class="py-3 mb-3 bg-dark text-white text-center h5 shadow-cust"
        style="border-radius:16px"
      >
        <i class="fas fa-gamepad mr-2"></i>熱門遊戲
      </div>
      <!-- 下方熱門遊戲群組 -->
      <section class="mb-3">
        <div>
          <loading :active.sync="isLoading"></loading>
          <div class="row mt-4">
            <div class="col-lg-4 mb-4 shadow-cust" v-for="item in products" :key="item.id">
              <div class="bg-transparent">
                <div
                  class="img-bg-cust card-cust"
                  :style="{backgroundImage:`url(${item.imageUrl})`}"
                  @click="getSingleProduct(item.id)"
                ></div>
                <div class="card-body">
                  <div class="card-body-top">
                    <span
                      class="badge badge-primary float-right"
                      v-if="item.category == 'PS4'"
                    >Play Station 4</span>
                    <span
                      class="badge badge-danger float-right"
                      v-if="item.category == 'switch'"
                    >Switch</span>
                    <span
                      class="badge badge-success float-right"
                      v-if="item.category == 'XBOX ONE'"
                    >Xbox One</span>
                    <h5 class="h6 font-weight-bold text-light">{{item.title}}</h5>
                    <div class="d-flex justify-content-between">
                      <div class="h5" v-if="!item.price">NT.${{item.origin_price}}元</div>
                      <del class="h6 text-light" v-if="item.price">NT.${{item.origin_price}}元</del>
                      <div
                        class="h5 text-warning font-weight-bold"
                        v-if="item.price"
                      >NT.{{item.price | currency}}元</div>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex bg-secondary" style="border-radius:0 0 10px 10px">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    style="border-radius:12px"
                    @click="getSingleProduct(item.id)"
                  >遊戲介紹</button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm ml-auto"
                    style="border-radius:12px"
                    @click="addtoCart(item.id)"
                  >加到購物車</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Alert from "../AlertMessage";

export default {
  components: {
    Navbar,
    Footer,
    Alert
  },
  data() {
    return {
      products: [],
      product: {},
      isLoading: false,
      randomProducts: []
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
        vm.isLoading = false;
        vm.randomProducts = vm.products.sort(() => {
          return Math.random() - 0.5;
        });
        vm.randomProducts.length = 3;
      });
    },
    getSingleProduct(id) {
      this.$router.push(`/signle_product/${id}`);
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      const cart = {
        product_id: id,
        qty
      };
      vm.isLoading = true;
      this.$http.post(api, { data: cart }).then(response => {
        this.$bus.$emit("message:push", response.data.message, "success");
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>




<style scoped>
.card-cust:hover {
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
  transition: all 0.3s;
  transform: translateY(-3px);
}
.video-game-bg {
  height: 350px;
  border-radius: 20px;
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
  cursor: pointer;
}
.index-img {
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  transition: all 0.5s;
}
</style>