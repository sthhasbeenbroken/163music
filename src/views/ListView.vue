/*歌单详情 */
<template>
    <div class="ListView">
        <listview-top v-if="JSON.stringify(state.playlist)!={}" :playlist="state.playlist"></listview-top>
        <musicplay :playlist="state.playlist"></musicplay>
        
    </div>
</template>
<script>
import {getPlaylistDetail} from '@/api/index'
import{ onMounted,  reactive,} from 'vue'
import {useRoute} from 'vue-router'
import listviewTop from '@/components/listViewTop.vue'
import musicplay from '@/components/musicPlayList.vue'
import { useStore } from 'vuex';
export default {
    setup(){
        const store=useStore();
        const route = useRoute();
        let state=reactive({
            list:[],
           playlist:{
                 creator:{},
                 tracks:[]
           }
           
        }) 
       
        onMounted(async()=>{
            let id = route.query.id;
            let res = await getPlaylistDetail(id);
            state.playlist=res.data.playlist
            console.log(state.playlist)
             store.commit('setPlaylist',state.playlist.tracks)
               console.log(store)
        })
        // provide('playlist',state.playlist)
       //console.log(state.playlist);
        return{
            state,
        }
    },
    components:{
        listviewTop,
        musicplay
    }
}
</script>