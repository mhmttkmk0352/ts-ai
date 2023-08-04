let canvas = '';
let context = '';
const cellPool = {};

function createCell (x, y, lifePoint, color, size) {
  context.fillStyle = color;
  context.fillRect(x, y, size, size);
  // context.shadowColor = "black";
  // context.shadowBlur = 6;
  // context.shadowOffsetX = 6;
  // context.shadowOffsetY = 6;
}

const collitionAvoidance = (new_x, new_y) => {
  let collitionStatus;
  for (const item in cellPool) {
    if (cellPool[item].x === new_x && cellPool[item].y === new_y) {
      collitionStatus = true;
      break;
    } else {
      collitionStatus = false;
    }
  }
  return collitionStatus;
};

const moveCell = () => {
  setInterval(() => {
    // context.clearRect(0, 0, canvas.width, canvas.height);
    for (const item in cellPool) {
      const way_x = getRandomWay();
      const way_y = getRandomWay();
      const new_x = cellPool[item].x + way_x;
      const new_y = cellPool[item].y + way_y;

      if (collitionAvoidance(new_x, new_y) === false) {
        cellPool[item].x = new_x;
        cellPool[item].y = new_y;
      }
      createCell(cellPool[item].x, cellPool[item].y, cellPool[item].lifePoint, cellPool[item].color, cellPool[item].size);
    }
  }, 10);
};

const draw = (x, y, cellCount) => {
  for (let i = 0; i < cellCount; i++) {
    const id = getRandomNumber(1000000000000);
    const lifePoint = getRandomNumber(100);
    const color = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)},${getRandomNumber(255)})`;
    const size = 1;

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
};

function whenLoad () {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  canvas.width = 1900;
  canvas.height = 1200;
}

window.onload = function () {
  whenLoad();
  draw(900, 400, 100);
  draw(1100, 400, 100);
  draw(500, 400, 100);

  moveCell();
};
