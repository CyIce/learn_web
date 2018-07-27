$(document).ready(function () {

    // 主div
    let box = $("#box");
    // 图像div集合
    let imageBoxList = Array();
    // 显示图像的div
    let imageBox = $("#imageBox");
    imageBoxList.push(imageBox);

    let w = imageBox.css("width");
    imageBox.css("height", w);

    addImage(imageBoxList, box, 82);

    box.on("click", "div", function () {
        $(this).css("background-color", "pink");

    });


    // 在浏览器窗口大小变化时调节图片的宽度
    window.onresize = function () {
        w = imageBox.css("width");
        for (let i in imageBoxList) {
            imageBoxList[i].css("height", w);
        }
    };

    window.onscroll = function () {
        let scrollTop = $(window).scrollTop();
        let scrollHeight = $(document).height();
        let windowHeight = $(window).height();

        if (scrollTop + windowHeight === scrollHeight) {
            addImage(imageBoxList, box, 36);
        }
    }
});

/**
 *
 * @param list 图片div列表
 * @param box 图片的父容器
 * @param num 克隆的数目
 */
function addImage(list, box, num) {
    for (let i = 0; i <= num; i++) {
        let imageBoxClone = list[0].clone();
        list.push(imageBoxClone);
        box.append(imageBoxClone);
    }

}

