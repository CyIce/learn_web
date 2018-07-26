window.onload = function () {

    let input = document.getElementById("input_1");
    input.addEventListener("focus", function () {
        console.log("聚焦事件");
    }, false);

    input.addEventListener("blur", function () {
        console.log("离焦事件");
    }, false);

    // let timer;
    // let box = document.getElementById("box");
    // box.addEventListener("click", function () {
    //     clearTimeout(timer);
    //     timer=setTimeout(function () {
    //         console.log("单击事件");
    //     },300);
    //
    // }, false);
    //
    // box.addEventListener("dblclick", function () {
    //     clearTimeout(timer);
    //     console.log("双击事件");
    // }, false);

    // 用单击实现双击，完成单击双击完美共存
    let box = document.getElementById("box");
    let timer;
    // 判断是否是双击事件
    let isDouble = false;
    box.addEventListener("click", function () {
        if (isDouble) {
            clearTimeout(timer);
            isDouble = false;
            console.log("你双击了我一下");
        }else{
            isDouble=true;
            timer=setTimeout(function () {
                console.log("你单击了我一下");
                isDouble=false;
            },200)
        }


    }, false)

};