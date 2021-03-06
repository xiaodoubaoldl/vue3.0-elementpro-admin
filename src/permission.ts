import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { RouteRecordRaw } from 'vue-router';
import store from './store';
import router from './router';
import { getToken } from './utils/auth';

const pageWhiteList = ['/login'];
router.beforeEach(async (to, from, next) => {
  // start progress
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    // 如果是login
    if (to.path === '/login') {
      router.push({ path: '/' });
      NProgress.done();
    } else {
      console.log(to);
      // 处理权限
      const hasRoles = (store.state as any).user.roles.length > 0;
      console.log(hasRoles);
      if (hasRoles) {
        next();
      } else {
        // 获取权限
        const roles = await store.dispatch('getUserInfo');
        // 获取动态权限路由
        const accessRoutes = await store.dispatch('generateRoutes', roles);
        // console.log(accessRoutes);
        // dynamically add accessible routes
        accessRoutes.forEach((element: RouteRecordRaw) => {
          router.addRoute(element);
        });
        // hack method to ensure that addRoutes is complete
        // set the replace: true, so the navigation will not leave a history record
        next({ ...to, replace: true });
        NProgress.done();
      }
    }
  } else {
    console.log('-------------------');
    console.log(to);
    // 白名单
    if (pageWhiteList.includes(to.path)) {
      console.log('white');
      next();
      NProgress.done();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
  // if (!pageWhiteList.includes(to.path)) {
  //   const hasToken = getToken();
  //   if (hasToken) {
  //     next();
  //   } else {
  //     router.push({ name: 'Login' });
  //   }
  // } else {
  //   NProgress.done();
  //   next();
  // }
  // console.log(to);
  // console.log(from);
  console.log(store.state);
});
router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
