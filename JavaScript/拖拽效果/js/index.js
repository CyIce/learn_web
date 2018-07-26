window.onload = function () {


    let circle = document.getElementById("circle");
    let baseX = 0;
    let baseY = 0;

    function move(e) {
        let event2 = e || window.event;
        let moveX = event2.pageX - baseX;
        let moveY = event2.pageY - baseY;
        baseX = event2.pageX;
        baseY = event2.pageY;
        circle.style.left = circle.offsetLeft + moveX + "px";
        circle.style.top = circle.offsetTop + moveY + "px";
    }

    circle.addEventListener("mousedown", function (e) {
        let event = e || window.event;
        baseX = event.pageX;
        baseY = event.pageY;
        document.addEventListener("mousemove", move, false);

        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", move, false);
        }, false);

    }, false);

};










