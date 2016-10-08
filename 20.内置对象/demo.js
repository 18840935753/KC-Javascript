// alert('第二十章')

var box = 'box';
// alert(window.box);

// Global对象y有一些内置的属性和方法

// URI 编码方法
// URI 编码可以堆对链接进行编码，以便发送给浏览器，他们采用特殊的UTF-8 编码替换所有无效字符，从而让浏览器能够接受和理解。
// encodeURI() 不会对本身属于 URI 的特殊字符进行编码，例如冒号、正斜杠、问号和 # 号；而 encodeURIComponent() 则会对它发现的人和非标准字符进行编码。
var box = '//Lee李';
// alert(encodeURI(box));					//  //Lee%E6%9D%8E   只是中文被编码了
// alert(encodeURIComponent(box));			// %2F%2FLee%E6%9D%8E  全部编码了
// 解码
// alert(decodeURI(encodeURI(box)));						// //Lee李
// alert(decodeURIComponent(encodeURIComponent(box)));		// //Lee李


// 解析javascrip代码
eval('var box = 100');
// alert(box);
// alert(eval('100'));
eval('function box() { return 123 }');
// alert(box());


// Math 对象  主要用于数学方面
// alert(Math.E);			// 2.718281828459045
// alert(Math.PI);			// 3.141592653589793
// alert(Math.min(2,5,8,1,7));			// 1
// alert(Math.max(2,5,8,1,7));			// 8
			

// 舍入方法
// ceil() : 向上舍入 即它总是将数值向上舍入为最接近的整数
// floor() : 向下舍入 即它总是将数值向下舍入为最接近的整数
// round() : 四舍五入

// alert(Math.ceil(2.3));
// alert(Math.floor(2.3));
// alert(Math.round(2.3));


// 随机数 random
// random() : 介入0-1的随机方法，但不包含0-1
// alert(Math.random());

// for (var i = 0; i < 10; i++) {
// 	document.write(Math.random());
// 	document.write('<br/>');
// };

// 公式 : Marh.random()*(最大值－最小值+1)+最小值    所得是小数  所以加上floor取整
for (var i = 0; i < 10; i++) {
	document.write(Math.floor(Math.random()*10+1));   // 范围是1-10
	document.write('<br/>');
};

// 把求函数封装成一个函数
function select(start, end) {
	var total = end-start+1
	return Math.floor(Math.random()*total+start);
}



// 其他一些函数  求负数变正数  次幂运算等
alert(Math.abs(-9));
alert(Math.exp(9));



























































































































































