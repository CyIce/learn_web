$(document).ready(function () {

    let buttonHide = $("#hide");
    // 用于判断图片是否隐藏
    let isHide = false;
    let circle = $("#div");

    buttonHide.click(function () {
        if (isHide) {
            isHide = false;
            circle.show("slow", function () {
                buttonHide.text("隐藏");
            });
        } else {
            isHide = true;
            circle.hide("slow", function () {
                buttonHide.text("显示");
            });
        }

    })


});