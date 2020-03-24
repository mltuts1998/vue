import stocks from "../../data/stock"
const state ={
	stocks
}

const mutations = {
	"SET_STOCKS"(state, stocks){
		state.stocks = stocks;
	},
	"RND_STOCKS"(state){
		state.stocks.forEach(stock => {
				stock.price = Math.floor(stock.price*(1+Math.random()-0.5));
		});
	}
}

const actions = {
	setStocks: ({commit})=>{
		commit("SET_STOCKS", stocks)
	},
	randamizeStocks: ({commit}) =>{
		commit("RND_STOCKS")
	},


}


const getters = {
	stocks: (state) =>{
		return state.stocks
	}
}


export default{
	state,
	actions,
	getters,
	mutations
}