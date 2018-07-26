window.onload = function () {
    circle = document.getElementById("box");

    document.addEventListener("keydown", function (e) {

        let event = e || window.event;
        let speed = 10;

        if (event.shiftKey) {
            speed = 30;
        }

        if (event.key === "w" || event.key === "W" || event.key === "ArrowUp") {
            let y = parseInt(window.getComputedStyle(circle, null).top) - speed;
            circle.style.top = `${y}px`;
        } else if (event.key === "s" || event.key === "S" || event.key === "ArrowDown") {
            let y = parseInt(window.getComputedStyle(circle, null).top) + speed;
            circle.style.top = `${y}px`;
        } else if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") {
            let x = parseInt(window.getComputedStyle(circle, null).left) - speed;
            circle.style.left = `${x}px`;
        } else if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") {
            let x = parseInt(window.getComputedStyle(circle, null).left) + speed;
            circle.style.left = `${x}px`;
        }

        console.log(event.key);

    }, false);

};