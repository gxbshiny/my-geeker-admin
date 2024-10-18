import { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL } from "../config/constant";


const routers: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: HOME_URL,
  },
  {
    path: LOGIN_URL,
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout/index.vue'),
    redirect: HOME_URL,
    children: [],
  }
]