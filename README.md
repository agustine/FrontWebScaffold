FrontWebScaffold
================

自己用的前端项目模版

#使用

1. 需要安装[node.js](http://nodejs.org/)

2. 安装

~~~
npm install -g grunt-cli grunt bower
~~~

下载项目

~~~
git clone https://github.com/agustine/FrontWebScaffold.git
~~~

将项目clone到本地的开发目录

或者直接下载[zip](https://github.com/agustine/FrontWebScaffold/archive/master.zip)

解压到开发目录

将FrontWebScaffold文件夹名称改为您的项目名称

3. 配置
将下载下来的代码
打开bower.json  bower是一个前端项目包管理器参考[bower](http://bower.io/)


~~~json
{
  "name": "scaffold", // 修改为您的项目名称
  "version": "0.1.0", // 修改为您的项目版本号
  "authors": [
    "Ronnie <agustine103@gmail.com>" // 修改为您的联系方式，如果对这个项目有任何问题可以用这个邮箱联系我
  ],
  "description": "test scaffold", //您的项目描述
  "main": "src/main.css", // 可以去掉
  "license": "MIT", // 可以去掉
  "ignore": [ // git的ignore，仅对bower相关命令有用
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": { // 您的项目需要依赖的第三方包
    "jquery": ">=2",
    "backbone": ">=1.1.0",
    "underscore": ">=1.5.2",
    "iscroll": "4.2.5"
  }
}
~~~

开启一个终端，cd到您的项目目录，执行命令

~~~
bower install
~~~

打开package.json(npm的包配置文件)

~~~json
{
  "name": "Project.Name", // 修改为您的项目名称
  "version": "0.1.0", // 修改为您的项目版本号
  "scripts": {
    "test": "grunt qunit"
  },
  "devDependencies": { // 需要执行的grunt任务的依赖
    "grunt-contrib-jshint": "~0.6.0",
    "grunt-contrib-qunit": "~0.2.0",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-uglify": "~0.2.0",
    "grunt-contrib-watch": "~0.4.0",
    "grunt-contrib-clean": "~0.4.0",
    "grunt-contrib-cssmin": "~0.6.0",
    "grunt-contrib-copy": "~0.4.1",
    "grunt-contrib-jst": "~0.5.1",
    "grunt": "~0.4.1"
  },
  "jsFiles": {
    "libs": [ // 修改为您的项目依赖的第三方包的源代码版本的js文件，按依赖顺序排序，以便依次合并文件压缩
      "bower_components/jquery/jquery.js",
      "bower_components/underscore/underscore.js",
      "bower_components/backbone/backbone.js",
      "bower_components/iscroll/src/iscroll.js"
    ],
    "customlibs": [ // 修改为您的项目依赖的自定义包的源代码版本的js文件，按依赖顺序排序，以便依次合并文件压缩
    ]
  },
  "cssFiles": {
    "libs": [ // 修改为您的项目依赖的第三方包的源代码版本的css文件，依照层叠优先级排序（您懂的...），以便依次合并文件压缩
      "bower_components/normalize-css/normalize.css"
    ],
    "customlibs": [ // 修改为您的项目依赖的自定义包的源代码版本的js文件，依照层叠优先级排序（您懂的...），以便依次合并文件压缩
    ]
  }
}
~~~

开启一个终端，cd到您的项目目录，执行命令

~~~
npm install
~~~

4. 使用

###项目初始化命令

目前只有功能使用模版生成公用的base.js文件...可以在Gruntfile.js 中自定义
~~~
grunt initProject
~~~

###打包压缩依赖的脚本文件

该命令会按package.json 文件中的jsFiles、cssFiles配置，将libs中的文件合并为libs.js和libs.css
~~~
grunt refreshLibs
~~~

