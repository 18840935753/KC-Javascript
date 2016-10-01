// alert('第十五章')
 
// 匹配的内容里有空格
var pattern = /google/;
var str = 'goo gle';		// false  因为中间有空格
// alert(pattern.test(str));

var pattern = /goo gle/;
var str = 'goo gle';		// true  直接使用空格匹配
// alert(pattern.test(str));


// \s 表示空格匹配
var pattern = /goo\sgle/;
var str = 'goo gle';		// true 注意 一个 \s 只能匹配一个字符
// alert(pattern.test(str));


// \b 可以表示是否到达了边界
var pattern = /google\b/;
var str = 'google';		// true 因为匹配完到达了边界
// alert(pattern.test(str));


// 使用或(|)模式进行匹配
var pattern = /google|baidu|bing/; 
// 需要注意这个是匹配的概念 不是想等的概念 
// 换句话说  判断的是下边的str是否包含google或baidu或bing  
var str = 'this is a bing';	  // true
// alert(pattern.test(str));


// 使用分组模式进行匹配
// 分组可以看成是一个字符  
// /(google){4,8}$/ : 表示 google 整体的4-8次 
// /google{4,8}$/ : 表示 e 的4-8次 
var pattern = /(google){4,8}$/;      
var str = 'googlegooglegooglegoogle';		// true
// alert(pattern.test(str));


// (.*) 和 .*  对比
var pattern = /8.*8/;
var str = 'this is a 8google8';   // true
// alert(pattern.test(str));

// RegExp.$1 : 静态方法  表示获取模式中第一个分组对应的匹配字符串
var pattern = /8(.*)8/;
var str = 'this is a 8google8';
pattern.test(str);		// 之前已经讲过 必须要运行一次才能使用静态方法   除了这个方法  使用exec 或 str.match 等都行  只要这些方法运行一下就可以
// alert(RegExp.$1);	// 输出 google    


var pattern = /8(.*)8/;
var str = 'this is a 8google8';
// document.write(str.replace(pattern,'123'));  // this is a 123
// document.write(str.replace(pattern,'<strong>google</strong>'));
// $1 : 表示分组获取字符串匹配到的内容   这种做法更实际  因为可以根据 8google8 里的 google 改变而更新
// document.write(str.replace(pattern,'<strong>$1</strong>'));



// 两个分组
var pattern = /(.*)\s(.*)/;
var str = 'google baidu';
// alert(str.replace(pattern,'$2 $1'));    // google baidu  第二个分组和第一个分组匹配到的内容换了个位置



// 贪婪 惰性
var pattern = /[a-z]+/;		// 这里使用了贪婪模式 
var str = 'abcdefj';
// alert(str.replace(pattern, '1'));	// 1   所有的字符串变成了1

var pattern = /[a-z]+?/;		// 这里使用了惰性模式
var str = 'abcdefj';
// alert(str.replace(pattern, '1'));	// 1bcdefj   

var pattern = /[a-z]+?/g;		// 开启全局 并且使用惰性模式 
var str = 'abcdefj';
// alert(str.replace(pattern, '1'));	// 1111111  每一个替换成1

var pattern = /[a-z]+/g;		// 开启全局 并且使用贪婪模式 
var str = 'abcdefj';
// alert(str.replace(pattern, '1'));	// 1  所有的都替换成了一个1




// 贪婪模式有个很好的例子
// ps 不知道为什么 我的<strong>都没有加粗
var pattern = '/8(.*)8/';
var str = '8google8 8google8 8google8'
// document.write(str.replace(pattern,'<strong>$1</strong>'))  // 输出 '8google8 8google8 8google8'

// 使用惰性  禁止贪婪  开启全局
var pattern = '/8(.*?)8/g';
var str = '8google8 8google8 8google8'
// document.write(str.replace(pattern,'<strong>$1</strong>')) 
// 输出 <strong>google<strong> <strong>google<strong> <strong>google<strong>

// 另一种使用惰性  屏蔽了8的惰性  也就是两边包含字符
var pattern = '/8([^8]*)8/g';
var str = '8google8 8google8 8google8'
document.write(str.replace(pattern,'<strong>$1</strong>')) 
// 输出 <strong>google<strong> <strong>google<strong> <strong>google<strong>





// exec 用法 返回数组
var pattern = /^[a-z]+\s[0-9]{4}$/;
var str = 'google 2012';
// alert(pattern.exec(str));		// 输出一个数组  一个包含 google 2012 的数组

var pattern = /^[a-z]+/;			// 只返回字母 google
var str = 'google 2012';
// alert(pattern.exec(str));


// 使用分组返回
var pattern = /^([a-z]+)\s([0-9]{4})$/;   // 使用了分组
var str = 'google 2012';
// google 2012 , googlr, 2012
// alert(pattern.exec(str));		
var arr = pattern.exec(str);
// alert(arr[0]);   // a[0]  返回匹配到的整个字符串
// alert(arr[1]);	 // a[1]  返回匹配到的第一个分组的字符串
// alert(arr[2]);	 // a[2]  返回匹配到的第二个分组的字符串


// 捕获性分组
var pattern = /(\d+)([a-z])/;   // 这个叫做捕获性分组，所有的分组都捕获返回
var str = '123abc';
// a[0] : 123a
// a[1] : 123
// a[2] : a


// 非捕获性分组  只要在不需要捕获返回的分组加上  ?:  就不会返回了
var pattern = /(\d+)(?:[a-z])/;   // 这个叫做捕获性分组，所有的分组都捕获返回
var str = '123abc';
// alert(pattern.exec(str));   // 返回 123a ,  123
// a[0] : 123a
// a[1] : 123


// 使用分组嵌套  从外往内分组
var pattern = /(a?(b?(c?)))/;
var str = 'abc';
// alert(pattern.exec(str));     // 输出 abc , abc , bc , c
// 第一步: a[0]，整个匹配到的字符串 abc
// 第二步: a[1]，匹配第一个分组(a?(b?(c?)))，abc
// 第三步: a[2]，匹配第二个分组(b?(c?))，bc
// 第四步: a[3]，匹配第三个分组 c


// 使用前瞻捕获   goo 后面必须是gle才能返回goo，这里一定要注意，返回的是goo，而不是google
var pattern = /goo(?=gle)/;
var str = 'goobb';
// alert(pattern.exec(str));   // null


// 使用特殊字符匹配
var pattern = /\[/;   // 用\来转义正则里面的特殊符号  才能匹配
var str = '[';
// alert(pattern.exec(str));   // [


// 使用换行匹配   开启m换行模式   
var pattern = /^\d+/mg;    // /\d+/mg  这样也可以把数字都换成#
var str = '1.baidu\n2.google\n3.bing';
alert(str.replace(pattern,'#'));




































