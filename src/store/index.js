import api from '@/api/index'
import { createStore } from 'vuex'
export default createStore({
  state: {
    playlist:[{
    name: "Lover Summer",
    id:1942734110,
    al:{
      name:"Lover Summer",
      id:"96680121",
      picUrl: "http://p3.music.126.net/rZw5g8pQpZoBXXsCVcMQAw==/109951167382666749.jpg",
    }}],
    playCurrentIndex:0,
    lyric:'',
    currentTime:0,
    intervalId:0,
    user:{
      islogin:false, 
      //flag:false,
      account:{},
      userDetail:{
      }
    },

  },
  getters: {
    lyricList(state){
    //  console.log(state.lyric)
      let arr=  state.lyric.split('\n').map((item)=>{
          let min =parseInt(item.slice(1,3));
          let sec=parseInt(item.slice(4,6));
          let mill=parseInt(item.slice(7,10));
          
          return{
            min,sec,mill,
            lyric:item.slice(11,item.length),item,
          time:parseInt(mill)+parseInt(sec)*1000+parseInt(min)*60*1000,
          content:item
          
        }    
      })
      arr.forEach((item,i)=>{
        if(i==0){
          item.pre=0;
        }
        else{
          item.pre = arr[i-1].time
         // console.log(item.pre);
        }
      })    
     // console.log(arr)
     return arr;
    }
  },
  mutations: {
    setPlaylist:function(state,value){
      state.playlist=value
    },
    setPlayIndex(state,value){
      state.playCurrentIndex=value;
    },
    setLyric(state,value){
      state.lyric=value;
    },
    setCurrentTime(state,value){
      state.currentTime=value
    },
    setUser(state,value){
    state.user.islogin=value
    },
    pushPlayList(state,value){
      state.playlist.push(value)
    }
  },
  actions: {
    async reqlyric(content,payload){
     let result =await api.getLyric(payload.id)
     //console.log(payload.id);
     content.commit('setLyric',result.data.lrc.lyric)
    },
    async login(content,payload){
     // console.log(payload)
      let result =await api.phonelogin(payload.phone)
      console.log(result)
      // if(result.data.code==200){
      //   content.state.user.islogin=true;
      //   content.state.user.account=result.data.account
      //   let userDetail = await api.getuser(result.data.account.id)
      //   content.state.user.userDetail=userDetail.data;
      //   localStorage.userData = JSON.stringify(content.state.user)
      //   console.log(userDetail)
      //   content.commit('setUser',content.state.user)
      // }
     // console.log(result)
      return result
    },
    async verify(content,payload){
      let result = await api.verify(payload.phone,payload.code)
    //  console.log(result)
      if(result.data.code==200){
        let res = await api.getaccount();
        console.log(res)
        console.log(content.state)
        content.state.user.islogin=true;
        content.state.user.account=result.data.account
       // let userDetail = await api.getuser(result.data.account.id)
      //  localStorage.userData = JSON.stringify(content.state.user)
      // console.log(userDetail)
      //  content.commit('setUser',content.state.user)
      }
      
    }
  },
  modules: {
  }
})
