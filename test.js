// 试着跑一下我们自己的babel plugin

const { transformSync } = require("@babel/core");
// 有了这个方法以后，我们就可以使用我们的插件了
const codeString = `
    if (DEBUG) {
        // 在dev环境下执行
        // 在prod环境下移出
        add(1, 4);
    }
`


const babelTranformConfig = {
    plugins: ['./myBabelPlugin.js']
}

const res = transformSync(codeString, babelTranformConfig);
console.log(res.code);  // 看下结果
// console.log(res.ast); 

