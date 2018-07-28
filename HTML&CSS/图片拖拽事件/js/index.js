
window.onload=function () {

    let topBox=document.getElementById("topBox");
    let bottomBox=document.getElementById("bottomBox");
    let image=document.getElementById("image");

    image.ondragstart=function (e) {
        let data=e.dataTransfer;
        data.setData("text/plain",this.id);
    };
    bottomBox.ondragover=function (e) {
        e.preventDefault();
    };

    topBox.ondragover=function (e) {
        e.preventDefault();
    };


    bottomBox.ondrop=function (e) {
        let data=e.dataTransfer;
        let text=data.getData("text/plain");
        this.appendChild(document.getElementById(text));
    };

    topBox.ondrop=function (e) {
        let data=e.dataTransfer;
        let text=data.getData("text/plain");
        this.appendChild(document.getElementById(text));
    };

};