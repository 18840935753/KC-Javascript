// alert('第二十一章')

// JS中 window.name变量有点特殊，所以尽量不要直接食使用name做参数名

// 工厂模式
// 缺点: 没有办法识别 某个对象的引用 到底是哪个对象
function createObject (name,age) {
	var obj = new Object();						// 创建对象
	obj.name = name;							// 添加属性
	obj.age = age;
	obj.run = function() {						// 添加方法
		return this.name+this.age+'运行中...';
	};
	return obj;									// 返回对象引用
};

var box1 = createObject('Lee',100);				// 创建第一个对象
var box2 = createObject('kkk',200);				// 创建第二个对象

// alert(box1.run());								// 打印第一个对象实例的run()方法
// alert(box2.run());								// 打印第二个对象实例的run()方法



// 构造函数创建
// 1: 构造函数没有new Object，但它后台会自动 var obj = new Object
// 2: this就相当于后台运行的obj
// 3: 构造函数不需要返回对象引用，它是后台自动返回
function Box(name,age) {		// 创建一个对象
	this.name = name;			// 添加一个属性
	this.age = age;
	this.run = function() {		// 添加一个方法
		return this.name+this.age+'运行中...';
	};
};
function Desk(name,age) {		// 创建一个对象
	this.name = name;			// 添加一个属性
	this.age = age;
	this.run = function() {		// 添加一个方法
		return this.name+this.age+'运行中...';
	};
};

var box1 = new Box('Lee', 100); 	// 实例化
var box2 = new Box('kkk', 200); 	// 实例化
var box3 = new Desk('desk', 300); 	// 实例化
// alert(box1.run());
// alert(box2.run());
// alert(box1 instanceof Box);			// true
// alert(box3 instanceof Box);			// false


// 构造函数的一些规范：
// 1: 构造函数也是函数，但函数名第一个字母大写(普通函数首字母无须大写)
// 2: 必须new构造函数名()，new Box()，而这个Box第一个字母也是大写的
// 3: 必须使用new运算符




// 对象冒充
var o = new Object();
Box.call(o,'Lee',100);		// 对象冒充
// alert(o.run());



// 
var box1 = new Box('Lee',100);			// 实例化后地址为 1
var box2 = new Box('Lee',100);			// 实例化后地址为 2
// alert(box1.name == box2.name);			// true
// alert(box1.run() == box2.run());		// true

// alert(box1.run == box2.run);			// false  因为它们比较的是引用地址
	

// 如果想让两个引用想等 box1.run == box2.run， 使用下面代码，把Box里面的 run 改成 this.run = run; 即可以。
// 构造函数内部的方法通过全局来实现引用地址一致，但是这又会带来一个问题，建议写代码不要这么去写，还是建议封装在类里面
// function run() {
// 	return this.name+this.age+'运行中...';
// };




























































































































































