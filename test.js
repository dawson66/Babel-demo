// 试着跑一下我们自己的babel plugin

const { transformSync } = require("@babel/core");

// 有了这个方法以后，我们就可以使用我们的插件了

const codeString = `
    function testCode(){
        console.log('test my plugin')
    }

    testCode();
`




const res = transformSync(codeString);
console.log(res);  // 看下结果
console.log(res.ast); 