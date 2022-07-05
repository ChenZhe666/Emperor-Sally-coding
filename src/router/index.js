import { createRouter, createWebHashHistory } from 'vue-router'

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home'),
    children: [
      // {
      //   path: 'index',
      //   name: 'index',
      //   component: () => import('../views/index')
      // },
      {
        path: '/sys/dicts',
        name: 'dicts',
        component: () => import('../views/sys/dicts')
      },
      {
        path: '/sys/menus',
        name: 'menus',
        component: () => import('../views/sys/menus')
      },
      {
        path: '/sys/roles',
        name: 'roles',
        component: () => import('../views/sys/roles')
      },
      {
        path: '/sys/users',
        name: 'user',
        component: () => import('../views/sys/user')
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
