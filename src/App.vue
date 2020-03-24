<template>
  <div class="all">
    <Header></Header>
    <div id="app">
      <transition name="slide" mode="out-in">
        <router-view></router-view> 
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  components: {
    Header
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>


  .slide-enter{
    opacity: 0;
  }

  .slide-enter-active{
    transition: 1s linear;
    animation: right 1s linear;
  }
  .slide-leave{
  }

  .slide-leave-active{
    
    animation: left 1s linear;
    transition: 1s linear;
    opacity: 0;
  }

  @keyframes right{
    from{
        transform: translateY(30px);
    }to{
        
        transform: translateY(0px);
    }
  }


  @keyframes left{
   from{
        transform: translateY(0px);
    }to{
        
        transform: translateY(30px);
    } 
  }
</style>
