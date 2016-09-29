//alert("第二章")

// 正确样式
// 可以不加分号
var box = 100;
alert(box);
alert(typeof box);		// typeof可以查看类型 与OC中的[str Class] 和 Swift中的str.self是一个道理

// 错误写法
//var name;
//alert(name);	// 提示undefines：表示未定义
//alert(fail);	// 浏览器调试控制台,可以看到"fail is not defined"：表示没有定义

// 因为JS是弱类型语言，所以允许你这样做
var num = "1000"
num = "哈哈"
alert(num);

// 可以在一行里面写
var h = "h"; var k = "k";alert(h);alert(k);

// 定义多个变量也可以这样写
var mine = "haha",
	age = 10,
	height = 175

alert(height);