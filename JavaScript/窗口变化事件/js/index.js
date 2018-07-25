window.onresize = function () {
    w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    h = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
    console.log(w + "x" + h);
};