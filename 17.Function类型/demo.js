// alert('第十七章')

// 一、函数的声明方式
// 方式 1:
function  box(num1, num2) {
	return num1+num2;
}
// alert(box(1,2));

// 方式 2:
var box = function(num1, num2) {
	return num1+num2;
}
// alert(box(1,2));

// 方式 3:
// 使用new运算符的构造函数来声明函数
// 这种方式不建议去使用，因为会进行两次解析，它会首先解析这个语句的整体，然后再解析里面的函数语句
var box = new Function('num1','num2','return num1+num2');
// alert(box(1,2));



// 二、作为值的函数
// 函数可以传递函数

// 1: 举个简单普通的例子  不是作为函数传递的，而是作为函数的返回值而传递的
function box(sum,num) {
	return sum+num;
}
function sum(num) {
	return num+10;
}

// sum(10)这里传递的是函数的返回值，和普通的变量一样。没有区别
var result = box(sum(10),10);
// alert(result);


// 2: 要把函数本身作为参数传递，而不是函数的结果 
function box1(sum, num) {
 	return sum(num);
 }
function sum(num) {
 	return num+10;
 }
 // 这里面sum是一个函数，当做参数传递到另外个函数里，而不是函数的返回值
var result = box1(sum, 10);
// alert(result);



// 三、函数的内部属性
// 递归的小例子  阶乘
function box2(num) {
	if (num<=1) {
		return 1
	} else {
		return num * box2(num-1);
	};
}
// alert(box2(4));     // 4*3*2*1=24  阶乘 递归


// 对于阶乘函数  一般要用到递归算法  所以函数内部一定会调用自身，如果函数名不改变是没有问题的，但
// 一旦改变函数名，内部的自身调用需要逐一修改，为了解决问题，我们可以使用arguments.callee来代替
function box3(num) {
	if (num<=1) {
		return 1
	} else {
		return num * arguments.callee(num-1);   // arguments.callee 调用自身 实现递归
	};
}
// alert(box3(4));



// 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁
// 函数内部另一个特殊的对象  this  很重要   其行为为Java和C#的this大致相似。
// this 引用的是函数据以执行操作的对象 ，或者说函数对象语句所处的那个作用域。
// PS: 当在全局作用域中调用函数时，this对象引用的就是window。

// for example 1:
// window是一个对象，而且是JS里面最大的对象，是最外围的对象。
// alert(window);     // 输出 object window
// alert(this);       // 输出 object window       this 目前表示的是window，因为在window的作用域下   这个时候的this就是window


// for example 2:
// var color = 'redColor';   // 这里color就是全局变量  而这个变量又是window的属性
// alert(window.color);	  // 会打印出 redColor    这里已经很好的说明color是window的属性
// alert(this.color);		  // 同上 会打印出 redColor    this 目前表示的是window，因为在window的作用域下   这个时候的this就是window


// for example 3:
// 我如果直接写 window.color = 'redColor'  是不是就相当于 var color = 'redColor'  呢?  答案是一样的
// window.color = 'redColor';
// alert(this.color);


// for example 4:
// var box4 = {
// 	color: 'blueColor',     //这里的color是box下的属性，也就是局部变量
// 	sayColor: function() {
// 		alert(this.color);        // blueColor  它的外面是box4这个对象把它包含着  这里面的this就是box4  
// 	}
// }
// box4.sayColor();


// for example 5:
// window.color = 'orangeColor';
// function sayColor() {
// 	alert(this.color);
// }
// sayColor();		// 这里调用sayColor，因为它的外面没有对象包围，所以打印的还是window的属性


// for example 6:
// window.color = 'blackColor';
// function sayColor() {
// 	alert(this.color);
// }
// sayColor();			// blackColor

// var box5 = {
// 	color:'sunshine'
// }

// box5.sayColor = sayColor; 	// 这句代码相当于上述102行的代码
// box5.sayColor();	// sunshine  为什么会改变呢  因为你这里引用了box5，就相当于102行的代码，this已经跑到了box5作用域里面了




// 四、函数的属性和方法
// length
function box6(name,age) {
	return name+age;
}
// alert(box6.length);   // 打印出 这个函数有几个参数



// prototype
// 这个属性会在后面的面向对象的课程中详细讲解
// apply和call可以冒充另外一个函数
// apply 第一个参数 作用域，第二个参数表示传递的参数数组。
function box7(num1,num2) {
	return num1+num2;
}
function sum1(num1,num2) {
	return box7.apply(this, [num1, num2]);    // this  表示window作用域，[]表示传递的参数
}
function sum2(num1,num2) {
	return box7.apply(this, arguments);   // 这个可以当数组传递
}
// alert(sum(10,10));
// alert(sum2(10,10));


// call
// call 只是传递参数不同，需要分开一个一个传递，其他和apply都一模一样
function box8(num1,num2) {
	return num1+num2;
}
function sum3(num1,num2) {
	return box7.call(this, num1, num2);
}
// alert(sum3(10,10));



// 你可能会认为这种鬼冒充有什么用呢? 我直接运行原函数不就可以了么?
// 事实上，传递参数并不是apply()和call()方法真正的用武之地；他们经常使用的地方是能够拓展函数赖以运行的作用域
// for example
var color = 'redColor';   //全局
var box9 = {
	color: 'blueColor'
}
function sayColor1() {
	alert(this.color);
}
// sayColor1();   // redColor 这里调用函数里面的this代表的是window

// 用call来实现对象冒充，冒充box下，冒充window下
sayColor1.call(window);    // redColor  冒充window
sayColor1.call(this);      // redColor  this就是window
sayColor1.call(box9);		   // 冒充box，作用域就在box对象里面，所以color就是blueColor













































































































