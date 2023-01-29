<template>
    <div class="listViewTop">
        <img class="bg" :src="playlist.coverImgUrl">
        <div class="Nav">
            <div class="back" @click="$router.back()">
                <span class="iconfont icon-jiantou_xiangzuo"></span>
                <div class="title">
                歌单
                </div>
            </div>
         
            <div class="right">
                 <span class="iconfont icon-sousuo"></span>
                 <span class="iconfont icon-diandiandianshu"></span>
            </div>
        </div>
        <div class="content">
            <div class="contentleft">
                <img :src="playlist.coverImgUrl">
            <span class="count">
              <span class="iconfont icon-bofang"></span>
             {{changeValue(playlist.playCount)}}</span>
            </div>
            <div class="contentright">
                <h3>{{playlist.name}}</h3>
                <div class="author">
                    <img :src="playlist.creator.avatarUrl" class="header">
                    <span>{{playlist.creator.nickname}}</span>
                    <span class="iconfont icon-jinrujiantou"></span>
                </div>
                <div class="description">
                    {{playlist.description}}
                    <span class="iconfont icon-jinrujiantou"></span>
                </div>
            </div>
        </div>
        <div class="iconList">
            <div class="iconitem">
            <span class="iconfont icon-pinglun"></span>
            <span>{{playlist.commentCount}}</span>           
            </div>
            <div class="iconitem">
            <span class="iconfont icon-fenxiang1"></span>
            <span>{{playlist.shareCount}}</span>            
            </div>
            <div class="iconitem">
            <span class="iconfont icon-xiazai"></span>
             <span>下载</span>            
            </div>
            <div class="iconitem">
            <span class="iconfont icon-duoxuan"></span>
             <span>多选</span>           
            </div>
        </div>
    </div>
</template>
<script>
//import { inject} from '@vue/runtime-core'
export default {
   props:['playlist'],
//    setup(){
//     const playlist= inject('playlist')
//         console.log(playlist)
//    return{
//       playlist,
//    }    
//    }
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
        return {
            changeValue
        }
    }
}
</script>
<style lang="scss" scoped>
.listViewTop{
    width: 7.5rem;
    padding: 0 0.3rem;
    height: 6rem;
    .bg{
        position: fixed;
        left: 0;
        top: 0;
        width: 7.5rem;
        height: auto;
        z-index: -1;
        filter: blur(20px);
    }
    .content{
        display: flex;
        margin-top: 0.8rem;
        justify-content: space-between;
        .contentleft{
            position: relative;
            img{
            height: 2.5rem;
            width: 2.5rem;
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
         .contentright{
            position: relative;
            width:4rem;
            text-align: left;
            color:#fff;
            .author{
                display: flex;
                align-content: center;
                color: #fff8;
                margin: 0.2rem 0;
            img{
                height: 0.5rem;
                width: 0.5rem;
                border-radius: 50%;
                margin-right: 0.2rem;
            }
            }
            .description{
                font-size: 0.24rem;
                color:#ccc;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
    .Nav{
        height: .8rem;
        display: flex;
        align-items: center;
        font-size: 0.4rem;
        justify-content: space-between;
        .title{
            color: white;
        }       
    } .back,.right{
            .iconfont{
                color: #fff;
                font-size: 0.6rem;
            }
        display: flex;
        font-size: 0.4rem;
    }
    .iconList{
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    .iconitem{
        display:flex;
        flex-direction: column; 
        .iconfont {
        color: #fff;
        font-size: 0.35rem;
        }
        span{
            padding: 0.04rem;
            color: #ccc;
        }
        }   
    }
}
</style>