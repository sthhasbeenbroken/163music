/**歌单播放列表 */
<template>
    <div class="playlist">
        <div class="playlist-top">
        <div class="left">
            <span class="iconfont icon-bofang_o"></span>
            <div class="text">
            <div class="title">播放全部</div>
            <div class="num">(共{{changeValue(playlist.tracks.length)}}首)</div>
            </div>
        </div>       
        <div class="btn">
        +收藏({{changeValue(playlist.subscribedCount)}})
         </div>
        </div>
        <div class="list">
            <div class="playItem" v-for="(item,index) in playlist.tracks" :key="index">
            <div class="left">
                <div class="index">{{index+1}}</div>
                <div class="content">
                   <div class="title">
                       {{item.name}}       
                   </div>
                   <div class="author">
                       <span class="tag" v-for="(tag,index) in playlist.tags" :key="index">{{tag}}</span>
                       <span class="text">{{item.al.name}}</span>
                    </div> 
                </div>
            </div>
            
            <div class="right">
                <span class="iconfont icon-bofang1" @click="setPlayIndex(index)"></span>
                <span class="iconfont icon-diandiandianshu"></span>
            </div>
            </div>
        </div>
        <div style="height:1.5rem"></div>
    </div>
</template>
<script>
import { useStore} from 'vuex'
export default {
    props:['playlist'],
    setup(){
        const store = useStore();
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
        const setPlayIndex=(index)=>{
            console.log(store);
            store.commit('setPlayIndex',index);
        }
        return {
            changeValue,
            setPlayIndex
        }
        
    },
   
}
</script>
<style lang="scss" scoped>
.playlist{
    width: 7.5rem;
    padding: 0 0.4rem;
    background-color: #fff;
    border-top-left-radius: 0.24rem;
    border-top-right-radius: 0.24rem;
    .playlist-top{
        display: flex;
        justify-content: space-between;
        height: 0.8rem;
        align-items: center;
        .left{
            display: flex;
            .iconfont{
                font-size: 0.4rem;
            }
            .title{
                
                font-size: 0.3rem;
            }
            .num{
                font-size: 0.2rem;
                
            }
            .text{
                display: flex;
                align-items: center;
                margin-left: 0.3rem;
            }
        }
        .btn{
            font-size: 0.3rem;
            color: #fff;
            background-color: orangered;
            height: 0.6rem;
            line-height: 0.6;
            padding: 0.3rem;
            display: flex;
            align-items: center;
            border-radius: 6rem;
        }
    }
    .list{
        .playItem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1rem;
            .left{
                display: flex;
                align-items: center;
                color: #666;
                .index{
                width: 0.2rem;
                color: #0009;
                }
                .content{
                    margin-left: 0.2rem;
                    text-align: left;
                    margin-top:14px;
                    .title{
                     width: 5rem;
                     height: 0.38rem;
                    //margin-top:14px;
                    font-size: 0.3rem;
                    font-weight: 550;
                    color: #666;
                    margin-bottom: 0.08rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                     white-space: nowrap; 
                    }
                    .tag{
                    font-size: 0.2rem;
                    color: orangered;
                    border: 0.9px solid orangered;
                    border-radius: 0.05rem;
                    
                    }
                    .author{
                    height: 0.4rem;
                    font-size: 0.2rem;
                    width: 5rem;
                    color: #666;
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                     white-space: nowrap; 
                     padding: 0.05rem;

                    }
                    span{
                        margin-right: 0.06rem;
                    }
                }
            }
        }
    }
}
</style>