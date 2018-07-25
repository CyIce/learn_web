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
let num3 = 111;
console.log(num3.toString());

let str = "111";
console.log(parseInt(str));

// 输入
// let str1=prompt("请输入：");
// alert(str1);

// 函数
function func(num1, num2) {
    document.write("<hr><hr>");
    console.log("-------------------------");
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    return num1 + num2;
}

ret = func(10, 10, 1, 2, 3, 4);
console.log(ret);

// 匿名函数
let f = function (a, b) {
    return a + b;
};

console.log(f(1, 2));

// 时间 字符串类型
let date = Date();
console.log(date);
// 对象类型
let data2 = new Date("2016.01.2.16:25");
console.log(data2);
// 月份从0开始为一月
let data3 = new Date(2016, 6, 8, 14, 5, 6);
console.log(data3);