$(document).ready(function () {

    let buttonHide = $("#hide");
    // 用于判断图片是否隐藏
    let isHide = false;
    let circle = $("#div");

    buttonHide.click(function () {
        if (isHide) {
            isHide = false;
            circle.fadeIn(2000, function () {
                buttonHide.text("淡出");
            });
        } else {
            isHide = true;
            circle.fadeOut(2000, function () {
                buttonHide.text("淡入");
            });

        }

    });


});