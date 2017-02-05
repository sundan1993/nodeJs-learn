// console.log('hello nodeJS');

// var a = 100
// console.log(a);

// 设置global全局变量
// global.a = 200;
// console.log(global.a);

// 引用模块,使用require方法
// require('./modules/test.js');
// 相对路径必须写./不然就是加载核心模块或者是node_modules内的文件
// 文件查找机制：先找文件名，后找.js再.json再.node，再报错
// console.log(module)


var m5 = require('./modules/test.js');
// 在这个global对象下有一个exports对象。
 console.log( m5)