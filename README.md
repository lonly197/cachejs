# CacheJs

Store arbitrary data associated with the es6 weekman and/or return the value that was set.

## Instructions

**1.** 在Github建立一个空repository, 如`myproject`, 并clone到本地

```
cd myproject && wget https://github.com/bmqb/npm-project-template/archive/master.tar.gz -O master.tar.gz && tar xvf master.tar.gz --strip 1 && rm master.tar.gz
```

**2.** 在TravisCI网站中点击"Add New Repository", 找到对应github项目并开启


**3.** 实现TravisCI完成后发布到npm

安装travis ci命令行

```
gem install travis
```

运行`travis setup npm`， 根据提示完成配置， 依次填写npm注册邮箱， NPM api key等信息

其中NPM api key可运行`npm login`登录npm后, 在`~/.npmrc`中找到形如

```
//registry.npmjs.org/:_authToken=XXX
```

其中XXX部分就是api key

**4.** 修改`package.json`内项目信息, push代码到Github

**5.** 通过`git tag -a`和`git push --tags`添加一个tag，或者直接使用Github的release功能，完成一次发布
