# 转拼音例子

## 介绍

`pinyin-pro-jsbox.js` 是 `JSBox` 环境下的 `pinyin-pro` 项目的 `JavaScript` 实现。依赖于 [pinyin-pro](https://github.com/zh-lx/pinyin-pro) 项目，实现了中文转拼音的功能。

## 功能

-   输入中文，输出拼音。
-   支持多音字。
-   具体支持的拼音方案请参考 [pinyin-pro](https://pinyin-pro.cn/) 项目。

## 使用方法

-   可将 `pinyin-pro-jsbox.js`文件导入到 `JSBox 模块` 中作。

```javascript
const pinyin = require("pinyin-pro-jsbox")

const input = "你好，世界！"
const output = pinyin(input)
console.log(output) // nǐ hǎo ， shì jìng！
```

-   也可以把 `pinyin-pro-jsbox.js` 文件复制到项目中使用。
