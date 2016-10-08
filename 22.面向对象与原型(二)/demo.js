// alert('第二十二章')


// 原型
// 我们创建的每一个函数都有一个prototype(原型)属性，这个属性是一个对象，它的用途是包含可以由特定类型的所有实例共享的属性和方法。逻辑上可以这么理解:
// prototype 通过调用构造函数而创建的那个对象的原型对象。使用原型的好处可以让所有对象实例共享它所包含的属性和方法。也就是说，不必在构造函数中定义对
// 象信息，而是可以直接将这些信息添加到原型中。
function Box() {
	Box.prototype.name = 'Lee';					// 原型属性
	Box.prototype.age = 100;					// 原型属性
	Box.prototype.run = function() {			// 原型方法
		return this.name+this.age+'运行中...';
	};
};

var box1 = new Box();
var box2 = new Box();
// alert(box1.run());

// 如果是实例方法，不同的实例化，他们的方法地址是不一样的，是唯一的
// 如果是原型方法，那么他们地址是共享的，大家都是一样
// alert(box1.run == box2.run);			// true   原型函数的引用地址是一样的
// alert(box1.prototype);					// 这个属性是一个对象，访问不到

// 构造属性，可以获取构造函数本身
// 作用是被原型指针定位，然后得到构造函数本身
// 其实就是构造函数对象对应的原型对象的作用
// alert(box1.constructor);		

// 判断一个对象实例(对象引用)是不是指向了对象的原型对象，基本上只要实例化了，他自动指向的
// alert(Box.prototype.isPrototypeOf(box1));		// true


var box1 = new Box();
box1.name = 'Jack';			// 实例属性，并没有重写原型属性
// delete box1.name;			// 删除实例中的属性
// delete Box.prototype.name;	// 删除原型中的属性
Box.prototype.name = 'KKKC';	// 覆盖原型中的属性
// alert(box1.name);			// 'Jack'   就近原则

var box2 = new Box();		// 'Lee'    实例属性不会共享，所以box2访问不到实例属性，就只能访问原型属性
// alert(box2.name);


// 判断构造属性是否在构造函数的实例里
var box1 = new Box();
// alert(box1.hasOwnProperty('name'));		// false


// in 操作符会在通过对象能够访问给定属性时返回true，无论该属性存在于实例中还是原型中。
// alert('name' in box1);			// true


// 那么我们现在要判断这个属性只有原型里面有
function isProperty(object,property) {
	return !object.hasOwnProperty(property) && (property in object)
};
// alert(isProperty(box1,'name'));			// true



// 原型的创建可以使用字面量的方式  很好地体现了封装性
// 使用构造函数创建原型对象和使用字面量创建对象在使用上基本相同，但还是有一些区别，字面量创建的方式使用constructor属性不回指向实例，
// 而回指向Object，构造函数创建的方式则相反。
function Box() {};
// 使用字面量的方式创建原型对象，这里()就是对象，是Object，new Object就相当于{}
Box.prototype = {
	constructor: Box,   // 强制指向Box
	name:'Lee',
	age:100,
	run:function() {
		return this.name+this.age+'运行中...';
	}
};
var box = new Box();
alert(box.run());
// alert(box1.prototype);		// 使用对象实例无法访问到prototype
// alert(box1.__proto__);		// 使用对象实例访问prototype的指针
// alert(Box.prototype);		// 使用构造函数名()，访问prototype



// ECMAScript内置的引用类型都可以使用这种方式，并且内置的引用类型本身也使用了原型
var box = [5,1,2,7,8,6];
alert(box.sort());			//1,2,5,6,7,8

// 查看sort是否是Array原型对象里的方法
alert(Array.prototype.sort);	// function sort() { [native code] }
alert(String.prototype.substring);		// function substring() { [native code] }


// 内置引用类型的功能拓展
String.prototype.addstring = function() {
	return this+'.被添加了';
};
var box = 'Lee';
alert(box.addstring());



























































































































