/* eslint-disable prettier/prettier */
import Vue from "vue";


import Vuetify from 'vuetify'

Vue.use(Vuetify)

// index.js or main.js
import 'vuetify/dist/vuetify.min.css'


import {
  store
} from './store/store'
import VueRouter from "vue-router";
import DashboardPlugin from "./material-dashboard";

import vueScrollTo from 'vue-scrollto';

import VueFullpage from "fullpage-vue";

Vue.use(VueFullpage)

Vue.use(vueScrollTo, {
  container: "body",
  duration: 1500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// Plugins
import App from "./App.vue";
import Chartist from "chartist";

// router setup
import routes from "./routes/routes";

// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
  linkExactActiveClass: "nav-item active"
});

// global library setup
Object.defineProperty(Vue.prototype, "$Chartist", {
  get() {
    return this.$root.Chartist;
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});