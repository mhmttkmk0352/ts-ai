
var canvas = "";
var context = "";
var cellPool = {}



function createCell(x, y, lifePoint, color, size) {
    context.fillStyle = color;
    context.fillRect(x, y, size, size);
    context.shadowColor = "black";


}


let moveCell = () => {
    setInterval(() => {
        for (let item in cellPool) {
            let way_x = getRandomWay();
            let way_y = getRandomWay();

            cellPool[item].x += way_x;
            cellPool[item].y += way_y;

            createCell(cellPool[item].x, cellPool[item].y, cellPool[item].lifePoint, cellPool[item].color, cellPool[item].size);
        }



    }, 1);
}


let draw = (x, y, cellCount) => {
    for (let i = 0; i < cellCount; i++) {
        let id = getRandomNumber(1000000000000);
        let lifePoint = getRandomNumber(100);
        let color = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)},${getRandomNumber(255)})`;
        let size = 1;

        if (!cellPool[id]) {
            cellPool[id] = {
                id,
                gender: true,
                actionList: [],
                lifePoint,
                x,
                y,
                color,
                size
            };
        }
    }
}



function whenLoad() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.width = 1900;
    canvas.height = 1200;
}




window.onload = function () {
    whenLoad();
    context.clearRect(0, 0, canvas.width, canvas.height);

    draw(300, 300, 1000);

    moveCell();

}