//alert("第三章")

// 返回undefine式例，因为没有初始化，一定要却分undefined大小写，
// 这里box的类型是Undefined，box的值是undefined，类型返回的字符串是undefined：
var box;
alert(box);

// 创建对象Object类型，下面的是一个"空的对象"
// 空的对象：表示这个东西创建了，但是没有东西
// 空对象：表示没有创建，就是一个null
// person是Object类型，值是[object Object]，类型返回的字符串是object
var person = {};	// 也可以这样写：var person = new Object();
alert(person);
alert(typeof person);

// null也是派生自Object，所以它也是Object一种
// empty是Null类型，值是null，类型返回的字符串是object
var empty = null;	
alert(null);
alert(typeof person);

// hanshu是Function类型，值是function hanshu(){}，类型返回的字符串是function
function hanshu() {

}
alert(hanshu);

// typeof 可以直接使用字面量
alert(typeof "haha")

// typeof操作符可以操作变量，也可以操作字面量。虽然也可以这样使用，typeof(box)，但是，typeof是操作符而非内置
// 函数。ps：函数在ECMAScript中是对象，不是一种数据类型。所以，使用typeof来区分function和object是非常有必要的。

// undefine和null
alert(undefined == null);	// true : 这两个值相等
alert(undefined === null);	// false：这是恒等，因为二者数据类型不相等
alert(typeof undefine == typeof unll)

//true不一定为1，false不一定为0
// 例如:
var value = true;
alert(value == 1); //true
alert(value === 1);	//false 因为数据类型不等 或 alert(typeof true == typeof 1)

// 显式转化
var name = "kc"
alert(Boolean(name));	// 返回的是true
alert(Boolean(""));		// 返回false 

// 隐式转化
var judge = "";
if (judge) {
	alert("zhen");
}else{
	alert("jia");
};

// 转化成Boolean值的规则：
// String转化Boolean：任何非空字符串：true		空字符串：false
// Number转化Boolean：任何非零数字值(包括无穷大)：true		0和NaN：false
// Object转化Boolean：任何对象：true		null：false
// Undefined转化Boolean：undefied：false














