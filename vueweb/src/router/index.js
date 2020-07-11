import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import CustomerOrder from '@/components/pages/CustomerOrders';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'adDashboard',
      component: Dashboard,
      meta: { requiresAuth:true },
      children: [
          {
            path: 'products',
            name: 'Products',
            component: Products,
            meta: { requiresAuth:true },
          },
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
          {
            path: 'customer_order',
            name: 'CustomerOrder',
            component: CustomerOrder,
          },
      ],
    },
  ],
})
