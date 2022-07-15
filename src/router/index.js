import { createRouter, createWebHashHistory } from 'vue-router'

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

// router.beforeEach((to, from, next) => {
//   // 访问的路径在白名单
//   if (localStorage.getItem('token')) {
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

export default router
