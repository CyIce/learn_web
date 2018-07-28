$(document).ready(function () {

    let circle = $("#circle");
    let buttonBegin = $("#begin");
    let buttonStop = $("#stop");

    buttonBegin.click(function () {

        if (circle.is(":animated")&&circle.queue().length===0) {
            console.log("正在执行动画");
            return false;
        }else{
            circle.css("left","0px");
            circle.css("top","0px");
            circle.animate({left: "500px", top: "200px", opacity: "0.5"}, 5000).delay(500).animate({
                top: "-=200px",
                opacity: "1"
            }, 3000);
            // 延迟1秒
            // circle.delay(1000);
        }
    });

    buttonStop.click(function () {
        // 第一个参数：是否清空动画队列
        // 第二个参数：是否到达动画的末尾
        console.log(circle.queue());
        circle.stop(true, false);

    });

});