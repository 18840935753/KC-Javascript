// alert('第十六章')

// 常用的正则表达式
// 1: 检查邮政编码的匹配
// 必须是6位，必须是数字，第一位不能为0
var str = '224000';
var pattern = /^[1-9][0-9]{5}$/;
// alert(pattern.test(str));


// 2: 检查文件压缩包
// 文件名: 字母数字或下划线_，结尾.zip  .gz  .rar   7z
var str = '213.zip';
var pattern = /^[\w]+\.zip|gz|rar/
// alert(pattern.test(str));


// 3: 删除多余空格
var str = '111 222 333 555';
var pattern = /\s/g;
// alert(str.replace(pattern,''));


// 4: 删除首尾空格
// 方式一:
var str = '    goo  gle  ';
var pattern = /^\s+/;
var result = str.replace(pattern,'');
pattern = /\s+$/;
result = result.replace(pattern,'');
// alert(result);

// 方式二: 非贪婪捕获
// 会有一个问题: .+ 是贪婪模式，下面会匹配到   ｜goo  gle  ｜   后面会有一些空格  那么我们需要把它转化成惰性模式 即使用 .+?
var pattern = /^\s+(.+?)\s+$/;
var str = '    goo  gle  ';
var result = pattern.exec(str)[1];
// alert(result);

// 方式三: 分组获取
var pattern = /^\s+(.+?)\s+$/;
var str = '    goo  gle  ';
var result = str.replace(pattern, '$1');
// alert(result);



// 5: 验证电子邮件
var pattern = /^([\w\.\-])+@([\w\-]+)\.([a-zA-Z]{2,4})$/;
var str = '18840935753@163.com';
alert(pattern.test(str));










