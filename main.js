// main.js

// 导入 pinyin-pro-jsbox 模块
const { pinyin } = require("pinyin-pro-jsbox")
// const { pinyin } = require("./scripts/pinyin-pro-jsbox")

function main() {
    console.log(pinyin("你好，世界！"))
}

main()
