<template>
  <div>
    <div class="vld-parent">
      <loading :active.sync="isLoading" />
    </div>
    <div class="table-responsive-md">
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="100">時間</th>
            <th width="100">姓名</th>
            <th>品項</th>
            <th class="text-right" width="150">應付金額</th>
            <th width="100">訂單狀態</th>
            <th width="100"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in ordersList" :key="item.id">
            <td style="font-size:14px">{{ item.create_at | moment("YYYY-MM-DD hh:mm A") }}</td>
            <td>{{item.user}}</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }}：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">NT.${{ item.total | currency }}元</td>
            <td>
              <span class="text-success" v-if="item.is_paid">已付款</span>
              <span class="text-danger" v-if="!item.is_paid">尚未付款</span>
            </td>
            <td class="text-center">
              <a href="#" class="btn-primary btn btn-sm" @click="openModal(item)">編輯訂單</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal群組-->
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content"> 
          <div class="modal-header bg-primary">
            <h5 class="modal-title h5 text-light" id="exampleModalLabel">
              編輯訂單
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-2">
              <h5 class="h4">訂單資訊</h5>
              <hr />
              <ul class="list-unstyled">
                <li class="mb-2">
                  <p>訂單ID： {{ tempOrder.id }}</p>
                </li>
                <li class="mb-2">
                  <p>訂單建立時間： {{ tempOrder.create_at | moment("YYYY-MM-DD hh:mm A")}}</p>
                </li>
                <li>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="tempIsPaid"
                      v-model="tempOrder.is_paid"
                    />
                    <label class="custom-control-label" for="tempIsPaid">
                      <span v-if="tempOrder.is_paid" class="text-success">已付款</span>
                      <span v-else-if="!tempOrder.is_paid" class="text-danger">未付款</span>
                    </label>
                  </div>
                </li>
              </ul>
              <h5 class="mt-5">訂單資料:</h5>
              <hr />
            </div>
            <div class="row justify-content-center">
              <div class="col-10">
                <form>
                   <div class="form-group">
                  <label class="mb-2" for="tempName">姓名:</label>
                  <input type="text" class="form-control " id="tempName" v-model="tempOrder.user.name"/>
                  </div>
                  <div class="form-group">
                    <label class="mb-2" for="tempEmail">Email:</label>
                    <input type="email" class="form-control" id="tempEmail" v-model="tempOrder.user.email"/>
                  </div>
                  <div class="form-group">
                    <label class="mb-2" for="tempAddr">地址:</label>
                    <input type="text" class="form-control" id="tempAddr" v-model="tempOrder.user.address"/>
                  </div>
                  <div class="form-group">
                    <label class="mb-2" for="tempTel">電話:</label>
                    <input type="text" class="form-control" id="tempTel" v-model="tempOrder.user.tel"/>
                  </div>
                  <div class="form-group">
                    <label class="mb-2" for="tempMessage">訂單備註</label>
                    <textarea class="form-control" id="tempMessage" rows="3" v-model="tempOrder.message"/>
                  </div>
                </form>
              </div>
              <div class="col-6">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateOrder">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <nav class="mb-3" aria-label="Page navigation  ">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{'disabled':!pagination.has_pre}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getOrder(pagination.current_page - 1)"
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
          <a class="page-link" href="#" @click.prevent="getOrder(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled':!pagination.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getOrder(pagination.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      pagination: {},
      isLoading: false,
      tempOrder: {
        user: {},
        products: {}
      },
      ordersList:[],
    };
  },
  methods: {
    getOrder(page = 1) {
      const vm = this;
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        console.log(response.data);
        vm.ordersList = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    openModal(item) {
      const vm = this;
      $("#orderModal").modal("show");
      vm.tempOrder = Object.assign({}, item);
    },
    updateOrder() {
      const vm = this;
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/admin/order/${vm.tempOrder.id}`;
      vm.$http.put(api, { data: vm.tempOrder }).then(response => {
        if (!response.data.success) {
          this.$bus.$emit(
            "message:push",
            "Something went wrong, please check the console",
            "danger"
          );
        } else {
          this.$bus.$emit("message:push", response.data.message, "success");
        }
        $("#orderModal").modal("hide");
        vm.getOrder();
      });
    }
  },
  created() {
    this.getOrder();
  }
};
</script>