// 试着跑一下我们自己的babel plugin

const { transformSync } = require("@babel/core");
// 有了这个方法以后，我们就可以使用我们的插件了
const codeString = `
function buttonClick() {
    /* global DEBUG */
    if(DEBUG) { 
      console.log('开发环境下执行成功');
    }
  }
`


const babelTranformConfig = {
    plugins: [['./myBabelPlugin.js', {
        isRemove: true
    }]]
}

const res = transformSync(codeString, babelTranformConfig);
console.log(res.code);  // 看下结果
// console.log(res.ast); 

