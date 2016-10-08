// alert('第十九章')

// 为了便于操作基本类型值，ECMAScript提供了3个特殊的引用类型: Boolean、Number和String。这些类型与其它类型相似，但同时也具有与各自的基本类型相应的
// 特殊行为。实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象。从而能够调用一些方法来操作这些数据。

// String是基本类型，但又是特殊的引用类型，因为它可以调用系用内置的方法，那我们就成它为基本包装类型。
var box = 'xiaochao';
// alert(box.substring(2));   // aochao
// alert('xiaochao'.substring(2));    // aochao


// 基本类型是无法给自己创建属性和方法的，但是可以调用系统内置的方法(如上)
box.name = 'Lee';			// 给基本类型加属性
box.age = function() {		// 给基本类型加方法
	return 100;				
}
// alert(box.name);			// undefined
// alert(box.age()); 	    // 出错


// 只要是new出来的都是Object, 是引用类型，new String 是String的引用类型
// 不建议这样写   这样写你会分不清那些事引用类型  那些是数据类型  容易混淆
var box = new String('xiaochao');
box.name = 'Lee';			//引用类型，String的引用类型
box.age = function() {	
	return 100;				
}
// alert(box.name);		 // Lee   
// alert(box.age());	     // 100


// Boolean和Number也是同样的用法

// Boolean类型没有特定的属性或者方法   一般就是true或者false    不做过多介绍


// Number 
// Number 类型有一些静态属性，什么叫静态属性呢? Number直接通过 Number 调用的属性，而无须 new 运算符和方法
// alert(Number.MAX_VALUE);  			// 表示最大值
// alert(Number.MIN_VALUE);  			// 表示最小值
// alert(Number.NaN);					// 非数值
// alert(Number.NEGATIVE_INFINITY);  	// 负无穷大，溢出返回该值
// alert(Number.POSITIVE_INFINITY);  	// 无穷大，溢出返回该值
// alert(Number.prototype);			// 原型，用于增加新属性和方法

var box = 1000;
// alert(box.toString());			// 1000   把数值转化成字符串
// alert(box.toLocaleString());	// 1,000  本地化

var box = 1000.789;
// alert(box.toFixed(2));			// 四舍五入 小数点保留两位，并转换字符串

// alert(box.toExponential());		// 以指数形式，并转换字符串
// alert(box.toPrecision(5));		// 根据传参数来决定指数或者点数





// String

// 属性方法
var box = 'xiaochao';
// alert(box.length);					// 属性
// alert(box.constructor);				// 返回创建 String 对象的函数

// 字符方法
// alert(box.charAt(2));				 	// 返回制定索引位置的字符
// alert(box.charCodeAt(3));				// 以 Unicode 编码形式(ASCII)返回指定索引位置的字符

// 字符串操作方法
// alert(box.concat(' is ','teacher','!'));	// 将字符串参数串联到调用该方法的字符串
// alert(box.slice(4,6));						// ch  返回字符串n到m之间位置的字符串
// alert(box.substring(4,6));					// 同上
// alert(box.substr(4,6));						// chao 从第四个开始，选6个

// 如果都带一个参数  从第四个开始截取后面所有的
// alert(box.slice(4));						//  chao
// alert(box.substring(4));					//  chao
// alert(box.substr(4));						//  chao

// 如果是负数呢
// alert(box.slice(-2));			// 计算方式  起始位置 = 长度-2
// alert(box.substring(-2));		// 负数返回全部字符串
// 下面这句话在IE浏览器中遇到负值会全部返回
// alert(box.substr(-2));			// 计算方式  起始位置 = 长度-2

// 两个参数
// alert(box.slice(2,-1));			// 从第2位开始取到 长度-2 的位置
// alert(box.slice(-2,-1));		// 从长度-2的位置开始到长度-1的位置

// alert(box.substring(2,-1));		// 参数如果为负数，直接0，然后，如果第二个参数比第一个小，那么第二个参数提前
// alert(box.substr(2,-1));		// 第二个参数为负数，直接0，选0个也就是空


// 字符串位置的方法
var box = 'xiaochaoxiaochao';
// alert(box.indexOf('o'));			// 返回从初始位置搜索o的位置
// alert(box.lastIndexOf('c'));		// 返回从末位位置搜索o第一次出现的位置
// alert(box.indexOf('o',2));			// 从第五个位置开始搜索，o第一次出现的位置
// alert(box.lastIndexOf('o',2));		// 从末尾第五个位置开始向前搜索o第一次出现的位置

// 实现找到所有出现的字符
// alert(box.indexOf(''))				// 找不到返回-1
var boxArr = [];
var pos = box.indexOf('a');
while (pos > -1) {
	boxArr.push(pos);
	pos = box.indexOf('a', pos+1);
}
// alert(boxArr);			// 2,6,10,14



// 大小写转化
var box = 'XiaoChao';
// alert(box.toLowerCase());      		// 全部转化成小写
// alert(box.toUpperCase());			// 全部转化成大写
// alert(box.toLocaleLowerCase());      	// 本地互无区别
// alert(box.toLocaleUpperCase());			// 本地互无区别


// 字符串匹配方法
var box = 'XiaoChao';
// alert(box.match('a'));				// 找到 a 即返回a  没有找到就返回null
// alert(box.search('a'));				// 找到 a 的位置
// alert(box.replace('a','q'));		// 把 a 替换成 q
// alert(box.split(''));				// X,i,a,o,C,h,a,o 分割成数组


// alert(String.fromCharCode(21));		// 放一个ASCII


// 比较
var box = 'Lee';
// alert(box.localeCompare('Lee'));		// 0
// alert(box.localeCompare('Lea'));		// 1
// alert(box.localeCompare('Zea'));		// -1	


// HTML
var box = '百度';
alert(box.link('http://www.baidu.com'));			// 自动添加一句html代码 <a href="http://www.baidu.com">百度</a>
alert(box.bold());									// <b>百度</b>



























































































































































