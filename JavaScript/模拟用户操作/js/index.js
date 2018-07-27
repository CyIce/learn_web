$(document).ready(function () {

    let button = $("#button1");
    let simulateClick = button.bind("click", function () {
        console.log("我被点击了");
        // 阻止冒泡事件和阻止默认行为
        return false;
    });

    // 模拟用户点击
    simulateClick.trigger("click");


    let div1 = $("#div1");
    // 鼠标移入移出
    // let simulateHover = div1.hover(function () {
    //     console.log("鼠标移入了");
    // }, function () {
    //     console.log("鼠标移出了");
    // });

    let simulateOver=div1.bind("mouseover",function () {
        console.log("鼠标移入了");
    });
    let simulateOut=div1.bind("mouseout",function () {
        console.log("鼠标移出了");
    });

    // 模拟鼠标移入移出
    simulateOver.trigger("mouseover");
    simulateOut.trigger("mouseout");

});