//alert("第四章")

// Number类型包含：整型和浮点型

// 十进制
var num1 = 250;
alert(num1);

// 八进制：以0为开头，范围是0-7
var num2 = 070;		// 输出是56
alert(num2);
var num3 = 079;		// 无效的八进制，因为9已经超出范围，输出的是79，它会自动去掉前面的0

// 十六进制：前面0x开头，后面是(0-9)及(A-F)
var num4 = 0xA;	 	// 输出的是10
var num5 = 0x1f;	// f大小写没关系

// 二进制 0,1

// 浮点型：
var num6 = 3.8;

//科学计数法：e3表示10的三次方，同理e4等等
var num7 = 4.12e3;	
alert(num7);

// 虽然浮点数值的最高精度是17位小数，但算术运算中可能会不准确，由于这个因素，做判断的时候一定要考虑到这个问题(比如使用整型判断)。
alert(0.1+0.2);		//我们可能猜想是0.3，但是输出的确是0.300000000000000004

// 最大值 最小值
alert(Number.MIN_VALUE);
alert(Number.MAX_VALUE);
// 超出最大值 最小值
let num8 = 100e1000;		//infinity		正无穷
let num9 = -100e1000;		//-infinity		负无穷
// 得到正无穷和负无穷的值
alert(Number.POSITIVE_INFINITY);	//infinity		正无穷
alert(Number.NEGATIVE_INFINITY);	//-infinity		负无穷

// 判断数值是否超过Number的范围
alert(isFinite(100e10));

// NaN，即非数值(Not a Number)是一个特殊的值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况(这样就不会抛出错误了)。比如，在其他语言中，
// 任何数值除以0都会导致错误而终止程序执行，而在ECMAScript中，会返回特殊的值，因此不会影响程序执行。
alert(0/0);		//NaN
alert(12/0);	//infinity 这个很奇怪
alert(12/0*0)	//NaN

// 可以通过Number.NaN的到NaN，任何于NaN运算的值都等于NaN，NaN与自身也不相等。
// isNaN判断是不是NaN，isNaN函数在接收到一个值之后，会尝试将这个值转换成数值。
alert(isNaN(0/0));			// true
alert(isNaN(NaN));			// true
alert(isNaN(25));			// false
alert(isNaN('25'));			// false	'25'为字符串数值，可以转化成数值
alert(isNaN('Lee'));		// true		'Lee'不能转化成数值
alert(isNaN(true));			// false	true可以转化成1

// isNaN函数也适用于对象，在调用isNaN函数过程中，首先会调用valueof方法，然后确定返回值是否能转化成数值。如果不能，则基于这个返回值再调用toString方法，再
// 测试返回值。
var person = {
	toString: function() {
		return '123';
		//return 'Lee';
	}
};
alert(isNaN(person));

// 有三个函数可以把数值转化成非数值：Number()、parseInt、parseFloat，其中，Number()是转型函数，可以用于任何数据类型，而另外两个则是专门用于把字符串转为
// 数值
alert(Number(true));		//1
alert(Number(25));			//25
alert(Number(null));		//空对象返回0
alert(Number(undefined));	//NaN
alert(Number('059'));		//56
alert(Number(''));			//0
alert(Number('036'));		//这样会直接转化成一个八进制的数
alert(Number('Lee'));		//NaN

// 由于Number()函数在处理字符串时比较复杂且不够合理，所以在处理整数的时候更需要使用parseInt()
alert(parseInt('456Lee'));			//456 会返回整数部分
alert(parseInt('Lee456Lee'));		//NaN 如果第一个不是数值，就返回NaN
alert(parseInt('12Lee56Lee'));		//12，从第一数值开始取，到最后一个连续数值结束
alert(parseInt('56.12'));			//56 小数点不是数值，会被去掉
alert(parseInt(''));				//NaN，空返回NaN

//parseInt()除了能够识别十进制数值，也可以识别八进制和十六进制
alert(parseInt('0xA'));
alert(parseInt('070'));
alert(parseInt('0xALee'));

//ECMAScript为parseInt提供了第二个参数，用于解决各种进制的转换
alert(parseInt('0xAF'))				//175 十六进制
alert(parseInt('AF',16))			//175 第二个参数指定16进制，可以去掉0x
alert(parseInt('AF'))				//NaN
alert(parseInt('101010101',2))		//314 二进制转换
alert(parseInt('0xAF'))				//56  八进制转换

//parseFloat和parseInt雷同
alert(parseFloat('123Lee'));		//123 去掉不是数值的部分
alert(parseFloat('0xA'));			//0，不认十六进制
alert(parseFloat('123.4.5'));		//123.4 只认一个小数点
alert(parseFloat('0123.400'));		//123.4，去掉前后导
alert(parseFloat('1.234e7'));		//12340000，把科学计数法专程普通数值




































