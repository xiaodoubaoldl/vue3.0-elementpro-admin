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
        meta: { title: '首页', icon: 'el-icon-s-home' },
      },
    ],
  },
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index.vue'),
        name: 'Icons',
        meta: { title: '图标', icon: 'el-icon-magic-stick', noCache: true },
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
        meta: { title: '折线图', roles: ['admin'] },
      },
    ],
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help',
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create.vue'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' },
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit.vue'),
        name: 'EditArticle',
        meta: {
          title: 'Edit Article', noCache: true, activeMenu: '/example/list', hidden: true,
        },
      },
      {
        path: 'list',
        component: () => import('@/views/example/list.vue'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' },
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
