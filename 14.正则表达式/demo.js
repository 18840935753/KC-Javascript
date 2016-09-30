alert('第十四章')

// 创建正则表达式(一)
var box = new RegExp('Box');   //必须传一个参数
// alert(box);    // 输出  /Box/   两个反斜杠是正则表达式的字面量表示法

// 第二个参数是可选参数  模式修饰符 
// 模式修饰符的可选参数:  i:忽略大小写   g:全局匹配(有的时候只是匹配到一个点就不匹配了)   m:多行匹配(有的时候字符串过长，需要多行显示)
var box = new RegExp('Box','ig');   
// alert(box);


// 创建正则表达式(二)  较常用的方式
// 使用字面量的方式
var box = /Box/;   //使用字面量方式的正则  这里面不能写成字符串 
// alert(box);
// 如果要加上修饰符的话
var box = /Box/ig;	//字面量正则，可以带修饰符的
// alert(box);


// 学习怎么匹配
// RegExp对象包含两个方法，test()和exec()，功能相似，用于测试字符串匹配
// test(): 返回true false
// exec(): 返回数组

// 使用new运算符
var patten = new RegExp('Box');   //模式
var str = 'box';
// alert(patten.test(str));	// false 大小写不一致
// alert(patten.exec(str));    // null 因为null和数组都是object对象  表示空

var patten = new RegExp('Box','i');   //区分大小写
var str = 'box';
// alert(patten.test(str));

// 使用字面量的方式
var patten = /Box/i;
var str = 'box';
// alert(patten.test(str));

// 使用一行语句
// alert(/Box/i.test('box'));  //true



// For Emample
var patten = /Box/i;
var str = 'This is a box!';
// alert(patten.test(str));   //true   'This is a box!'中包含不区分大小写的'box'

// 使用exec
var patten = /Box/i;
var str = 'box box';
// alert(patten.exec(str));   //返回的是数组，有就返回数组的值，没有就返回null



// 使用字符串的正则

// match(pattern): 返回pattern中的子串和null
// replace(pattern, replacement):用replacement替换pattern
// search(pattern): 返回字符串中pattern开始位置
// split(pattern): 返回字符串按指定pattern拆分的数组

var pattern = /Box/ig;
var str = 'This is a Box! That is a Box!'
// alert(str.match(pattern));    // Box,Box  如果你的正则表达式没有加全局查找'g'，就只会匹配到第一个Box，只会返回一个Box
// alert(str.match(pattern)[0]);
// alert(str.replace(pattern, 'name'));   // 'This is a name! That is a name!'
// alert(str.search(pattern));			// 查找到就返回  所以加不加g，无所谓，找不到会返回-1

// This is a ,! That is a ,!    作为iOS你就可以看成是 [This is a , ! That is a , !] 
// 如果不开启g，只返回 This is a,! That is Box,!
// alert(str.split(pattern));		 



// 👇这些属性一般不会用到
// RegExp 对象的静态属性

var pattern = /google/i;
var str = 'This is a google!';
// 必须执行一下，静态属性才有效
pattern.test(str);	
// 这是什么鬼方法...不需要传递参数  可以打印刚才执行正则的结果
// alert(RegExp.input);			// 输出 This is a google!
// alert(RegExp['$_']);			// 输出 This is a google!
// alert(RegExp.$_);			// 输出 This is a google!  只有input有这个特性
// alert(RegExp.leftContext);   // 输出 This is a     //匹配后输出字符串的前面
// alert(RegExp.rightContext);  // !
// alert(RegExp.lastMatch);     // google   输出最后一个匹配的字符串
// alert(RegExp['$&']);			// google   输出最后一个匹配的字符串

var pattern = /(g)oogle/ig;
pattern.test(str);
// alert(RegExp.lastParen);		// 输出g 输出圆括号里面的
// alert(RegExp.multiline);		// 是否支持多行  好多浏览器不支持这个属性  就不要用了


// 👇这些属性一般不会用到
// RegExp 对象的实例属性
var pattern = /google/ig;		
alert(pattern.google);			// true 是否全局了
alert(pattern.ignoreCase);		// true 是否忽略大小写
alert(pattern.multiline);		// fasle 是否支持换行
alert(pattern.lastIndex);		// 0 下次的匹配位置
alert(pattern.source);			// google 正则表达式的源符号

var pattern = /google/ig;	
var str = 'google google google'
pattern.test(str);				// google 匹配一次
alert(pattern.lastIndex);		// 6 第二次匹配的位置





























