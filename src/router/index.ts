import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/views/Layout/index.vue';

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
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
];
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/chart',
    name: 'Chart',
    component: Layout,
    redirect: '/chart/line',
    children: [
      {
        path: 'line',
        component: () => import('@/views/Chart/ChartLine.vue'),
        name: 'LineChart',
        meta: { title: 'LineChart' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
