<template>
  <div>
    <div class="text-right my-4">
      <button class="btn btn-primary" @click="openModal(true, false)">建立新的優惠券</button>
    </div>
    <table class="table mt4">
      <thead>
        <tr>
          <th>標題</th>
          <th>優惠碼</th>
          <th>Discount</th>
          <th>截止日</th>
          <th>是否啟用</th>
          <th >編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,key) in coupons" :key="key">
          <td>{{item.title}}</td>
          <td>{{item.code}}</td>
          <td>{{item.percent}}%</td>
          <td>{{item.due_date}}<td>
            <span v-if="item.is_enabled === 1" class="text-success">已啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td class="d-flex">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false,false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"  @click="openModal(false,true, item)" >刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 新增及修改視窗 -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <!-- Modal title -->
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              <span>新增優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- Modal Content -->
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                id="title"
                class="form-control"
                v-model="tempCoupon.title"
                placeholder="write title here"
              >
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                type="text"
                id="coupon_code"
                class="form-control"
                v-model="tempCoupon.code"
                placeholder="write code here"
              >
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                type="date"
                id="due_date"
                class="form-control"
                v-model="tempCoupon.due_date"
                placeholder="write expire date here"
              >
            </div>
            <div class="form-group">
              <label for="price">Discunt</label>
              <input
                type="number"
                id="price"
                class="form-control"
                v-model="tempCoupon.percent"
                placeholder="write discount percent here"
              >
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                >
                <label
                  for="is_enabled"
                  class="form-check-label"
                >
                  <span v-if="tempCoupon.is_enabled === 1">啟用</span>
                  <span v-else>關閉</span>
                </label>
              </div>
            </div>
          </div>
          <!-- Modal Footer -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateCoupon()"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除視窗 -->
    <div
      class="modal fade delCouponModal"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              <span>Remove Coupon</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong> Coupon(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="delCoupon()"
            >
              確認刪除
            </button>
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
            @click.prevent="getCoupons(pagination.current_page - 1)"
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
          <a class="page-link" href="#" @click.prevent="getCoupons(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled':!pagination.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getCoupons(pagination.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>    
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Coupon',
  data () {
    return {
     pagination: {},
     coupons: {},
      tempCoupon: {},
      isNew: false,
      isDel: false,
      isLoading: false,
      due_date: new Date(),
      status: {
        fileUploading: false
      },
    }
  },
  watch: {
    due_date () {
      const vm = this
      const timestamp = Math.floor(new Date(vm.due_date) / 1000)
      vm.tempCoupon.due_date = timestamp
    }
  },
  methods:{
     getCoupons (page = 1) {
      const vm = this
      const api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`
      vm.isLoading = true
      vm.$http.get(api).then(response => {
        // console.log(response.data)
        if (!response.data.success) {
          this.$bus.$emit('message:push', response.data.message, 'danger')
        } else {
          vm.coupons = response.data.coupons
          vm.pagination = response.data.pagination
          vm.isLoading = false
        }
      })
    },
    openModal (isNew, isDel, item) {
      const vm = this
      if (isNew && !isDel) {
        $('#couponModal').modal('show')
        vm.tempCoupon = {}
        vm.isNew = true
      } else if (!isNew && !isDel) {
        $('#couponModal').modal('show')
        vm.tempCoupon = Object.assign({}, item)
        vm.isNew = false
      } else if (!isNew && isDel) {
        $('#delCouponModal').modal('show')
        vm.tempCoupon.id = item.id
        vm.isDel = true
      }
    },
    updateCoupon () {
      const vm = this
      let api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`
      let httpMethod = 'post'
      if (!vm.isNew) {
         api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        httpMethod = 'put'
        
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then(response => {
        console.log(response.data);
        if (!response.data.success) {
          this.$bus.$emit('message:push', response.data.message, 'danger')
        } else {
          this.$bus.$emit('message:push', response.data.message, 'success')
        }
        $('#couponModal').modal('hide')
        vm.getCoupons()
      })
    },
    delCoupon () {
      const vm = this
      let api = `${process.env.APTPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      vm.$http.delete(api).then(response => {
        // console.log(response.data);
        if (!response.data.success) {
          this.$bus.$emit('message:push', response.data.message, 'danger')
        } else {
          this.$bus.$emit('message:push', response.data.message, 'success')
        }
        $('#delCouponModal').modal('hide')
        vm.getCoupons()
      })
    }
  },
   created () {
    this.getCoupons()
  }
}
</script>
