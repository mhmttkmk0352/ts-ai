

var canvas = "";
var context = "";
var socket = io.connect("http://localhost:7001");

socket.on("connect", function () {
    console.log({ sid: socket.id });
});

window.onload = function () {
    whenLoad()
}


function createCell() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "yellow"
    context.fillRect(getRandomNumber(canvas.width), getRandomNumber(canvas.width), 1, 25);
}

function whenLoad() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 1000;


    setInterval(function () {
        createCell();
    }, 5000);


}