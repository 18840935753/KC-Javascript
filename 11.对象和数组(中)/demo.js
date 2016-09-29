//alert("第十一章");

// 创建一个数组
// 数组属于Object类型
var box = new Array();
alert(box);

// 创建一个数组，并分配好元素
var box1 = new Array('kc', 28, 'code');
alert(box1);
alert(box1[0]);
alert(box1[1]);
alert(box1[2]);

// 创建一个包含10个元素的数组 但是这里面必须是数字，必须是1位
var box2 = new Array(10);   // 输出 ''''''''''，分配了十个元素，只不过这十个元素都是空元素
// var box2 = new Array(10, 2);  //输出10,2
alert(box2);
box2[0] = 'kc';
box2[3] = 25;
alert(box2);

// 使用字面量的方式创建数组
var box3 = [];  // 和OC和Swift一样
var box4 = ['kc',28,'code'];    // 和OC和Swift一样
var box5 = [1,2,];      // 禁止这样做 IE浏览器识别有问题
var box6 = [,,,];    // 禁止这样做 IE浏览器识别有问题

// 增加 修改
var box7 = ['kc',28,'code'];
box7[0] = 'xy';     //修改
box7[3] = 'haha';   //增加一个元素


// 只有打印索引下标(0 1 2..)的时候，数组会直接打印出来
// 区分以下
//1
var box8 = [];
box8['name'] = 'kc';
box8['age'] = 28;
alert(box8);       // 输出空
alert(box8.name);  // 输出kc
//2
var box8 = [];
box8[0] = 'kc';
box8[1] = 28;
alert(box8[0]);       // kc

// length
alert(box8.length);
// length 也有set属性
box8.length = 10   //输出 'kc',28,,,,,,,,    后面会多处8个空元素

// 使用.length获得最后一个下标值
box8[box8.length] = 'code'


// 创建一个稍微复杂的数组   里面可以放任何类型
var box9 = [
    {
        name:'kc',
        age:25
    },
    ['a','b','c'],
    'hello',
    'world',
    66,
    88
];

alert(box9[0].name);
alert(box9[1][0]);
alert(box9[2]);



// ps:数组最多可以包含4294967295个元素，超出即会发生异常




























