//alert("第九章")

// 函数 不传递参数
function box() {
    alert('haha');
}
box();

// 函数 传递参数
function box1(name, age) {
    alert('姓名是:'+name+'，年龄是:'+age);
}
box1('kc', 18);

// return 返回值
function box2() {
    return 'Hello world!'
}
box2();
alert(box2());

function box3(name, age) {
    return '姓名是:'+name+'，年龄是:'+age
}
var str = box3('kc', 25);
alert(box3('kc', 25));


// arguments 对象
// 即使你不设置参数，函数内有arguments
function box4() {
    alert(arguments[0]+'|'+arguments[1]+'|'+arguments[2]);
}
box4('kc', 25, 'calcuate');

// length 获取参数个数
function box5() {
    return arguments.length;
}
alert(box5('kc', 'xy', 'pl'));

//动态传参
function box6() {
    var sum=0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    };
    return sum;
}
alert(box6(1,2,3,4,5));

// kc添加 自运行
(function box7() {
    alert('kc demo');
})()


// 创建函数的另一种方式 不建议使用 把参数列表和函数体都作为参数
var box8 = new Function('name', 'return (\'ni\'+name);');
alert(box8('xy'));

// 创建函数的另一种方式
var box9 = function(x) {return 2*x};
alert(box9(2));

// 匿名函数 无参数
(function() {
    alert('匿名函数');
})()

// 匿名函数有参数
// 上下这两个函数不能同时存在
// (function(x,y){
//     alert(x + y);
// })(2,3);
































