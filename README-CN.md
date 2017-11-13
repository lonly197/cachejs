# CacheJs

[![Build Status](https://travis-ci.org/lonly197/cachejs.svg?branch=master)](https://travis-ci.org/lonly197/cachejs)

使用ES6 WeakMap实现的数据保存库，类似与jquery.data方法，可以向被选元素附加数据，或者从被选元素获取数据。

## Instructions

[English Document](./README.md)

**1.** 从NPM库中安装

```
npm install lonly-cachejs
```

**2.** 引入

```JavaScript
import { CacheJS } from 'lonly-cashjs'
```

**3.** 使用

保存数据

```JavaScript
let tester = {}
CacheJS.addData(tester, 'name', 'lonly') // return Map
```

获取数据

```JavaScript
CacheJS.getData(tester, 'name') // return String
```

## 接口列表

```
CacheJS
|
|__addData(owner, name, data)
|
|__getData(owner, name)
|
|__removeData(owner, name)
|
|__clearData
```
