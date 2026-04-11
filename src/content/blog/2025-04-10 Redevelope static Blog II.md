---
title: Redevelope static Blog II
pubDate: 2025-04-10 15:28:35
categories: [博客]
---

### Preparation

- 安装[Node.js](https://nodejs.org/en/download/package-manager) 一个JavaScript的运行环境，用以在本地运行开发项目。

   参考文章: [Node.js安装及环境配置之Windows篇-刘奇云](https://www.cnblogs.com/liuqiyun/p/8133904.html)


- 安装[pnpm](https://pnpm.io/installation)用以管理依赖。

  更换镜像源：

  ```bash
  # 配置全局registry属性
  npm config set registry https://registry.npmmirror.com 
  # 获取registry检查是否成功
  npm config get registry
  ```

- 安装[Git](https://docs.github.com/zh/get-started/getting-started-with-git/set-up-git)用以控制版本。

   参考文章：[Windows系统Git安装教程（详解Git安装过程）-学为所用](https://www.cnblogs.com/xueweisuoyong/p/11914045.html)

   - 配置Git




### Cactus

- pnpm无法安装sharp，单独更换sharp源，然后再去`pnpm i`

  ```bash
  pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
  pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"