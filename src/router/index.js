import { createRouter, createWebHashHistory } from 'vue-router'

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/home',
    name: 'Layout',
    redirect: '/',
    component: () => import('../Layout/index.vue'),
    children: [
      {
        path: '/goods/list',
        name: '/goods/list',
        component: () => import('../views/goods/list/index.vue')
      },
      {
        path: '/',
        component: () => import('../views/home.vue')
      },
      {
        path: '/category/list',
        name: '/category/list',
        component: () => import('../views/category/list/index.vue')
      },
      {
        path: '/skus/list',
        name: '/skus/list',
        component: () => import('../views/skus/list/index.vue')
      },
      {
        path: '/coupon/list',
        name: '/coupon/list',
        component: () => import('../views/coupon/list/index.vue')
      },
      {
        path: '/user/list',
        name: '/user/list',
        component: () => import('../views/user/list/index.vue')
      },
      {
        path: '/level/list',
        name: '/level/list',
        component: () => import('../views/level/list/index.vue')
      },
      {
        path: '/order/list',
        name: '/order/list',
        component: () => import('../views/order/list/index.vue')
      },
      {
        path: '/comment/list',
        name: '/comment/list',
        component: () => import('../views/comment/list/index.vue')
      },
      {
        path: '/manager/list',
        name: '/manager/list',
        component: () => import('../views/manager/list/index.vue')
      },
      {
        path: '/access/list',
        name: '/access/list',
        component: () => import('../views/access/list/index.vue')
      },
      {
        path: '/role/list',
        name: '/role/list',
        component: () => import('../views/role/list/index.vue')
      },
      {
        path: '/setting/base',
        name: '/setting/base',
        component: () => import('../views/setting/base/index.vue')
      },
      {
        path: '/image/list',
        name: '/image/list',
        component: () => import('../views/image/list/index.vue')
      },
      {
        path: '/notice/list',
        name: '/notice/list',
        component: () => import('../views/notice/list/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

router.beforeEach((to, from, next) => {
  // 访问的路径在白名单
  if (localStorage.getItem('token')) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
