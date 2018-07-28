window.onload = function () {

    let timer;
    let bird = document.getElementById("bird");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let imageNum = 1;
    console.log(bird);

    start.addEventListener("click", function () {

        timer = window.setInterval(function () {

            bird.style.background = `url("../images/${imageNum}.png"`;
            let birdLeft=parseInt(window.getComputedStyle(bird,null).left)+20;
            if(birdLeft>window.innerWidth){
                birdLeft=-134;
            }
            bird.style.left=birdLeft+"px";
            imageNum++;
            imageNum %= 8;

        }, 100);
    });

    stop.addEventListener("click", function () {
        window.clearInterval(timer);
    });


};