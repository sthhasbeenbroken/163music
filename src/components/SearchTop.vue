<template>
    <div class="SearchViewTop">
        <div class="Nav">
            <div class="back" @click="$router.back()">
                <span class="iconfont icon-jiantou_xiangzuo"></span>
            </div>
            <div class="right">
                 <input type="text" v-model="searchkey" :placeholder="placeholder" >
            </div>
            <div class="search" @click="saveKeyWord">搜索</div>
        </div>
        <div class="history">
            <div class="historyleft">
                历史
            </div>
            <div class="historyright">
                    <div  class="keywordItem" v-for="(item,index) in KeyList" :key="index" @click="input(item)">
                    {{item}}
                    </div>
            </div>
            <div class="clear" @click="KeyListclear">
                清空
            </div>
        </div>
        <div class="searchlist">
            <div class="list">
            <div class="playItem" v-for="(item,index) in searchSongs" :key="index">
            <div class="left">
                <div class="index">{{index+1}}</div>
                <div class="content">
                   <div class="title">
                       {{item.name}}       
                   </div>
                   <div class="author">
                       <span class="text" v-for="(tag,index) in item.artists" :key="index">{{item.artists[index].name}}</span>
                       <span class="text">-{{item.album.name}}</span>
                    </div> 
                </div>
            </div>
            
            <div class="right">
                <span class="iconfont icon-bofang1" @click="setPlayIndex(item)"></span>
                <span class="iconfont icon-diandiandianshu"></span>
            </div>
            </div>
            </div>
        </div>
         <div style="height:1.5rem"></div>
    </div>
</template>
<script>
import  { searchMusic } from '@/api/index.js'
import { reactive, toRefs } from '@vue/reactivity'
//import { inject} from '@vue/runtime-core'
import{onBeforeMount} from 'vue'
import { useStore } from 'vuex'
export default {

setup(){ 
     const store = useStore();
      const state=reactive({
          placeholder:"周杰伦",
          KeyList:[],
          keywordlist:[],
          searchkey:'',
          searchSongs:[],
       //   iscleared:false,
      })
     const  setPlayIndex=(item)=>{
           
            //store.commit('setPlayIndex',store.playist.length-1); 
            console.log(store);
            console.log(item)
            item.al=item.album;
            console.log(item.al)
        }
    const saveKeyWord=async()=>{
        //console.log(state)
        state.KeyList.push(state.searchkey)
        localStorage.KeyList=JSON.stringify(state.KeyList)
        let res =await searchMusic(state.searchkey)
       // console.log(res.data.result.songs)
        state.searchSongs=res.data.result.songs
    }
    const input=(info)=>{
        state.searchkey=info
    }
    const KeyListclear=async()=>{
        state.KeyList=[];
        //state.iscleared=true;
       // console.log(state)
       localStorage.KeyList=[];
    }
   

      onBeforeMount(()=>{
         //  console.log(state)
        //   if(state.iscleared){
        //     state.KeyList=[];
        //     state.iscleared=false;
        //   }
        if(localStorage.KeyList){
         state.KeyList=JSON.parse(localStorage.KeyList)
         }
          
        })

    return{
        ...toRefs(state),
        saveKeyWord,
         KeyListclear,
         setPlayIndex,
         input
    }
    }
}
</script>
<style lang="scss" scoped>
    .SearchViewTop{
        width: 7.5rem;
        padding: 0 0.2rem;

        .Nav{
            display: flex;
            widows: 100%;
            height: 1.2rem;
            align-items: center;
            
            .iconfont{
                font-size: 00.6rem;
            }
            .right{
                padding: 0  0 0 0.4rem;
                flex: 1;
                input{
                    outline: none;
                    border: none;
                    width: 80%;
                    border-bottom: 1px solid #666;
                    height: 0.5rem;
                }
            }
            .search{
                width: 1.2rem;
                height: 0.5rem;
                padding: 0 0.2rem;
                border: 1px solid #ccc;
                border-radius: 10%;
                background-color: white;
            }
        }
        .history{
            display: flex;
            .historyleft{
                width: 1.2rem;
                height:0.6rem;
                font-weight:600;
                line-height: 0.8rem;
                
            }
            .historyright{
                color: #666;
                display: flex;
                flex-wrap: wrap;
                flex: 1;
                .keywordItem{
                    background-color: #eee;
                    height: 0.6rem;
                    padding: 0 0.2rem;
                    border-radius: 0.3rem;
                    line-height: 0.6rem;
                    margin: 0.1rem 0.1rem;
                }
            }
            .clear{
                line-height: 0.8rem;
                font-size: 0.24rem;
            }
            
        }
        .searchlist{
            width: 7.0rem;
            background-color: #fff;
            border-top-left-radius: 0.24rem;
            border-top-right-radius: 0.24rem;
            .playlist-top{
                display: flex;
                justify-content: space-between;
                height: 0.8rem;
                align-items: center;

            }
            .list{

                .playItem{
                   // border: 1px solid #ccc;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 1rem;
                    .left{
                        display: flex;
                        align-items: center;
                        color: #666;
                        .index{
                        width: 0.5rem;
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
                            margin-bottom: 0.05rem;
                            }
                            span{
                                margin-right: 0.06rem;
                            }
                        }
                    }
                }
            }
        }
        
    }
</style>