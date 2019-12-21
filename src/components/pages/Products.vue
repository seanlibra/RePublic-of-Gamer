<template>
  <div class="container-fluid bg-dark-cust">
    <Navbar />
    <Alert></Alert>
    <div class="container mt-5">
      <div class="row">
        <!-- sidebar -->
        <div class="col-lg-2 col-md-12">
          <div class="row justify-content-around sticky-top mt-3" id="list-tab" role="tablist">
            <a
              class="list-group-item-action mt-2 py-2 d-flex col-lg-12 col-md-5 right_list_btn"
              href="#"
              :class="{active:category ===''}"
              @click.prevent="changeCategory()"
            >
              <img src="@/assets/image/products/left_btn-1.png" alt width="40px" height="40px" />
              <span class="align-self-center">All Products</span>
            </a>
            <a
              class="list-group-item-action mt-2 py-2 d-flex col-lg-12 col-md-5 right_list_btn"
              href="#"
              :class="{active:category ==='PS4'}"
              @click.prevent="changeCategory(value ='PS4')"
            >
              <img src="@/assets/image/products/left_btn-2.png" alt width="40px" height="40px" />
              <span class="align-self-center">Play station 4</span>
            </a>
            <a
              class="list-group-item-action mt-2 py-2 d-flex col-lg-12 col-md-5 right_list_btn"
              href="#"
              :class="{active:category ==='switch'}"
              @click.prevent="changeCategory(value ='switch')"
            >
              <img src="@/assets/image/products/left_btn-3.png" alt width="40px" height="40px" />
              <span class="align-self-center ml-2">Nintendo Switch</span>
            </a>
            <a
              class="list-group-item-action mt-2 py-2 d-flex col-lg-12 col-md-5 right_list_btn"
              href="#"
              :class="{active:category ==='XBOX ONE'}"
              @click.prevent="changeCategory(value ='XBOX ONE')"
            >
              <img src="@/assets/image/products/left_btn-4.png" alt width="40px" height="40px" />
              <span class="align-self-center ml-2">Xbox One</span>
            </a>
          </div>
        </div>
        <div class="col-md-12 col-lg-10">
          <div class="row justify-content-center my-4">
            <!-- 輪播 -->
            <div class="mx-3">
              <div
                id="carouselExampleControls"
                class="carousel slide d-none d-md-block"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="@/assets/image/products/product-img-1.jpg"
                      class="d-block w-100"
                      alt="..."
                      style="max-width:100%;max-height:600px;border-radius:20px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/image/products/product-img-2.jpg"
                      class="d-block w-100"
                      alt="..."
                      style="max-width:100%;max-height:600px;border-radius:20px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/image/products/product-img-3.jpg"
                      class="d-block w-100"
                      alt="..."
                      style="max-width:100%;max-height:600px;border-radius:20px"
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
              </div>
            </div>
          </div>
          <!-- 讀取效果 -->
          <loading :active.sync="isLoading"></loading>
          <!--產品展示群組-->
          <div class="row">
            <div
              class="col-lg-4 col-md-6 col-12 mb-3 shadow-cust"
              v-for="item in products"
              :key="item.id"
            >
              <div class="bg-transparent" style="border-radius:8px;background:#F5F5F5;">
                <div
                  class="img-bg-cust"
                  :style="{backgroundImage:`url(${item.imageUrl})`}"
                  style="border-radius:4px;"
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
                      <div class="h5 text-light" v-if="!item.price">NT.${{item.origin_price}}元</div>
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
                    style="border-radius:8px"
                    @click="getSingleProduct(item.id)"
                  >遊戲介紹</button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm ml-auto"
                    style="border-radius:8px"
                    @click="addtoCart(item.id)"
                  >加到購物車</button>
                </div>
              </div>
            </div>
          </div>
          <!-- pagination群組 -->
          <nav aria-label="Page navigation  " v-show=" category == ''">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{'disabled':!pagination.has_pre}">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Previous"
                  @click.prevent="getProducts(pagination.current_page - 1)"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li
                class="page-item"
                v-for="page in pagination.total_pages"
                :key="page"
                :class="{'active':pagination.current_page === page}"
              >
                <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
              </li>
              <li class="page-item" :class="{'disabled':!pagination.has_next}">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Next"
                  @click.prevent="getProducts(pagination.current_page + 1)"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- 購物車元件 -->
      <div class="fixed-cart">
        <CartIcon :CartData="CartList" @Remove="getCart"></CartIcon>
        <!-- props從外部把CartData代入元件  $emit內入Remove函式呼叫外部getCart刪除商品 -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Navbar";
import Alert from "../AlertMessage";
import Footer from "../Footer";
import CartIcon from "../Cart_Icon";

export default {
  components: {
    Navbar,
    Footer,
    CartIcon,
    Alert
  },
  data() {
    return {
      products: [],
      allproducts: [],
      CartList: {
        carts: []
      },
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: ""
      },
      category: ""
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
      const url = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      vm.$http.get(url).then(response => {
        vm.allproducts = Object.values(response.data.products);
      });
    },
    getSingleProduct(id) {
      this.$router.push(`/signle_product/${id}`);
    },
    changeCategory(value) {
      let vm = this;
      let changeCateoryProducts = [];
      if (value) {
        vm.category = value;
        changeCateoryProducts = vm.allproducts.filter((item, Array) => {
          return item.category.indexOf(value) >= 0;
        });
        this.products = changeCateoryProducts;
      } else {
        vm.category = "";
        this.getProducts();
      }
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(response => {
        this.$bus.$emit("message:push", response.data.message, "success");
        vm.isLoading = false;
        vm.status.loadingItem = "";
        vm.getCart();
      });
    },
    getCart() {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.CartList = response.data.data;
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>
<style scoped>
.fixed-cart {
  position: fixed;
  z-index: 10000;
  bottom: 100px;
  right: 70px;
}
.right_list_btn {
  border: 1px solid gray;
  border-radius: 8px;
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
}
</style>
