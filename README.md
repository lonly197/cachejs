# CacheJs

[![Build Status](https://travis-ci.org/lonly197/cachejs.svg?branch=master)](https://travis-ci.org/lonly197/cachejs)

Store arbitrary data associated with the es6 weekman and/or return the value that was set.

## Instructions

**1.** Install from Npm

```
npm install cachejs
```

**2.** Import from node_modules

```JavaScript
import { CacheJS } from 'cashjs'Ï
```

**3.** Store or get data

Add Data

```JavaScript
let tester = {}
CacheJS.addData(tester, 'name', 'lonly') // return Map
```

Get Data

```JavaScript
CacheJS.getData(tester, 'name') // return String
```

## API List

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
