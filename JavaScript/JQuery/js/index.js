$(document).ready(function () {

    // DOM获取标签
    let box = document.getElementById("box_1 ");
    // JQuery获取标签
    let $box1 = $("#box_1");

    // JQuery转DOM对象
    let box1 = $box1[0];
    let box2 = $box1.get(0);
    console.log($box1);
    console.log(box1);
    console.log(box2);

    // DOM转JQuery
    let $j = $(box);
    console.log($j);

});
