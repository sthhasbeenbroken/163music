/*音乐播放界面*/
<template>
    <div class="playMusic">
        <div class="bg" :style="{backgroundImage:`url(${playDetail.al.picUrl})`}"></div>
        <div class="playTop">
            <div class="back">
                <span class="iconfont icon-jiantou_xiangzuo" @click="back"></span>
            </div>
            <div class="center">
                <div class="titleauthor">
                    <div class="title">
                    {{playDetail.al.name}}
                    </div>
                </div>
            </div>
            <div class="share">
                <span class="iconfont icon-fenxiang1"></span>
            </div>
        </div>
        <div class="playContent" v-if="!islyrics">
            <div>
                <img class="needle" :class="{active:playpaused}" src="@/assets/needle-ab.png">
                <img class="disc" src="@/assets/disc.png">
                <img class="playpic" :src="playDetail.al.picUrl">
            </div>
        </div>
        <div class="lyrics" v-else >
            <p  :class="{active:(currentTime*1000>=item.pre&&currentTime*1000<item.time)}" v-for="(item,index) in ($store.getters.lyricList)" :key="index"> 
            {{item.lyric}}
            <!-- {{currentTime}}
            {{item.pre}}
            {{item.time}} -->
            </p>
            <!-- {{$store.state.lyrics}} -->
        </div>
        <div class="progress"></div>
        <div class="playfooter">
            <span class="iconfont icon-24gl-repeat2" ></span>
            <span class="iconfont icon-shangyishou" @click="goplay(-1)"></span>
            <span v-if="playpaused" @click="play" class="iconfont icon-bofang" style="font-size:0.7rem"></span>     
            <span v-else class="iconfont icon-weibiaoti--" @click="play" style="font-size:0.7rem"></span>
            <span class="iconfont icon-xiayishou" @click="goplay(1)"></span>
            <span class="iconfont icon-24gl-playlistMusic5"></span>
        </div>
    </div>
</template>
<script>
import {mapState, useStore} from 'vuex'
import { reactive, toRefs } from '@vue/reactivity'
//import { reactive, toRefs } from '@vue/reactivity'
export default {
    computed:{
        ...mapState(['lyric','currentTime','playlist','playCurrentIndex'])
    },

    props:['playDetail','playpaused','play'],
    setup(props,context){
        const store=useStore();
       // console.log(props)
        const back=()=>{
            context.emit('show',false)
        }
        const state=reactive({
            islyrics:true
        })
        const   goplay=(num)=>{
        // console.log(num);
        // console.log(store.state.playCurrentIndex);
        let index= store.state.playCurrentIndex+num;
        if(index<0){
            index = store.state.playlist.length-1;
        }
        else if(index==store.state.playlist.length){ 
                index = 0;
        }
        store.commit('setPlayIndex',index);
    }
        return{
            back,
            goplay,
            ...toRefs(state)
        }
    },

}
</script>
<style lang="scss" scoped>
.playMusic{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh; 
    background-color: #fff;
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-size:  auto 100%;
        filter: blur(60px);
       background-position: center;
    }
    .playTop{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 7.5rem;
        height: 1.2rem;
        position: absolute;
        left: 0;
        top: 0;
       // color: #fff;
        padding: 0 0.3rem;
        .iconfont{
            fill: white;
            font-size: 0.6rem;

        }
        .center{
            .title {
            white-space: nowrap;
            display: inline-block;
            color: whitesmoke;
            font-weight: 500;
            font-size: 0.4rem;
            animation: marqueeAnim 5s linear 0s infinite;
            }

            .titleauthor {
            width: 5.5rem;
            height: 30px;
            text-align: left;
            line-height: 30px;
            overflow: hidden;
            }
        }
    }
    .playContent{
        position:absolute;
        width: 7.5rem;
        height: 7.5rem;
        left: 0;
        top: 1.5rem;
       .needle{
            width: 2.0rem;
            height: auto;
            position: absolute;
            left:50%;
            transform-origin: 0.3rem 0;
            transform: rotate(5deg);
            z-index: 10;
            transition: all 1s;
        }
        .needle.active{
            width: 2.0rem;
            height: auto;
            position: absolute;
            left:50%;
            transform-origin: 0.3rem 0;
            transform: rotate(-15deg);
            z-index: 10;
            transition: all 1s;
        }
        .disc{
            width:5.5rem;
            height:auto;
            position: absolute;
            left: calc(50% - 2.75rem);
            top: 1.5rem;
        }
        .playpic{
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 1.75rem;
            position: absolute;
            left: 27%;
            top: 2.53rem;
        }

    }
    .playfooter{
            display: flex;
            width: 7.5rem;
            height: 1.5rem;
            position: absolute;
            left: 0;
            bottom: 0;
            justify-content: space-between;
            align-items: center;
            padding:0 0.4rem;
            .iconfont{
                font-size: 0.5rem;
            }
    }
    .lyrics{
        position:absolute;
        width: 7.5rem;
        height: 8rem;
        left: 0;
        top: calc(50% - 4rem);
        overflow: scroll;
        color: white;
        padding: 0.2rem 0;
        .active{
            color:orange;
        }
    }
    }
    
        @keyframes marqueeAnim {
    0% {
        transform: translateX(100vw);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
