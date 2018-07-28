
$(document).ready(function () {

    let progressBar=$("#progress");
    let timer;
    timer=window.setInterval(function () {
        progressBar.val(progressBar.val()+1);
        if (progressBar.val()===50){
            window.clearInterval(timer);
        }
    },200);

});