//alert("第十二章");


// 对象中的方法
// 1:toLocaleString():不会被默认调用  本地格式化功能
// 2:toString():默认调用	无论重写了谁 都会返回相同值
// 3:toString():默认调用 无论重写了谁 都会返回相同值
var box = ['kc', 25, 'code'];
alert(box);	// 隐式调用了toString()
alert(box.toString());   //和valueOf返回一致
alert(box.valueOf());    //和toString返回一致
alert(box.toLocaleString()); // 返回值和上面两种一致

var box = ['kc', 25, 'code', new Date()];
alert(box);						//kc,25,code,Wed Sep 28 2016 00:01:42 GMT+0800 (CST)
alert(box.toString());   		//kc,25,code,Wed Sep 28 2016 00:01:42 GMT+0800 (CST)
alert(box.valueOf());    		//kc,25,code,Wed Sep 28 2016 00:01:42 GMT+0800 (CST)
alert(box.toLocaleString()); 	//kc,25,code,2016/9/28 上午12:01:42


// 数组默认是','隔开，但是使用join，则可以不用','隔开
var box = ['kc',25,'code'];		
alert(typeof box.join('|'));			//方法运行后返回的是以'|'隔开的字符串
alert(typeof box);			//但是原数组仍然是Object类型  没有任何变化




// 栈方法

// 后进先出，类似子弹夹，先压的子弹在底部，后压的子弹在顶部。每次取出的都是顶部位置的子弹。
// 限制插入和删除项的数据结构。
// 栈中元素的插入(或叫推入)和移除(或叫弹出)，只发生在一个位置——栈的顶部。
// push()和pop()方法。

var box = ['kc', 25, 'code'];
box.push('Da Lian', 'Hello');
alert(box.push('Da Lian'));			// 输出5 给数组末添加N个元素，并返回最新长度
alert(box);

alert(box.pop());				//输出Hello 移除数组最后的元素 并且返回移除的元素
alert(box);



// 队列方法
// 先进先出
// push():末端添加一个元素
// shift():前端移除一个元素

alert(box.shift());			// kc
alert(box);

// unshift():与shift()完全相反，意思是为数组前端添加一个元素
alert(box.unshift('a','b'));    //6 前端添加一个元素  并返回最新的长度    // IE浏览器对这个返回值没有用  所以就不要用这个返回值了  只要它的实现功能即可
alert(box);



// 逆向排序  对原数组的引用进行排序 所以原数据也发生改变。如果对值改变的话，原数据就不会改变
var box = [1,2,3,4,5];
alert(box.reverse());    //输出12345 方法执行后返回一个逆序后的数组
alert(box);				 //输出12345 方法执行后返回一个逆序后的数组

// sort从小到大排序
var box = [2,3,1,6,5];
alert(box.sort());
alert(box);

// sort排序是有问题的
var box = [0,1,5,10,15];
alert(box.sort());		//输出 0,1,10,15,5 这是错的  那这怎么解决呢
// 解决方式👆 sort()括号里面是可以传参数的 我们把这个函数传进去就可以解决
function compare(value1, value2) {
	if (value1<value2) {
		return -1;
	} else if (value1>value2) {
		return 1;
	} else {
		return 0;
	};
}
alert(box.sort(compare));


// 对于字符串 上面的方法也适用  所以排序的时候 compare这个方法是必须的
var box = ['0','1','5','10','15'];   //输出 0 1 10 15 5  这是正确的  因为字符串的话  它就会按照第一个字符为0和1的排在前面
alert(box.sort());    // 不加参数也会输出正确  输出 0 1 10 15 5  这是正确的  因为字符串的话  它就会按照第一个字符为0和1的排在前面
alert(box.sort(compare));  //输出 0 1 10 15 5  这是正确的  因为字符串的话  它就会按照第一个字符为0和1的排在前面

// 如果要反向操作呢，从大到小，只需要把上面compare改成下面这个函数。或者调用reverse()函数即可
function reverseCompare(value1, value2) {
	if (value1<value2) {
		return 1;
	} else if (value1>value2) {
		return -1;
	} else {
		return 0;
	};
}


// 数组操作方法 
// concat():可以基于当前数组创建一个新的数组
// slice():可以基于当前数组获取指定区域元素并创建一个新数组
// splice():向数组的中部插入元素

// 拷贝并添加元素生成新数组
var box = ['kc',25,'code'];
var box2 = box.concat('Da Lian');     // 创建新数组 并添加元素
alert(box2);		// 输出新数组
alert(box);			// 输出原来的数组


// 截取
var box = ['kc',25,'code','Dalian'];
var box2 = box.slice(1);     // 输出25 'code'  下标为1的元素往后都获取
var box3 = box.slice(1,2)    // 输出25 'code' 下标为1到下标为2的元素获取
alert(box2);		// 输出获取的数组
alert(box);			// 输出原来的数组


// 删除
var box = ['kc',25,'code','Dalian','Hello'];
var box2 = box.splice(0,2);     //  这里有所不同  这里表示从下标为0的位置往后取两哥
alert(box2);		// 输出删除后的数组 'code','Dalian','Hello'
alert(box);			// 输出删除后的数组 'code','Dalian','Hello'


// 插入功能
var box = ['kc',25,'code','Dalian','Hello'];
// 输出 'kc',25,'a','b','code','Dalian','Hello'    从第一个插入点插入元素，0表示不删除(如果是1就是删除第一条元素再插入)，插入'a'和'b'
var box2 = box.splice(1,0,'a','b');    
alert(box2);	
alert(box);	


// 替换功能
var box = ['kc',25,'code','Dalian','Hello'];
var box2 = box.splice(1,1,100);  //'kc',100,'code','Dalian','Hello'    从下标1取出1条替换成100
alert(box2);		// 25
alert(box);			// 'kc',100,'code','Dalian','Hello'






























