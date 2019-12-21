import Index from '@/components/pages/Index';
import Products from '@/components/pages/Products';
import AboutMe from '@/components/pages/Aboutme';
import SingleProduct from '@/components/pages/SingleProduct'
import Profile from '@/components/pages/Profile'
import Check from '@/components/pages/Check'
import CustomerLogin from '@/components/pages/CustomerLogin'
import News from '@/components/pages/News'
import Cart from '@/components/pages/Cart'

export default [
    {
        path: '*',
        redirect: 'login',
    },
    {  path:'/',
       name:'Index',
       component:Index,
    },
    {  path:'/products',
       name:'Products',
       component:Products,
    },
    {  path:'/about_me',
       name:'AbouteMe',
       component:AboutMe,
    },
    {  path:'/news',
       name:'News',
       component:News,
    },
    {
        path:'/cart',
        name:'Cart',
        component:Cart,
    },
    {
        path: '/customer_login',
        name: 'Customer_Login',
        component: CustomerLogin,
    },
    {
        path: '/signle_product/:id',
        name: 'Signle_product',
        component: SingleProduct,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/check/:orderId',
        name: 'Check',
        component: Check,
    },
]