alert("第八章")

var name1 = 'kc';   // 一个单行语句
var age1 = 18;      // 另一个单行语句

// 用花括号包含的语句集合，叫做复合语句，单位一个
// 一对花括号，表示一个复合语句，处理时候，可以当做一条单行语句来对待
// 复合语句，我们一般称他为代码块
{   
    var name1 = 'kc';   
    var age1 = 18;      
}

// if语句
// 会把()里面的条件自动转换成Boolean值，也就是(123)它会自动转换成true，(0)转换成false，('Lee')转换成true，('')转换成false

// 这种写法，写在一行：如果为真，执行后面的"一"条语句;否则，不执行
var box1 = 10;
if (box1 > 50) alert(box1);

// 这种写法：如果为假，只会不执行后面的一条语句，第二条语句和if表达式无关，所以会执行
var box2 = 10;
if (box2 > 50) 
    alert(box2);
    alert(box2);

// 这种写法，{}复合语句：如果为假，都不执行；如果为真，都执行。
// 因为这里是一条复合语句，被当作一条语句来对待了，代码块的功能体现出来了。
var box3 = 100;
if (box3 > 50) {
    alert(box2);
    alert(box2);
};

// 如果再加上一条复合语句:无论真假，都会执行下面这个语句
{
    alert('haha');
}

// 其他
if (true) {

} else if {

} else if {

};

if (true) {

} else {

};


// switch语句
var box4 = 1;
switch (box4) {
    case 1:
    alert('one');
    break;  // break 中途退出，防止穿透
    case 2:
    alert('two');
    break;
    default:
    alert('other');
}



// do while:先运行，再判断循环体
// 需要注意的是:如果条件已开始就不满足，但是它至少会执行一次，因为程序，先运行，再判断循环体
// 切记：循环体的判断要想好，否则可能出现死循环
var box5 = 1
do {
    alert(box5);
    box5++;
} while (box5<=5);  // 输出1,2,3,4,5

// 死循环
// var box6 = 10
// do {
//     alert(box6);
//     box6++;
// } while (box6>5); 


// while 语句
// 先判断，再运行的循环体
var box7 = 1;
while (box7<=5) {
    alert(box7);
    box7++;
}


// for 语句
var box8 = 5;
for (var i = 0; i < box8.length; i++) {
    alert(box8);
    i++;
};


// for in 语句
var person = {
    'name':'kc',
    'age':25
    'height':178
};

for (var x in person) {
    alert(x);
}


// break 和 continue
// break:立即退出循环体，强制继续执行循环体后面的语句
// contine:退出当前循环，继续后面的循环
for (var i = 0; i < 10; i++) {
    // 如果i=5，就退出循环
    // 输出 1 2 3 4 
    if (i == 5) break;
    document.write(i);
    document.write('<br/>')
 }; 
 for (var i = 0; i < 10; i++) {
    // 如果i=5，就退出当前循环循环
    // 输出 1 2 3 4 6 7 8 9 
    if (i == 5) continue;
    document.write(i);
    document.write('<br/>')
 }; 



 // with 语句
 // with 语句的作用是将代码的作用域设置到一个特定的对象中
var person1 = {
    'name':'kc',
    'age':25
    'height':178
};
alert(person1.name);
var n = person1.name;
var m = person1.age;

// with(person1)可以将person1给省略掉
with (person1) {
    // 这里面的name相当于person1.name
    var t = name;
    var v = age;
}






































