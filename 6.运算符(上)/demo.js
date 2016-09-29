//alert("第六章")

// 前置和后置的区别:在没有赋值操作，前置和后置是一样的。但在赋值操作时，如果递增递减运算符前置，那么前置的运算符会先累加或累减，
// 如果是后置运算符则先赋值再累加或累减

// 没有赋值操作:
var num1 = 100;
num1++;				
alert(num1);		//100
var num2 = 200;
num2++;
alert(num2);		//100

// 有赋值操作
var num3 = 100;
var num4 = ++num3;	
alert(num4);		//101
var num5 = 200;
var num6 = num5++;	//200
alert(num6);


var num7 = '89';
num7++;	 //90
var str1 = 'ab';
str1++;	//NaN
var judge1 = false;
judge1++;	//1 false=0 0+1=1
var num8 = 2.3;
num8++;	//3.3
var box1 = {
	toString:function() {
		return 1;
	}
}
box1++;			//1 如果不设置toString或valueOf 即为NaN


// 关系运算符 和OC和Swift一样 包含大于 大于等于 恒等...
// 当关系运算符操作非数值时，遵循以下原则：
// 1、两个操作数都是数值，则数值比较
// 2、两个操作数都是字符串，则比较两个字符串对应的字符编码值
// 3、两个操作数有一个是数值，则则将另一个转换成数值，再进行数值比较
// 4、两个操作数有一个是对象，则先调用valueOf()方法或toString()方法，再用结果比较


// 特数值比较
// null == undefined    false
// 'NaN' == NaN         false
// 5 == NaN             false
// NaN == NaN           false      NaN与自身不等
// false == 0			true
// true == 1            true
// undefined == 0       false
// null == 0			false
// '100' == 100         true
// '100' === 100		false


// 逻辑与👇

// 如果两边的操作数有一个操作数不是布尔值的情况下，与运算就一定返回布尔值，此时遵循以下规则：
// 与或运算 理解"短路效应"就很好理解了
// 1、第一个操作数是对象，则返回第二个操作数
// var box = {} && (5>4)	true
// 2、第二个操作数是对象，则第一个操作数返回true，才返回第二个操作数，否则返回false
// var box = (5>4) && {}	返回对象
// 3、有一个操作数是null，则返回null
// var box = (3>4) && {}	false
// 4、有一个操作数是undefined，则返回undefined
// var box = (5>4) && null	nul

//短路效应
// var box1 = true && age;   出错，age味定义
// var box2 = false && age;  正确，不执行age


// 逻辑或👇

// 1、第一个操作数是对象，则返回第一个操作数
// 2、第一个操作数的求值结果为false，则返回第二个操作数
// 3、两个操作数都是对象，则返回第一个操作数
// 4、两个操作数都是null，则返回null
// 5、两个操作数都是NaN，则返回NaN
// 6、两个操作时都是undefined，则返回undefined


// 逻辑非👇
// 可以用于任何值，无论这个值是什么数据类型，这个运算符都会返回一个布尔值，它的流程是：先将这个值转换成布尔值，然后取反。
// 规则略 直接上代码
var box3 = !(5>4);		//false
var box3 = !{};			//false			操作数一个对象 返回false
var box3 = !'';		    //true			操作数是一个空字符串 返回true
var box3 = !'Lee';		//false			操作数是一个非空字符串 返回false
var box3 = !0;			//true
var box3 = !8;			//false			操作数是一个非0数值(包括 Infinity)，返回false
var box3 = !null;		//true			操作数是null，返回true
var box3 = !NaN;		//true			操作数是NaN，返回true
var box3 = !undefined;  //true			操作数是undefined，返回true



































