#### 技术栈
* [Lerna](https://www.lernajs.cn/)
  * lerna init 创建基本文件结构
    * 所有的项目都在packages/ 目录下构建初始化

* [qiankun](https://qiankun.umijs.org/zh)
  * loadMicroApp 的调用时机，不是在主应用的main.js中，可以在应用的生命周期中调用，不然主应用和子应用之间的通信注册会有问题
  * registerMicroApps 是通过路由匹配变动注册，所以写在主应用的main.js中，主应用和子应用之间的通信可正常


#### 项目启动
* git clone 本地拉取代码
* 如果本地没有全局安装lerna，那么需要先安装lerna，参见[Lerna](https://www.lernajs.cn/)
* 执行：lerna bootstrap， 将packages/ 目录下的项目依赖都安装，生成各自的node_modules/
* npm run emitStart:all 启动packages/下的主、子应用