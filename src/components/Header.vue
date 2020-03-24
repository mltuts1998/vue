<template>
	<div class="head">
		<div class="header">
			<div><router-link to="/">Trader</router-link></div>
			<div><router-link to="/portfolio">portfolio</router-link></div>
			<div><router-link to="/stocks">stocks</router-link></div>
		</div>	
		<div class="header1">
				<div>Funds: <code>{{$store.getters.funds | dollar}}</code></div>
				<div @click="endDay()">End day</div>
				<div class="rel"> <i class="material-icons">arrow_drop_down</i>
					<div class="dropdown">
						<span>Save & load</span>
						<div>
							<div @click="saveData()">Save Date</div>
							<div @click="loadData()">Load Data</div>
						</div>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
import {mapActions} from "vuex"
export default{
	data(){
	},
	methods: {
		...mapActions({
				fetchData: "loadData",
				randamizeStocks:"randamizeStocks",
			}),
		endDay(){
			this.randamizeStocks();
		},
		saveData(){
			const data ={
				funds: this.$store.getters.funds,
				stockPortfolio: this.$store.getters.stockPortfolio,
				stocks:this.$store.getters.stocks
			}
			this.$http.put("data.json",data); //upadate the same data 
			alert("Data Saved")
		},
		loadData(){
				this.fetchData();
				alert("Data Loaded")
		}
	}
}
</script>

<style scoped>
.header1> div:first-child{
	font-size:15px;
	font-weight: bolder;
}

.header1> div:first-child > code{
	color: gray;
	font-size:17px;
	padding-left: 5px;
}
.head{
	background: rgb(0, 100, 0);
	padding: 5px;
	display: flex;
	margin: auto;
	width: 100%;
	
}
.header{
	display: flex;
	width: 55%;
	justify-content: flex-start;
}
.header1{
	display:flex;
	width: 45%;
	justify-content: flex-end;	
}

.header1 > div{
	margin-left: 10px;
	padding: 5px;
	text-transform: uppercase;
	font-family: ubuntu;

}
.header > div{
	margin-left: 15px;
	padding: 5px;
	
	text-transform: uppercase;
}

.header1 > div:hover {
	background: rgb(0, 120, 0);
	cursor: pointer; 
	border-radius: 5px;
}
.header > div:hover {
	background: rgb(0, 120, 0);
	cursor: pointer; 
	border-radius: 5px;

}
.header  div:first-letter{
	font-size: 30px;
}

.header1 > div{
	display: flex;
	align-items: center;
}

a{
	color: black;
	font-family: ubuntu;
	text-decoration: none;
}

.header1 > div > span{

}
.rel {
	position: relative;
}

.dropdown > div{
	display: none;
}

.dropdown:hover > div{
	display: block;
	position: absolute;
	background: rgb(0, 120, 0);
	border-radius: 1px 1px 1px 10px ;
	margin-left: -22%;
}

.dropdown:hover > div > div{
		width: 8.26rem;
		padding: 10px 6px;
		margin: 3px auto;
}

.dropdown > div > div:hover{
		background: rgb(0, 130, 0);
		border-radius: 4px;		
}

.rel:hover i{
	animation: roter 500ms ease-in-out;
	animation-fill-mode: forwards;
}


.rel i{
	transition: 1s;
}
@keyframes roter{
	0%{
		transform: rotate(0deg);
	}100%{
		transform: rotate(180deg);	
	}
}
</style>