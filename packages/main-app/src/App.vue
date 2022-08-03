<template>
  <div>
    <p>
      this is main app
    </p>
    <button @click="changeState">setState</button>
    <router-view />
    ==============================================================
     <!-- 子应用渲染区，用于挂载子应用节点 -->
    <div id="frame"></div>
  </div>
 
</template>

<script>
import actions from "@/shared/actions";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token 改变前的值为 ", prevState.token);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
      
      // this.$router.push("/");
    });
  },
  methods: {
    changeState() {
      // 设置 token
      actions.setGlobalState({ token: 'token-11' });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
