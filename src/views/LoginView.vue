<template>
<div class="Login">
    <div class="loginTop">
        <div class="loginTitle">
        <i class="iconfont icon-jiantou_xiangzuo" @click="routerJump"></i>
        </div>

    </div>
    <div class="loginCenter">
        <p class="title">欢迎登录</p>
        <div class="user">
        <span class="iconfont icon-jurassic_user"></span>
        <input v-model="phone" placeholder="请输入手机号" type="text" class="account">
       
        </div>
        <br>
        <div class="pwd">
        <span class="iconfont icon-suo"></span>
        <input v-model="code" placeholder="请输入验证码" type="" class="password">
         <span class="code" @click="login">获取验证码</span>
        </div>
    </div>
    <div class="loginFooter">
        <span @click="verify" class="loginbtn">登录</span>
    </div>
    
</div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
export default {
  setup() {
      const store = useStore();
      const state=reactive({
          phone:'',
          code:''
      })
      const login=()=>{
        //  console.log(state.phone + state.password)
      store.dispatch('login',{phone:state.phone})

    }
    const verify=()=>{
       // console.log(state.code)
        store.dispatch('verify',{phone:state.phone,code:state.code})
        if(store.state.user.islogin){
            router.push('/me')
        }
    }
    const router = useRouter();
    const routerJump = () => {
      router.push("/");
    };
    return {
      routerJump,
      ...toRefs(state),
      login,
      verify
  }
}
};
</script>
<style lang="scss" scoped>
.Login{
    width: 7.5rem;
    height: 13rem;
    background-image: url('@/assets/R-C.jpg');
    .loginTop{
        display: flex;
        height: 1.0rem;
        width: 7.5rem;
        justify-content: space-between;
        align-items: center;
        .iconfont{
            font-size: 0.6rem;
            color: white;
        }

    }
    .loginCenter{
        margin-top: 1.5rem;
        width: 7.5rem;
        align-items: center;
        height: 5rem;
        .title{
            font-weight: 600;
            color: white;
            font-size: 0.8rem;

        }

        .user{
            margin-top: 00.5rem;
            .iconfont{
                font-size: 0.6rem;
                color: #fff;
            }

            .account{
                border: none;
                border-bottom: 1px solid white;
                background: none;
                height: 0.8rem;
                width: 4.6rem;
            }
        }
        .pwd{
            
            margin-top: 00.5rem;
            .iconfont{
              font-size: 0.6rem;
              color: #fff;
            }            
            .code{
            border: 1px solid white;
           // color: black;
           font-size: 0.24rem;
           padding: 0.1rem 0rem;
            border-radius: 10%;
            margin-left: 5px;
            font-weight: 600;
            }
            .password{
               border: none;
                border-bottom: 1px solid white;
                background: none;
               height: 0.8rem;
                width: 3.2rem;
            }
        }
    }
    .loginbtn{
        width: 7.5rem;
        padding: 0 0.8rem;
        font-size: 0.45rem;
        border-radius: 15%;
        border: 1px solid #ccc;
        color: white;
        background-color: #ccc9;
    }
}
</style>
