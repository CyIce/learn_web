let song;
let showNum = 0;
// 图像div集合
let imageBoxList = Array();
$(document).ready(function () {

    $.ajax(
        {
            type: "get",
            url: "http://localhost:63342/learn_web/JavaScript/网络请求/res/song.json",
            data: {a: 1, b: 2},
            dataType: "json",
            success: function (data) {
                song = data["RECORDS"];
                mainFunc();
            }
        }
    );

    function mainFunc() {
        // 主div
        let box = $("#box");

        addImage(imageBoxList, box, 82);

        box.on("click", "div", function () {


        });


        // 在浏览器窗口大小变化时调节图片的宽度
        window.onresize = function () {
            let w = imageBoxList[0].css("width");
            for (let i in imageBoxList) {
                imageBoxList[i].css("height", w);
            }
        };

        window.onscroll = function () {
            let scrollTop = $(window).scrollTop();
            let scrollHeight = $(document).height();
            let windowHeight = $(window).height();


            if (scrollTop + windowHeight + 120 >= scrollHeight) {
                addImage(imageBoxList, box, 36);
            }
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
    for (let i = 0; i < num; i++) {
        let iBox = $("<div class='imageBox'><div>");
        iBox.css("background-image", `url("${song[showNum + i]["song_photo"]}")`);
        list.push(iBox);
        box.append(iBox);
    }
    showNum+= num;
    if(showNum>400){
        showNum=0;
    }
    let w = imageBoxList[0].css("width");
    for (let i in imageBoxList) {
        imageBoxList[i].css("height", w);
    }


}

