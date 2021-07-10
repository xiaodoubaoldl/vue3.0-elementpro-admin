import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from './store';
import router from './router';
import { getToken } from './utils/auth';

const pageWhiteList = ['/login'];
router.beforeEach((to, from, next) => {
  // start progress
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    // 如果是login
    if (to.path === '/login') {
      router.push({ path: '/' });
      NProgress.done();
    } else {
      // 处理权限
      next();
      NProgress.done();
    }
  } else {
    // 白名单
    if (pageWhiteList.includes(to.path)) {
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
  console.log(to);
  console.log(from);
  console.log(store.state);
});
