<template>
  <div>
    main-app index.vue

    <button @click="changeState">setState</button>
  </div>  
</template>

<script>
import actions from "@/shared/actions";

export default {
  mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token 改变前的值为 ", prevState.token);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
      
      this.$router.push("/");
    });
  },
  methods: {
    changeState() {
      // 设置 token
      actions.setGlobalState({ token: 'token' });
    }
  }
}
</script>

<style>

</style>