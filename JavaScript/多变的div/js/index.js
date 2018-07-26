/**
 * 换颜色
 */
function changeColor() {
    let circular = document.getElementById("circular");
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    let color;
    color = `rgb(${R},${G},${B})`;
    circular.style.backgroundColor = color;

}


let dir = [1, 1];
let speed = 20;

/**
 * 换位置
 */
function changePosition() {

    let circular = document.getElementById("circular");

    let x = speed * dir[0] + parseInt(window.getComputedStyle(circular, null).left);
    let y = speed * dir[1] + parseInt(window.getComputedStyle(circular, null).top);

    if (x < 0) {
        dir[0] = 1;
        changeColor();
        return;
    } else if (x > 700) {
        dir[0] = -1;
        changeColor();
        return;
    }

    if (y < 0) {
        dir[1] = 1;
        changeColor();
        return
    } else if (y > 500) {
        dir[1] = -1;
        changeColor();
        return;
    }

    circular.style.left = `${x}px`;
    circular.style.top = `${y}px`;

}

let timerFly;
let isChange = false;

function fly() {

    if (isChange) {
        return;
    }

    timerFly = window.setInterval(function () {
        changePosition();
    }, 30);


    isChange = true;
}

function stop() {
    window.clearInterval(timerFly);
    isChange = false;
}