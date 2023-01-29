<template>
    <div class="playController">
        <div class="left" @click="show=!show">
            <img :src="playlist[playCurrentIndex].al.picUrl">
            <div class="content">
                <div class="title">{{playlist[playCurrentIndex].name}}</div>
                <div class="tips"></div>
            </div>
        </div>
        <div class="right">
            <span @click="play" v-if="playpaused" class="iconfont icon-bofang"></span>
            <span @click="play" v-else class="iconfont icon-weibiaoti--"></span>
            <span class="iconfont icon-liebiao1"></span>
        </div>
        <play-music :play="play" :playpaused="playpaused" @show="emitFn" v-show="show" :playDetail="playlist[playCurrentIndex]"></play-music>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`">
        </audio>
    </div>
</template>
<script>
import { reactive, ref, toRefs } from '@vue/runtime-core'
import{mapState, useStore} from 'vuex'
import playMusic from '@/components/playMusic.vue'
export default {
  components: { playMusic },
    computed:{
        ...mapState(['playlist','playCurrentIndex'])
    },
   mounted(){
       this.$store.dispatch('reqlyric',{id:this.playlist[this.playCurrentIndex].id})
   },
   updated(){
        this.$store.dispatch('reqlyric',{id:this.playlist[this.playCurrentIndex].id})
        
   },
//    UpdateTime(){
//        this.$store.state.id = setInterval(()=>{
//            content.commit('setCurrentTime',this.$refs.audio.currentTime)},1000)
//     },
   
    setup(){
        const store = useStore();
        const audio = ref();
       
        const UpdateTime=()=>{
            store.state.currentTime = setInterval(()=>{
            store.commit('setCurrentTime',audio.value.currentTime)},1000)    
            // console.log(store.state.currentTime)     
        }
        const state=reactive({
            playpaused:true,
            show:false
        })
        
        const play=()=>{    
            if(audio.value.paused){  
            audio.value.play();
            state.playpaused=false;
            UpdateTime();
            console.log(store.state.lyric)
            }
            else{
            audio.value.pause()
            state.playpaused=true;
            clearInterval(audio.value.currentTime)
            }
            console.log(audio.value.currentTime)
        }
        const emitFn=v=>{
            state.show=v;
        }

        return{
            play,
            audio,
            emitFn,
            UpdateTime,
            ...toRefs(state)
        }
    },
    
}
</script>
<style lang="scss" scoped>
.playController{
    background: #fff;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    .left{
        display: flex;
        padding: 0 0.4rem;
        img{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }
        .content{
            padding:0 0.2rem;
        }
        .title{
            font-weight: 600;
        }
        .tips{
            font-size: 00.2rem;
            color: #999;
        }
    }
    .right{
        .iconfont{
            font-size: 0.4rem;
            margin: 0 0.1rem;
        }
    }
}
</style>