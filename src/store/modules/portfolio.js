const state ={
    funds: 10000,
	stocks: []
}

const mutations = {
	"BUY_STOCK"(state,{stockId, quantity, stockPrice}){
			const record = state.stocks.find(element => element.id == stockId);

			if(record){
				record.quantity += quantity
			}else{
				state.stocks.push({
					id: stockId,
					quantity: quantity
				})
			}
			if(state.funds-stockPrice*quantity < 0)
				alert("insufficient fund")
			else
				state.funds -= stockPrice*quantity;
	},
	"SELL_STOCK"(state,{stockId, quantity, stockPrice}){
			const record = state.stocks.find(element => element.id == stockId);
			if(record.quantity > quantity){
				record.quantity -= quantity
			}else{
				state.stocks.splice(state.stocks.indexOf(record))
			}
			state.funds += stockPrice*quantity;
	},
	"SET_PORTFOLIO"(state, portfolio){
		state.funds = portfolio.funds
		state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio: []	 
	}
}

const actions = {
	buyStock: function({ commit }, order){
			commit("BUY_STOCK", order);
	},
	sellStock: function({commit}, order){
			commit("SELL_STOCK", order)
	}
}


const getters = {
	stockPortfolio(state, getters){
		return state.stocks.map(stock =>{
			let record;
			for(let i=0; i<getters.stocks.length; i++){
				if(getters.stocks[i].id === stock.id){
					record = getters.stocks[i]
					break
				}	
			}
			return{
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			}
		})
	},
	funds(state){
		return state.funds
	},
	allPortfolio(state){
		return state.stocks
	}
}


export default{
	state,
	actions,
	getters,
	mutations
}