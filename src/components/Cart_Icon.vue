<template>
  <div>
    <div class="shadow-cust" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
      <div
        class="position-relative bg-secondary"
        style="border-radius:50px;height:70px;width:70px;cursor:pointer"
      >
        <i class="fas fa-gamepad text-white fa-2x" style="margin:17px 0 0 15px"></i>
        <span
          class="badge badge-pill badge-danger text-light position-absolute"
          style="top:10px;right:8px"
          v-if="!CartData.carts.length == 0 "
        >{{CartData.carts.length}}</span>
      </div>
    </div>
    <div
      class="dropdown-menu bg-danger"
      style="border-radius: 14px;filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));z-index:9999"
    >
      <!-- 讀取效果 -->
      <loading :active.sync="isLoading"></loading>
      <!-- 購物車為空的顯示此模板 -->
      <template v-if="CartData.total == 0">
        <h5 class="text-white text-center">購物車是空的唷!</h5>
      </template>
      <template v-else>
        <!-- 購物車有東西顯示此模板 -->
        <div
          class="px-4 py-3 m-1 shadow rounded bg-light"
          style="border:1px solid #dee2e6;border-radius: 8px;"
        >
          <h6 class="pb-2" style="font-size:14px">已選擇的商品</h6>
          <div style="overflow-y:auto;max-height:25vh;border-bottom:1px solid #dee2e6">
            <table class="table table-sm" style="min-width:330px">
              <tbody>
                <tr v-for="item in CartData.carts" :key="item.id">
                  <td class="align-middle">
                    <a
                      href="#"
                      class="btn btn-outline-danger"
                      style="font-size:13px;padding:4px 8px;"
                      @click.prevent="deleteProduct(item.id)"
                    >
                      <i class="fas fa-trash"></i>
                    </a>
                  </td>
                  <td class="align-middle">
                    <img :src="item.product.imageUrl" alt width="35px" height="50px" />
                  </td>
                  <td class="align-middle" style="font-size:13px">
                    <p>{{item.product.title}}</p>
                    <div class="mt-2 d-flex justify-content-between">
                      <span
                        class="badge badge-primary"
                        v-if="item.product.category == 'PS4'"
                      >Play Station 4</span>
                      <span
                        class="badge badge-danger"
                        v-if="item.product.category == 'switch'"
                      >Switch</span>
                      <span
                        class="badge badge-success"
                        v-if="item.product.category == 'XBOX ONE'"
                      >Xbox One</span>
                      <span
                        class="text-info mt-1"
                        style="font-size:12px"
                      >{{item.qty}}/{{item.product.unit}}</span>
                    </div>
                  </td>
                  <td
                    class="align-middle text-success"
                    style="font-size:13px"
                  >{{item.product.price | currency}}元</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between py-2 my-2">
            <span>總計</span>
            <span
              class="text-success"
              style="font-size:22px"
            >NT.{{CartData.final_total | currency}}元</span>
          </div>
         <router-link to="/cart" class="btn btn-outline-danger w-100" style="border-radius:15px">
            <i class="fas fa-shopping-cart mr-1"></i>結帳
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["CartData"],
  data() {
    return {
      product: {},
      isLoading: false,
      showcar: false
    };
  },
  methods: {
    deleteProduct(id) {
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        this.$bus.$emit("message:push", "已刪除商品囉", "danger");
        this.$emit("Remove", id);
        vm.isLoading = false;
      });
    }
  }
};
</script>


