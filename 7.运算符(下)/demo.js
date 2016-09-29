alert("第七章")

// 位运算符
// 七种：1:位非NOT(~) 2:位与AND(&) 3:位或OR(|) 4:位异或XOR(^) 5:左移(<<) 6:有符号右移(>>) 7:无符号右移(>>>)
// 具体参考：www.w3school.com.cn/js/.........

// 赋值运算符
// 1:乘赋 		*=
// 2:除赋 		/=
// 3:模赋 		%=
// 4:加赋 		+=
// 5:减赋 		-=
// 6:左移赋 		<<=
// 7:有符号右移赋 >>=
// 8:无符号右移赋 >>>=


// 对象
var box = {
	name:"kc",
	age:18,
	1:2
}
alert(box);
alert(box['name']);
alert(box[1]);



// 在不借助第三个变量的情况下，把a和b的值互换一下
    swap(100,200);
    function swap( a, b ){
    	alert('前面  a:'+a+'    b:'+b );
    	a ^= b;
	b ^= a;
	a ^= b; 
	alert('后面   a:'+a+'    b:'+b );
}

// 方法一： 短路效应 if 语句操作
// if( t1() ){
	// 	t2();
	// }

// 方法二： 短路效应 利用“||”“&&”来操作
    "" || t2();

    // t1() && t2();
    function t1(){
    	document.write("t1运行");
    	alert();
    	return 1;
    }
    function t2(){
    	document.write("t2运行");
    }
























