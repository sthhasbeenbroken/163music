<template>
    <div class="icon-list">
        <div class="iconItem">
           <span class="iconfont icon-tuijian"></span>
           <span>每日推荐</span>
           </div>
          <div class="iconItem">
            <span class="iconfont icon-diantai">
                </span><span>私人FM</span>
            </div>
          <div class="iconItem">
            <span class="iconfont icon-ziyuan20">
                </span><span>歌单</span>
            </div>
          <div class="iconItem">
            <span class="iconfont icon-paixing">
                </span><span>排行榜</span>
          </div>
    </div>
</template>
<style lang="scss" scoped>
.icon-list{
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    .iconItem{
        display:flex;
        flex-direction: column; 
        font-size: 0.28rem;
        .iconfont {
    font-size: 0.5rem;
    }
    }   
}


</style>