//alert("第十章");

// 创建一个对象
var box = new Object();

// 对象包含哪些元素:
// 1:属性(字段)
// 2:方法(函数)
box.name = 'kc';
box.age = 25;
alert(box.name);

// new 可以省略
var box1 = Object();

// 字面量方式创建对象 
var box2 = {};
var box3 = {
    name:'kc',
    age:25
};
var box4 = {
    'name':'kc',
    'age':25
};
alert(box3.name);
alert(box4.name);

// 传统赋值方式
var box5 = {};
box5.name = 'kc';
box5.age = 25;
alert(box5);

// 用数组的方式输出 必须要有单引号
alert(box5['name']);


// 给对象创建方法
// 这里box6的run属性是一个函数
function objRun() {
    return '123';
}
var box6 = Object();
box6.name = 'kc';
box6.age = 25;
box6.run = objRun;
box6.done = function() {
    return 'done function';
}
alert(box6.run());
alert(box6.done());

var box7 = {
    'name':'kc',
    'age':25,
     run :function() {
        return 'in function';
     }
};
alert(box7.run());

// 删除属性
delete box7.name;
alert(box7.name);   // 输出undefined

// 传参是对象
function box8(obj) {
    if (obj.name != undefined) alert(obj.name);
    if (obj.age != undefined) alert(obj.age);
    if (obj.love != undefined) alert(obj.love);
}
var obj = {
    name : 'kc',
    age : 25,
    love : 'code'
}
box8(obj);

// 匿名对象
box8({
    name : 'kc',
    age : 25,
    love : 'code'
});






























