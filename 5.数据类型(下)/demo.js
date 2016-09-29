//alert("第五章")

// String:字符串可以用双引号或单引号表示
var str1 = "kc"
var str2 = "xy"
var str3 = str1+str2

// String 包含了一些特殊的字符字面量，也叫转义序列
// \n:换行  \t:制表  \b:空格  \r:会车  \f:进纸  \\:斜杠  \':单引号  \'':双引号  
// \xnn:以十六进制代码nn表示的一个字符(0-F)。例如：\x41
// \unnn:以十六进制代码nnn表示的一个Unicode字符(0-F)。例如：\u03a3
alert('\x41');
alert('\u03a3');

// toString 可以把值转化成字符串
var num1 = true;
alert(num1.toString());

// toString()方法一般是不需要传递参数的，但在数值转成字符串的时候，可以传递进制参数。
var num2 = 10;
alert(num2.toString());			// 10 默认输出
alert(num2.toString(2));		// 1010 二进制输出
alert(num2.toString(8));		// 12 八进制输出
alert(num2.toString(10));		// 10 十进制输出
alert(num2.toString(16));		// a 十六进制输出

// toString() 方法是不能完成null和undefined的转型
// let num3 = null;
// let num4 = undefined;
// alert(num3.toString());		//报错
// alert(num4.toString());		//报错

// String强制性转换 可以完成null和undefined的转型
// 重点: String非常智能，如果String(..)里面的参数给的是null和undefined这种，它会调用String()，反之，它会智能地去调用toString()方法。
let num5 = null;
let num6 = undefined;
alert(String(num5));
alert(String(undefined));

// Object 三种初始化方法：
var object1 = null;
var object2 = {};				// 对象字面量的创建方法
var object3 = new Object();		// 通过new创建一个对象
var object4 = new Object;		// 也可以这样写，但是不推荐

// Object 初始化传递参数
var obejct5 = new Object(2);
alert(obejct5);			// 输出2 类型是Object类型
var num7 = 100;
alert(num7 + obejct5);	// 可以运算 按理说两个不同类型不能运算的，这就是JS的特点，它的内部转换是通过底部实现的，不需要你去做过多的处理。

// new还可以创建其他类型的对象 但是下面方法返回的都是Object类型
var num8 = new Number();
alert(num8);		// 输出0
var num9 = new Number(1);
alert(num9);		// 输出0

var str4 = new String();
var str5 = new String(1);

var judge1 = new Boolean();
var judge2 = new Boolean(1);






































