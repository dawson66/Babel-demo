// 出发点：一些逻辑在开发环境下执行，而在生产环境直接忽略 利用babel插件去解决

// 如
function add(a, b) {
    return a + b;
}

if (DEBUG) {
    // 在dev环境下执行
    // 在prod环境下移出
    add(1, 4);
}

// babel 插件是node形式
module.exports = () => {

    // 插件其实就是一个函数，返回一个对象，有其自己的形式，详情请看官网
    return {
        visitor: {
            // 去写一些逻辑， babel插件开发就是通过设计visitor来实现的
        }
    }
}


// AST结构
/*
{
    type: "FunctionDeclaration",
    id: {... },
    params: [...],
    body: {... }
}

这样的每一层也叫做节点（Node）
一个AST可以由单一的节点或是成百上千个节点构成。他们组合在一起可以描述用于静态分析的程序语法。

type表示节点类型，如FunctionDeclaration, Identifier, BinaryExpression等；每一种类型的节点定义了一些附加属性用来进一步描述该节点类型。



*/


