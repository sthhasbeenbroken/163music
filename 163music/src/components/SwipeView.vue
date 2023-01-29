<template>
<swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    loop
    :autoplay="{
      delay:2000}"
      :pagination="{clickable:true}"

  >
    <swiper-slide v-for="(item,index) in imgs " :key='index'><img :src="item.pic"></swiper-slide>
</swiper>

</template>

<script>

// @ is an alias to /src
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import {Pagination,Autoplay } from 'swiper'
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
import axios from 'axios'
import { reactive, toRefs } from '@vue/reactivity';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data:function(){
      return{ imgs:[
           {pic:require('../assets/1.jpg')},
           {pic:require('../assets/2.jpg')},
           {pic:require('../assets/3.jpg')},
           {pic:require('../assets/4.jpg')},
         ]  
      }
  },
    setup() {
 
       const state = reactive({
         modules: [Pagination,Autoplay],
           
       })   
      return {
        ...toRefs(state),
        
      };
    },
  async mounted(){
    let res=await  axios.get('http://localhost:3000/banner?type=2')
     this.imgs=res.data.banners;
  }
}

</script>
<style lang="scss" scoped>
.swiper{
  border-bottom: 1px solid #ccc;
}
.swiper-slide{
  height: 2.6rem;
  width: 7.1rem;;
  
}
img{
  width: 98%;
  border-radius: 0.2rem;
}
</style>