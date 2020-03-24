<template>
	<div>
		<Stock v-for="(stock, index) in stockPortfolio" :key="index" :name="stock.name" :price="stock.price" :quantity1="stock.quantity" :id="stock.id"></Stock>
	</div>
</template>

<script>
import {mapGetters} from "vuex"
import Stock from "./Stock.vue"
export default{
	data(){
		return{
			
		}
	},
	computed: {
		...mapGetters([
			"stockPortfolio",
			"allPortfolio"
		]),
	},
	components: {
		Stock
	},
}
</script>

<style scoped></style>