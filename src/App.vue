<template>
<div>
  <router-view/>
  <play-controller></play-controller>
</div>
</template>
<script>
import playController from '@/components/playController.vue'
//import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
export default {
  components:{
    playController
  },
  setup(){
   // const store = useStore()
    onMounted(()=>{
     // console.log(localStorage)
     // console.log(store.state)
      // let userData = (localStorage.userData)
       //store.commit('setUser',userData)
    })
   
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
