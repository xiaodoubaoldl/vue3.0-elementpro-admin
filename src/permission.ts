import store from './store';
import router from './router';
import { getToken } from './utils/auth';

const pageWhiteList = ['/login'];
router.beforeEach((to, from, next) => {
  if (!pageWhiteList.includes(to.path)) {
    const hasToken = getToken();
    if (hasToken) {
      next();
    } else {
      router.push({ name: 'Login' });
    }
  } else {
    next();
  }
  console.log(to);
  console.log(from);
  console.log(store.state);
});
