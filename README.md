#### 技术栈
* [Lerna](https://www.lernajs.cn/)
  * lerna init 创建基本文件结构
    * 所有的项目都在packages/ 目录下构建初始化


#### 项目启动
* git clone 本地拉取代码
* 如果本地没有全局安装lerna，那么需要先安装lerna，参见[Lerna](https://www.lernajs.cn/)
* 执行：lerna bootstrap， 将packages/ 目录下的项目依赖都安装，生成各自的node_modules/