import Vue from 'vue';
import Vuex from "vuex";
import * as actions from "./actions"
Vue.use(Vuex);
import stocks from "./modules/stocks"
import portfolio from "./modules/portfolio"

export default new Vuex.Store({
	actions,
	modules: {
		stocks,
		portfolio
	}

})