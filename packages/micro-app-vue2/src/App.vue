<template>
  <div id="app">
    sub-app
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
// 引入 actions 实例
import actions from "@/shared/actions"

export default {
  name: 'App',
  components: {
  },
  mounted() {
    // qiankun 子应用 添加观察者
    // onGlobalStateChange 第二个入参为 true，代表立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      console.log('子应用观察者：：', state)
      const { token } = state;
     
      // 获取用户信息
      this.updateQiankunState(token);
    }, true);
  },
  methods: {
    updateQiankunState(token) {
      setTimeout(() => {
        console.log('getUserInfo', token)
        if(token !== 'token-11-sub-app'){
          actions.setGlobalState({ token: token+'-sub-app' });
        }
      }, 2000);
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
