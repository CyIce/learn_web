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

    let x = Math.floor((Math.random() - 0.5) * 20 + parseInt(window.getComputedStyle(div, null).left));
    let y = Math.floor((Math.random() - 0.5) * 20 + parseInt(window.getComputedStyle(div, null).top));

    console.log(x);

    div.style.left = `${x}px`;
    div.style.top = `${y}px`;

}

let timer;

function fly() {
    timer=window.setInterval(function () {
        changeColor();
        changePosition();
    },50);
}