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
// alert(pattern.google);			// true 是否全局了
// alert(pattern.ignoreCase);		// true 是否忽略大小写
// alert(pattern.multiline);		// fasle 是否支持换行
// alert(pattern.lastIndex);		// 0 下次的匹配位置
// alert(pattern.source);			// google 正则表达式的源符号

var pattern = /google/ig;	
var str = 'google google google'
pattern.test(str);				// google 匹配一次
// alert(pattern.lastIndex);		// 6 第二次匹配的位置



// 获取控制 元字符 元符号
var pattern = /google/;
var str = 'google';
// alert(pattern.test(str));

// 1 . : 该位置匹配任何字符(除换行字符\n外)
var pattern = /g.gle/;
var str = 'g@gle';   // 这里必须要放一个字符  不能多放  也不能少放
// alert(pattern.test(str));

var pattern = /g..gle/;
var str = 'g@1gle';   // 有几个点就匹配几个 一一对应
// alert(pattern.test(str));



// 2 * : 重复匹配
var pattern = /go*gle/;		// o* 表示0个、1个、或者多个o     * 号表示前面一个字符的0到多个
var str = 'goooogle';		// 如果str='ggle'的话 也返回true
// alert(pattern.test(str));


// 3 + : 匹配至少一个x
var pattern = /go+gle/;		// o+ 表示1个、或者多个o  
var str = 'gooogle';		// true   但是如果str='ggle'的话  就是false
// alert(pattern.test(str));


// 4 ? : 匹配一个或0个x
var pattern = /go?gle/;
var str = 'goooogle';		// fasle   但是如果是ggle和gogle，则返回true
// alert(pattern.test(str));


// 5 .? : 匹配1个或者0个的任意字符
var pattern = /go.?gle/;
var str = 'gobgle';			// true
// alert(pattern.test(str));

// 同样这个点 . 可以和上面其他的符号相结合  如果 .+    .*

// 6 x{m,n} : 
var pattern = /go{2,4}gle/;		// o{2,4}表示匹配o 2-4次，包含2和4
var str = 'gooooogle';			// false   o 有5个  所以超过这个区间
// alert(pattern.test(str));

var pattern = /go{3}gle/;		// o{3}  表示只能限定3个   
var str = 'gooogle';
// alert(pattern.test(str));


var pattern = /go{3,}gle/;		// o{3,}  表示3或3个以上 
var str = 'gooooooogle';
// alert(pattern.test(str));




// 使用字符类匹配 [...]匹配的是一个

// [a-z] 表示26个小些字母，任意一个都可以匹配  (a-z是区分大小写的，但是后面如果主动加i的话 就不区分了)
var pattern = /[a-z]oogle/;    
var str = 'boogle';				// true
// alert(pattern.test(str));

// [A-Z] 表示26个小些字母，任意一个都可以匹配 (a-z是区分大小写的，但是后面如果主动加i的话 就不区分了)
var pattern = /[A-Z]oogle/;    
var str = 'boogle';				// fasle   但是如果pattern = /[A-Z]oogle/i , 就会返回true  因为i指定不区分大小写
// alert(pattern.test(str));

// [0-9] 匹配0-9任意数字
var pattern = /[0-9]oogle/;    
var str = '62oogle';		// true  你可能会发现  为什么str = '666oogle' 也能匹配到  因为它匹配的是后面的字符串
// alert(pattern.test(str));

var pattern = /[0-9]*oogle/;   // [0-9]* 表示0次，1次，或者多次任意数字匹配
var str = '621312312oogle';	
// alert(pattern.test(str));


// [o-zA-Z0-9]复合式匹配  表示匹配大小写a-zA-Z0-9都能匹配
var pattern = /[a-zA-Z0-9]oogle/;     // /[a-zA-Z0-9]*oogle/  *号表示0到多次  所以如果str = oogle  也能匹配到
var str = '1opoogle';   // true 匹配到的是poogle
// alert(pattern.test(str));


// [^a-z0-9]  表示不在a-z0-9这个区间的任意符号
var pattern = /[^0-9]oogle/; 
var str = '9oogle';		// fasle  因为9在0-9之间 
// alert(pattern.test(str));


// ^从头开始匹配
var pattern = /^[0-9]oogle/; 
var str = '6666oogle';		// false
// alert(pattern.test(str));


// ^从头开始匹配
var pattern = /^[0-9]+oogle/; 
var str = '6666oogle';		// true   + 号是匹配1个或者多个 
// alert(pattern.test(str));


// [a-z_&] 表示匹配小写 a-z _ &


// \w  表示匹配字母及数字及 _
var pattern = /\woogle/;
var str = '1oogle';		// true
// alert(pattern.test(str));

// \W  表示非匹配字母及数字及 _
var pattern = /\Woogle/;
var str = '1oogle';		// false
// alert(pattern.test(str));


// \d 表示[0-9]
var pattern = /\doogle/;
var str = '1oogle';		// true
// alert(pattern.test(str));

// \D 表示非[0-9]
var pattern = /\Doogle/;
var str = '1oogle';		// false
// alert(pattern.test(str));


// 匹配行首和行尾的问题  前导和后导
// ^ : 表示 google 必须从前面匹配
// $ : 表示从尾部向前匹配 必须是google
// 那么^...$一起使用就指定必须是google这个单词
var pattern = /^google$/;
var str = 'google';			// true
// var str = 'google asdadsdasd';			// false
// var str = 'asdasdasdasd google';			// false
// alert(pattern.test(str));

var pattern = /^[a-z]oogl[0-9]$/;
var str = 'googl55';   // false  ....[0-9]只是一个数字  而55是两个  所以false
// alert(pattern.test(str));



// kc练习写一个验证手机号
var pattern = /^[1][3,5,7,8][0-9][0-9]{8}$/;
var str = '18711111111';
alert(pattern.test(str));













