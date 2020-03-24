<template>
	<div>

	<div class="home">
		<h1>
			<div>
			<span>T</span><span>r</span><span>a</span><span>d</span><span>e</span>
			</div>
			<div>
			<span>O</span><span>r</span>
			</div>
			<div>
			<span>V</span><span>i</span><span>e</span><span>w</span>
			</div>
			<div>
			<span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span>
			</div>
		
				</h1>
		<div class="abs">
		
		<h6>you may save and load your data</h6>
		<h6> click on 'End Day' to begin a new day</h6>
		</br>
		<code>Your Fund :<span> {{ funds | dollar }} </span></code>	
		</div>
	</div>
		
		<Design></Design>
	</div>
</template>

<script>

import Design from "./Design.vue"
export default{
	computed: {
			funds(){
				return this.$store.getters.funds
			}
		},
		components:{
			Design,
		}
}
</script>

<style scoped>
	.home{
		text-align: center;
		width: 80%;
		margin: 20px auto;
		box-shadow: 2px 3px 20px 3px rgb(0, 100, 0);
		padding: 50px 30px; 

		font-family: sherif;
	}
	div > h1{
		display: flex;
		justify-content: center;
		padding: 10px;
	}

	div > h1 > div{
		padding: 10px;	
		display: flex;
		justify-content: center;
	}
	div > h1 > div > span{
		margin:1px;
		font-family: sherif;
	}

	div > h1 > div > span:hover{
		color: gray;
		font-family: ubuntu;
	}
	.abs{
		position: relative;
		top: 10px;
	}

	h6{
		font-size: 20px;
		font-weight: bold;
	}
	code{
		font-size: 20px;
	}
	code > span{
		color: rgb(0, 120, 0)
	}
</style>