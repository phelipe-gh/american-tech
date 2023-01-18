import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale';
import lang from 'element-ui/lib/locale/lang/pt-br';
import axios from 'axios';

import {
  BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons,
  CollapsePlugin,
  NavbarPlugin,
  NavPlugin,
  SidebarPlugin,
  BSidebar,
  BFormGroup,
  BCard,
  BCardText,
  BButton,
  BTable,
  BSpinner,
  BFormSelect,
  FormSelectPlugin,
} from 'bootstrap-vue';
import App from './App.vue';

import 'normalize.css';

import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './assets/css/global.scss';

import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(CollapsePlugin);
Vue.use(NavbarPlugin);
Vue.use(NavPlugin);
Vue.use(SidebarPlugin);
Vue.use(FormSelectPlugin);

Vue.use('b-table', BTable);
Vue.use('b-card', BCard);
Vue.use('b-card-text', BCardText);
Vue.use('b-form-group', BFormGroup);

Vue.use(ElementUI);

Vue.component('b-form-select', BFormSelect);
Vue.component('b-button', BButton);
Vue.component('b-sidebar', BSidebar);
Vue.component('b-spinner', BSpinner);

locale.use(lang);

Vue.config.prototype = false;
Vue.http = Vue.prototype.$http = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
