var a = 5;
// 定义global对象下有一个内置模块exports对象。
module.exports.a = a;
// 不要直接去指向exports对象，会造成指向断开
// module.exports与exports相同
//例如module.exports=[1,2,3]