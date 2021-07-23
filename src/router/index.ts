import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/views/Layout/index.vue';

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'el-icon-s-home' },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: { hidden: true },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true },
  },
];
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    redirect: '/permission/line',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'],
    },
    children: [
      {
        path: 'line',
        component: () => import('@/views/Chart/ChartLine.vue'),
        name: 'LineChart',
        meta: { title: 'LineChart', roles: ['admin'] },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: '/:pathMatch(.*)*', redirect: '/404', meta: { hidden: true, title: '404' } },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

// export function resetRouter() {
//   const newRouter = createRouter({
//     history: createWebHashHistory(process.env.BASE_URL),
//     routes: constantRoutes,
//   });
//   // router.matcher = newRouter.matcher // reset router
// }

export default router;
