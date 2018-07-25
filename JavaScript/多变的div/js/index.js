/**
 * 换颜色
 */
function changeColor() {
    let card = document.getElementById("card");
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    let color;
    color = `rgb(${R},${G},${B})`;
    card.style.backgroundColor = color;

}

/**
 * 换位置
 */
function changePosition() {
    let card = document.getElementById("card");

    let x = Math.floor((Math.random() - 0.5) * 80 + parseInt(window.getComputedStyle(card, null).left));
    let y = Math.floor((Math.random() - 0.5) * 80 + parseInt(window.getComputedStyle(card, null).top));


    if (x < 0 || y < 0 || x > 1000||y>800) {
        return;
    }

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;

}

let timerFly;
let isChange = false;
let timerColor;

function fly() {

    if (isChange) {
        return;
    }

    timerFly = window.setInterval(function () {
        changePosition();
    }, 30);


    timerColor = window.setInterval(function () {
        changeColor();
    }, 1000);


    isChange = true;
}

function stop() {
    window.clearInterval(timerFly);
    window.clearInterval(timerColor);
    isChange=false;
}