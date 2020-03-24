<template>
	<div class="animation">
		<h3> Beautiful Animations Using Pure Css</h3>
	
		<div class="gf">
		<div class="father">
	  <div class="element"></div>
	  <div class="element"></div>
	  <div class="element"></div>
	  <div class="element"></div>
	  </div>
	</div>
<div class="gc">
	<div class="circle">
	 </div> 
</div>
	
	</div>
	

</template>

<script >
	export default{

	}
</script>

<style scoped>

.animation{
	height: 650px;	
	text-align: center;

}
.gc{
	height: 200px;
}

.animation > h3{
	padding: 20px;
	font-family: sherif;
	font-size: 30px;
	text-align: center;
	text-transform: capitalize;
	width: 50%;
	margin: 2px auto;
	box-shadow: 1px 4px 10px 1px rgb(0, 100, 0);

}

.animation > h3:hover{
	
	box-shadow: 2px 5px 20px 2px rgb(0, 120, 0);	
}
.father{
  width: 105px;
  height: 105px;
  margin: 100px auto;
  position: relative;
  transform: rotate(45deg);
  animation: expand 1s linear infinite;
}
.gf{
	height: 400px;
}

.element { 
  width:50px;
  height:50px;
  background:red;
  position : absolute;
  border-radius: 10px;
  animation: rotate 500ms linear infinite;
}

.element:nth-child(1){
  background: red;
  top: 0px;
  left: 0px;
}
.element:nth-child(2){
  background: pink;
  right: 0px;
  top: 0px;
}
.element:nth-child(3){
  background: blue;
  left: 0px;
  bottom: 0px;
}
.element:nth-child(4){
  background: green;
  right: 0px;
  bottom: 0px;
}

@keyframes rotate{
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform:rotate(360deg) 
   }
}

@keyframes expand{
  0%{
    width: 105px;
    height: 105px;
  }
  50%{
    width: 200px;
    height: 200px;
  }
  100%{
    
    width: 105px;
    height: 105px;
  }
}

.circle{
  width: 100px;
  height: 100px;
  margin: 10px auto;
  border: 10px solid lightgreen;
  border-radius: 50%;
  border-top: 10px solid gray;
    animation: roter 1s linear infinite ;
}

@keyframes roter{
  0%{
    transform: rotate(0deg);
  }50%{
    transform: rotate(180deg);
    
  }100%{
    transform: rotate(360deg);
   
   }
}
</style>