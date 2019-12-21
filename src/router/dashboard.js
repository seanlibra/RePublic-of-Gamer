import DashBorad from '@/components/DashBoard';
import DashBoardLogin from '@/components/DashBoardLogin';
import DashBoardProduct from '@/components/DashBoardProducts';
import DashBoardSimulate from '@/components/DashBoardSimulate';
import DashBoardCoupon from '@/components/DashBoard_Coupon'
import DashBoardOrderList from '@/components/DashBoard_Order_list'

export default [
    {
        path: '/dash_board_login',
        name: 'Dash_Board_Login',
        component: DashBoardLogin,
    },
    {
        name: 'DashBorad',
        path: '/admin',
        component: DashBorad,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dash_board_products',
                name: 'Dash_Board_Products',
                component: DashBoardProduct,
                meta: { requiresAuth: true },
            },
            {
                path: 'dash_board_simulate',
                name: 'DashBoardSimulate',
                component: DashBoardSimulate,
                meta: { requiresAuth: true },
            },
            {
                path: 'coupon',
                name: 'Coupon',
                component: DashBoardCoupon,
                meta: { requiresAuth: true },
            },
            {
                path: 'order_list',
                name: 'Order_List',
                component: DashBoardOrderList,
                meta: { requiresAuth: true },
            },
        ]
    },
]