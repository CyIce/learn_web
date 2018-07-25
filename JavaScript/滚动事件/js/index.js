/**
 * 检测页面发生了滚动
 * 同时可以查看当前页面的高度
 */
window.onscroll = function () {
    console.log("发生了滚动");
    let h = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("当前高度：" + h);
};