

var canvas = "";
var context = "";
var socket = io.connect("http://localhost:7001");

socket.on("connect", function () {
    console.log({ sid: socket.id });
});



window.onload = function () {
    whenLoad()
}


function createCell(x, y, lifePoint, color, size) {
    context.fillStyle = color;
    context.fillRect(x, y, size, size);
    context.shadowColor = "black";
    context.shadowBlur = 2;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    console.log({ x, y, lifePoint });
}

function whenLoad() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.width = 1900;
    canvas.height = 1200;
}


socket.on("draw", function (data) {

    //context.clearRect(0, 0, canvas.width, canvas.height);
    for (var item in data) {
        createCell(data[item].x, data[item].y, data[item].lifePoint, data[item].color, data[item].size);
    }
});