console.log("我是在js文件夹里的的js代码");
document.write("<h1>我是一个被document.write写出来的h1标签</h1>");

// 变量
let a = 1;
console.log(a);
let b = true;
console.log(b);
console.log(typeof(b));
let s = "我是一个字符串";
console.log(s);

// 表示超过1e309
let num1 = Infinity;
// 表示
let num2 = NaN;
console.log(num1);
console.log(NaN);
console.log(isNaN(num2));

// 类型转换
let num3=111;
console.log(num3.toString());

let str="111";
console.log(parseInt(str));

// 输入
let str1=prompt("请输入：");
alert(str1);
