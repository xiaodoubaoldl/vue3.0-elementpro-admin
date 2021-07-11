import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from './store';
import router from './router';
import { getToken } from './utils/auth';

const pageWhiteList = ['/login'];
router.beforeEach(async (to, from, next) => {
  // start progress
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    // 刷新重新注入store token
    store.commit('setRoles', [hasToken]);
    store.commit('setUserName', hasToken);
    // 如果是login
    if (to.path === '/login') {
      router.push({ path: '/' });
      NProgress.done();
    } else {
      // 处理权限
      // console.log((store.state as any).user);
      // const hasRoles = (store.state as any).user.roles.length > 0;
      // console.log(hasRoles);
      // if (hasRoles) {
      //   next();
      // } else {

      // }

      const accessRoutes = await store.dispatch('generateRoutes', (store.state as any).user.roles);
      // dynamically add accessible routes
      router.addRoute(accessRoutes[0]);

      // hack method to ensure that addRoutes is complete
      // set the replace: true, so the navigation will not leave a history record
      // next({ ...to, replace: true });
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
router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
