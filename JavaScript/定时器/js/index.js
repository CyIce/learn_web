// 定时器编号
let timer;

/**
 * 定时器
 */
function createTimer() {
    console.log("启动定时器");
    timer = window.setInterval(function () {
        console.log("我0.2秒输出一次");
    }, 200);
}


/**
 * 清除定时器
 */
function clearTimer() {
    window.clearInterval(timer);
    console.log("定时器被取消了");

}

// 延时器
let delayer;

/**
 * 延时器
 */
function createDelayer() {
    console.log("启动延时器");
    delayer = window.setTimeout(function () {
        console.log("我是一个延时器");
    }, 1000);
}

function clearDelayer() {
    window.clearTimeout(delayer);
    console.log("延时器被清除了");
}