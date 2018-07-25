// 获取标签
// let div_1 = document.getElementById("div_1");
//
// let divs = document.getElementsByClassName("div");
//
// let inputs = document.getElementsByName("input_text");
//
// let allDiv = document.getElementsByTagName("div");


// 获取属性
let myInput = document.getElementById("in");
myInput.placeholder = "你是不是傻啊？";

// 增加修改属性
myInput.setAttribute("disabled", "true");

// console.log(myInput);

// 获取文本属性

let div_2 = document.getElementById("div_2");
console.log(div_2.innerHTML);
console.log(div_2.outerHTML);
console.log(div_2.innerText);
console.log(div_2.outerText);

/**
 * 换颜色
 */
function changeColor() {
    let div = document.getElementById("div_3");
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    let color;
    color = `rgb(${R},${G},${B})`;
    div.style.backgroundColor = color;

}

/**
 * 换位置
 */
function changePosition() {
    let div = document.getElementById("div_3");

    let x= Math.floor(Math.random() *400+200);
    let y= Math.floor(Math.random() *200+100);

    div.style.left=`${x}px`;
    div.style.top=`${y}px`;

}

