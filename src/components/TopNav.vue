<template>
    <div class="topNav">
      <div class="topleft">
        <span class="iconfont icon-liebiao"></span>
      </div>
      <div class="topcenter">
        <span class="navbtn" @click="$router.push('/me')">我的</span>
        <span class="navbtn active" >发现</span>
        <span class="navbtn" >云村</span>
        <span class="navbtn" >视频</span>
      </div>
      <div class="topright" @click="$router.push('/searchview')">
        <span class="iconfont icon-sousuo"></span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.topNav{
  width: 7.5rem;
  height:1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.2rem;
  .iconfont{
    font-size: 0.5rem;
  }
  .topcenter{
    width: 5rem;
    display: flex;
    justify-content: space-around;
    .active{
      font-weight: 900;
    }
  }
}

</style>