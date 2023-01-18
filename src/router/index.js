import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeSite from '../views/HomeSite.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeSite',
    component: HomeSite,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
