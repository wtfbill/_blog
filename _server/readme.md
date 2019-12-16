## 前言
此项目是个人博客，有前端界面+后台管理系统；目的是当做react和node的练手项目，有可能会用到redis 正在研究redis。

---
## 项目预览地址

https://www.lxsblog.cn

---

## 技术栈
#### 前端技术栈
react + antd + react-router + react-redux + axios
### 后端技术栈
koa2 + koa-router + mysql + sequelize + redis(可能尝试使用)

---


## 项目运行

- 配置数据库

安装mysql，新建一个名称叫“**blog**”的数据库

- 安装依赖

项目根目录和根目录的app目录下分别安装
```
npm install
```
- 启动项目

项目根目录和根目录的app目录下分别启动
```
npm start
```

---

##  项目优化
目前，已优化了一部分，首次加载需要3,4秒的时间，由于目前租的云服务器的宽带只有1M。
到现在做的优化有以下几点：

- antd做按需加载 
- highlight.js高亮依赖包只引入需要的模块 
- 前端webpack+nginx 使用GZIP压缩，不采用koa后端压缩，减少I/O的消耗
- webpack配置splitChunks切割模块代码，生成多个模块js文件
- 采用自定义高阶组件bundle.js+import('')，按需动态加载组件

持续优化中~

---

## 项目总结
- 开始做这个项目的时候，先明确项目的需求，然后设计好数据表，考虑到数据表的联系
- 因为项目是使用sequelize操作mysql，所以要提前了解开发文档，不然会走很多坑
- 个人来说，使用react的一个缺点是对数据监听方面没有vue用起来顺畅
- 使用antd这个react组件库，带来了界面设计方面的便利，自己只是再做一些样式的优化即可
