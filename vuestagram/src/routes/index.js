// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter } from 'vue-router';
import SignupPage from '@/views/SignupPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import Container from '@/components/Container.vue';
// import ErrorPage from '@/views/ErrorPage.vue';

// routes 설정
const routes = [
  {
    path: '/',
    component: Container,
  },
  {
    path: '/signup',
    component: SignupPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  // {
  //   path: '/:anything(.*)',
  //   component: ErrorPage,
  // },
];

//  위에서 설정한 routes 경로 가져와서 라이브러리 적용
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;