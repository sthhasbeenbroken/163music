<template>
    <div class="Me">
        <div class="top">
        <i class="iconfont icon-jiantou_xiangzuo" @click="routerJump"></i>
        <span class="iconfont icon-pinglun"></span>
        </div>
        <div class="center">
          
            <img class="bg" :src="$store.state.user.userDetail.profile.backgroundUrl">
            
            <div class="info">
            <img class="img" v-if="$store.state.user" :src="$store.state.user.userDetail.profile.avatarUrl">
        <p>
            <span>Lv.{{$store.state.user.userDetail.level}}</span>
            {{$store.state.user.userDetail.profile.nickname}}</p>
        <p class="days">来到Musicplayer{{$store.state.user.userDetail.createDays}}天</p>
        <p class="listened">我已经听了{{$store.state.user.userDetail.listenSongs}}首歌</p>
         </div>
        </div>
        <div class="footer">
            <div class="sc"><span class="iconfont icon-ziyuan20"></span>我的收藏</div>
            <div class="tg"><span class="iconfont icon-vynil"></span>我听过的</div>
            <div class="vip"><span class="iconfont icon-tuijian"></span>会员中心</div>
            <div class="vip"><span class="iconfont icon-xiazai"></span>我的下载</div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity';
import { useRouter } from "vue-router";
 import { useStore } from 'vuex';
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    onMounted(()=>{
        state.data=store.state.user.userDetail;
     //   console.log(state.data.data.profile)
    })
    const store = useStore();
    const state=reactive({
          data:{},
          password:''
      })

    const router = useRouter();
    const routerJump = () => {
      router.push("/");
    };
    return {
      routerJump,
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.Me{
    width: 7.5rem;
    .top{
        display: flex;
        width: 7.5rem;
        height: 1.0rem;
        padding: 0 0.2rem;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 0.2rem;
        .iconfont{
            font-size: 00.6rem;
            color: #ccc;
        }
    }
    .center{
        display: flex;
        padding: 0.05rem;
        height: 3.6rem;
        width: 7.5rem;
        border-radius: 10%;
        border: 1px solid #ccc;
        position: relative;
        align-items: center;
        .bg{
            position: absolute;
            z-index: -1;
            width: 7.41rem;
            height: 3.6rem;
           
            border-radius: 10%;

        }
        .info{z-index: 10;
        position: fixed;
        top: 1.3rem;
        left: 32.5%;
       p{   font-size: 0.4rem;
           font-weight: 600;
           color: white;
           span{
               border: 1px solid orangered;
               border-radius: 20%;
               font-size: 0.2rem;
               font-weight: 500;
               color: orange;
           }
       }
       .days{
           margin-top: 0.2rem;
            font-size: 0.2rem;
            font-weight: 500;
            color: #ccc;
       }
       .listened{
            margin-top: 0.2rem;
            font-size: 0.2rem;
            font-weight: 500;
            color: #ccc;
       }
        .img{
            width: 1.4rem;
            border-radius: 50%;
            border: 2px solid #ccc;
        }
        }
    }
    .footer{
        margin-top: 0.5rem;
        
        align-items: center;
        font-size: 0.4rem;
        .tg{
            margin-bottom: 00.3rem;
        }
        .sc{
            margin-bottom: 00.3rem;
        }
        .vip{
            margin-bottom: 00.3rem;
        }
        span{
            margin-right: 0.2rem;
            font-size: 0.6rem;
            
        }
    }
}
</style>