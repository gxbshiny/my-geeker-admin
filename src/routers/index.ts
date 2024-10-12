import { createRouter, createWebHashHistory } from "vue-router";
import { LOGIN_URL } from "../config/constant";
import { useUserStore } from "../stores/modules/user";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach(async (to, from, next) => {

  const userSotre = useUserStore();
  document.title = to.meta.title + '-My Geeker Admin';

  if (to.path === LOGIN_URL) {
    if (userSotre.getToken) {
      return next(from.fullPath);
    }
    return next();
  }

  if (!userSotre.getToken) {
    return next({ path: LOGIN_URL, replace: true });
  }

  next();
});

router.afterEach(() => { });

router.onError((error) => {
  console.error('路由错误：：：', error.message);
});

export default router;