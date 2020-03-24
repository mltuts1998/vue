<template>
	<div class="all">
	<div class="stock">
			<div class="title">
				<span>N</span>ame: <code>{{ name }}</code> &nbsp;&nbsp;&nbsp; <span>P</span>rice:<code>{{ price }}</code>
			</div>
			<div class="content">
				<input type="number" placeholder="Quantity" v-model="quantity"
					@keydown.enter="buyStock()"
				>
				<button			
					@click="buyStock()"
					:disabled="quantity <=0 || Math.floor(quantity)!=quantity"	
				>Buy</button>
			</div>
	</div>
	</div>
</template>

<script>

export default{
	props: [
		"price", "name", "id"
	],
	data(){
		return{
			quantity: {
				type: Number
			}
		}
	},
	methods:{
		buyStock(){
			const order ={

				stockId: this.id,
				stockPrice: this.price,
				quantity: this.quantity
			}
			this.$store.dispatch("buyStock",order);
			this.quantity = 0;
		}
	}
}
</script>

<style scoped>
	.all{
		display: flex;
		justify-content:flex-start;
		flex-wrap: wrap;

	}
	.stock{
		padding: 100px;
		box-shadow: 1px 2px 10px 1px rgb(0, 120 ,0);
		margin: 20px auto;

		}
	.stock:first-child{
		margin-top: 100px;	
	}
	.title{
		font-size:20px;
		font-family: ubuntu;
		padding: 5px 10px;
		border-bottom:1px solid black;
		text-align: center;
	}
	.content{
		padding:10px;
		width: 100%;
	}
	.content > input{
		padding: 10px;
		text-align: center;
	}
	.content > button{
		text-align: center;
		padding: 10px 30px ;
		margin-left: 20px;
		background: rgb(0, 100, 0);
		outline: none;
		border: none;
		transition: 1s linear;
	}
	.content > button:hover{
		transition: 1s linear;
		transform: scale(1.05);

	}

	.title > span{
		font-size: 40px;
		color: gray;
	}

	.title > code{
		font-size: 20px;
		font-weight: bolder;
	}
</style>