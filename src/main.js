import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from "./route";
import store from "./store/store"
import VueResource from "vue-resource"

Vue.use(VueResource);

Vue.use(VueRouter);


Vue.http.options.root = "https://stock-521d4.firebaseio.com/";

const router = new VueRouter({
	mode: "history",
	routes
})

Vue.filter("dollar", value =>{
	return "$" + value
})


new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
