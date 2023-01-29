<template>
  <div class="home">
    <TopNav></TopNav>
    <Swiper1></Swiper1>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import Swiper1 from '@/components/SwipeView.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'
export default {
  components: {
    Swiper1,
    TopNav,
    iconList,
    musicList
  },

}

</script>
<style scoped>
.home{
  width: 7.5rem;
  height: 3rem;
}

</style>
