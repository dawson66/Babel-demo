// 出发点：一些逻辑在开发环境下执行，而在生产环境直接忽略 利用babel插件去解决

// 如
// function add(a, b) {
//     return a + b;
// }

// if (DEBUG) {
//     // 在dev环境下执行
//     // 在prod环境下移除
//     add(1, 4);
// }

// babel 插件是node形式
module.exports = ({types: t}) => {
    // console.log(t)
    // 插件其实就是一个函数，返回一个对象，有其自己的形式，详情请看官网
    return {
        visitor: {
            // 去写一些逻辑， babel插件开发就是通过设计visitor来实现的
            // 对于我们来说 DEBUG 就是一个标识符，我们需要从Identifier下手
            Identifier(path, state) {
                const isDebug = path.node.name === 'DEBUG';
                const parentIsIfStatement = t.isIfStatement(path.parentPath)
                // console.log(isDebug, parentIsIfStatement)
                if (isDebug && parentIsIfStatement) {
                    // 两者都满足，说明我们找到了 使用DEBUG 作为if的判断语句
                    // 我们只需要在此根据我们的业务逻辑将ast修改即可
                    // 如，我们将 DEBUG 变为 string 类型，让if语句一直通行
                    const stringNode = t.stringLiteral('DEBUG');
                    path.replaceWith(stringNode);
                    
                    // 这样 我们一个非常简易的babel plugin 就完成了，可以启动一个vue项目在里面验证一下
                }
                // 或者判断生产条件移除

            },
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

