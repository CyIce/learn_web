/*
// 点击事件：Browser Object Model
// 页面文档对象
console.log(window.document);
// 浏览器框架集合
console.log(window.frames);
// 浏览器的描述信息
console.log(window.navigator);
// 屏幕的信息
console.log(window.screen);

console.log(window.location);
// 浏览的历史记录
console. log(window.history);
*/

/**
 * 页面跳转
 * @param page
 */
function jump(page) {
    console.log("你点我干啥");
    // 刷新
    // window.location.reload()
    // 页面跳转
    window.location.href = page;
    // window.location.assign(page)
    // 不会保留历史记录
    // window.location.replace("red.html")
    // alert(window.history.length)
}

/**
 * 跳转到上一个页面
 */
function lastPage(){
    window.history.back()
}

/**
 * 跳转到下一个页面
 */
function nextPage() {
    window.history.forward()
}

/**
 * 会在页面加载完成后调用，只能写一个
 */
window.onload=function () {
    alert("页面加载成功")
};
