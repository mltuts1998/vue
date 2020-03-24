<template>
	<div>
		<Stock class="stocks" v-for="(data, index) in stocks" :price="data.price" :name="data.name" :id="data.id"></Stock>
	</div>
</template>

<script>
import Stock from "./Stock.vue"
import {mapGetters} from "vuex"
export default{
	components: {
		Stock
	},
	computed: {
		...mapGetters([
			"stocks",
		])
	}
}
</script>
	div{
		display:grid;
		grid-template-row: 100px 100px ;
		grid-template-column:  1fr 1fr 1fr;
			
	}
<style scoped></style>