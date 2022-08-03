import { createApp } from 'vue'
import App from './App.vue'
import startQiankun from "./micro";
import { createRouter, createWebHistory } from 'vue-router'

// 主应用通过registerMicroApps注册子应用
startQiankun();



/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
 const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      /**
       * path: 路径为 / 时触发该路由规则
       * name: 路由的 name 为 Home
       * component: 触发路由时加载 `Home` 组件
       */
      path: "/",
      name: "Home",
      component: () => import('./views/index.vue')
    }
  ]
});



createApp(App)
.use(router)
.mount('#app')