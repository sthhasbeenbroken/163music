<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">发现好歌单</div>
            <div class="more">发现更多</div>
        </div>
        <div class="swiper-list">
         
            <swiper
            :slides-per-view="3"
            :space-between="8"
            :modules="modules"
            loop
            :autoplay="{
            delay:2000}"
            > 
    <swiper-slide v-for="(item,index) in imgs" :key='index'>
       <router-link :to="{path:'/listview',query:{id:item.id}}"> 
       <img :src="item.picUrl">
        <span class="name">{{item.name}}</span>
        <span class="count">
          <span class="iconfont icon-bofang_o"></span>
        {{changeValue(item.playCount)}}</span>
          </router-link>
          </swiper-slide>
        </swiper>
        </div>
    </div>
</template>


<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import {Pagination,Autoplay } from 'swiper'
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
import {getMusicList} from '@/api/index.js'
import { reactive, toRefs ,onMounted} from 'vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
    setup(){

       const changeValue=(a)=>{
            let res=0
            if(a>=100000000){
                res=a/1000000000
                res=res.toFixed(2)+'亿'
            }
            else if(a>=10000){
                res=a/10000
                res=res.toFixed(2)+'万'
            }
            else res=a;
            return res
        }
       const state = reactive({
        modules: [Pagination,Autoplay],
        imgs:[]  
       })  
        
      onMounted(async()=>{
    let res=await  getMusicList();
   // console.log(res)
    state.imgs=res.data.result
   
      })       
    return {
        ...toRefs(state),
        changeValue,
      };
    },

}

</script>
<style lang="scss" scoped>
.musicList{
    width: 7.5rem;
    padding:0 0.4rem;
    text-align: left;
    .musicList-top{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            font-size: 0.24rem;
            border: 1px solid #ccc;
            padding: 0.06rem;
            border-radius: 0.28rem;
        }
    }

}
.swiper-slide{
  height: 2.1rem;
  width: 7.5rem; 
  background-color: pink;
  position: relative;
  .name{
      height: 0.75rem;
      width: 100%;
      text-align: start;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  }
  a{
      text-decoration: none;
      color: black;
  }

  .count{
      position: absolute;
      font-weight: 200;
      font-size: 10px;
      right: 0.1rem;
      top: 0.1rem;
      color: whitesmoke;
  }
}

img{
  width: 100%;
  border-radius: 0.2rem;
}
</style>