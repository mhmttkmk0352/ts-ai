

var canvas = "";
var context = "";
var socket = io.connect("http://localhost:7001");

socket.on("connect", function () {
    console.log({ sid: socket.id });
});



window.onload = function () {
    whenLoad()
}


function createCell(x, y, lifePoint) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white"
    context.fillRect(x, y, 1, 1);
    console.log({ x, y, lifePoint });
}

function whenLoad() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 1000;
}


socket.on("draw", function (data) {
    for (var item in data) {
        createCell(data[item].x, data[item].y, data[item].lifePoint);
    }
});