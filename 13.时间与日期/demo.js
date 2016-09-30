alert("第十三章");

 // 创建一个日期对象
 // ()构造方法里面可以传参数，指定时间，如果没有传，就是默认当前时间
 var box = new Date();
 alert(box);

 // 静态方法 返回毫秒数
 // 返回一个好描述 余月／日／年
 alert(Date.parse('4/12/2007'));    //1176307200000
 var box = new Date(Date.parse('4/12/2007'));    //把毫秒数换乘我们看的懂的时间
 alert(box);
 alert(1176307200000);		//可以这样写
 alert('1176307200000');	//不可以这样写

 var box = new Date('4/12/2007');     //默认自动后台调用Date.parse('4/12/2007')
 alert(box);

 alert(Date.parse());  //没有传入日起格式参数 返回NaN

 // 火狐返回无效的时间  谷歌返回混乱的日期  IE返回NaN    Opera返回NaN
 var box = new Date('sadsaa1231');    //乱写的日期格式，会返回无效的日期
 alert(box);

 // 第二种写法
 var box = new Date('May 25, 2007');
 alert(box);


 var box = new Date('Thu Apr 12 2007 22:11:00 GMT+0800 (CST)');
 alert(box);

 // 1月没有32号 只有31号 多出来的可以进到2月
 // 火狐变成2月1日  谷歌变成无效的日期Invalid Date  IE变成2月1日   Opera是1月30日
 var box = new Date("January 32, 2007");


 // 另一种创建方式  世界时间标准
 alert(Date.UTC(2007,10));   //返回毫秒数 必须传入年份和月份，不传就可种错误
 
 // 年 月 日 时 分 秒 毫秒    基于0的月份 也就是0表示1月份   输出会是世界协调时间  按照它的区域基准来计算  而不是我们本地时间
 var box = new Date(Date.UTC(2007,10,15,17,22,45,15));
 
 // 如果不加UTC，那么就会返回本地时间
 var box = new Date(2007,10,15,17,22,45,15);
 alert(box);


 // 通用方法
 var box = new Date(2007,10,15,17,22,45,15);
 alert(box);										//Thu Nov 15 2007 17:22:45 GMT+0800 (CST)
 alert('toString:'+box.toString());					//Thu Nov 15 2007 17:22:45 GMT+0800 (CST)
 alert('toLocaleString:'+box.toLocaleString());		//2007/11/15 下午5:22:45
 alert('valueOf:'+box.valueOf());					//1195118565015


// 格式化方法
 var box = new Date(2007,10,15,17,22,45,15);
 alert(box.getTime());     			//获取好毫秒数
 alert(box.setTime(10));   			//设置毫秒数
 alert(box.getYear());     			//废弃 不要使用
 alert(box.getFullYear()); 			//2016
 alert(box.setFullYear(2013)); 		//可以设置年份
 alert(box.getMonth());				//月份要+1，才是当前月。因为月份是从0开始的
 alert(box.setMonth(5)+1);            
 //...同理获取 天 小时 分钟 秒 毫秒...

 // 以上的方法都可以加上UTC 相差8个小时
 // 对比
 var box = new Date(2007,10,15,1,22,45,15);
 alert(box.getHours());				//1
 alert(box.getUTCHours());			//17 东8区有8个小时的差距 所有getHours和getUTCHours相差8个小时
 
 alert(box.getTimezoneOffset());    //返回本地时间和UTC时间相差的分钟数

 //分别获取年 月 日 时 分 秒
 var box = new Date();
 alert(box.getFullYear()+"-"+box.getMonth()+"-"+box.getDate()+" "+box.getHours()+":"+box.getMinutes()+":"+box.getSeconds());