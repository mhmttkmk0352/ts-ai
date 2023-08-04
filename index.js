'use strict';
const __createBinding = (this && this.__createBinding) || (Object.create
  ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    let desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
  }
  : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });
const __setModuleDefault = (this && this.__setModuleDefault) || (Object.create
  ? function (o, v) {
    Object.defineProperty(o, 'default', { enumerable: true, value: v });
  }
  : function (o, v) {
    o.default = v;
  });
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  const result = {};
  if (mod != null) for (const k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected (value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
// Required Modules
const socketIO = __importStar(require('socket.io'));
const http = __importStar(require('http'));
const express = __importStar(require('express'));
// My Modules
const redis_1 = __importDefault(require('./services/redis'));
const helper_1 = __importDefault(require('./helpers/helper'));
const create_1 = require('./modules/create');
const cors = {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
};
const app = express.default();
const server = http.createServer(app);
const io = new socketIO.Server(server, cors);
server.listen(7001, () => {
  console.log('Listening *:7001');
});
const cellPool = {};
const moveCell = (socket) => {
  setInterval(() => {
    for (const item in cellPool) {
      const way_x = helper_1.default.getRandomWay();
      const way_y = helper_1.default.getRandomWay();
      cellPool[item].x += way_x;
      cellPool[item].y += way_y;
      // redis.lpush(item, `${way_x}:${way_y}`);
    }
    socket.emit('draw', cellPool);
  }, 0);
};
// 879980138340
const simulator = (socket, key) => __awaiter(void 0, void 0, void 0, function * () {
  let x = 1250;
  let y = 500;
  const actionList = yield redis_1.default.lrange(key);
  for (const item in actionList) {
    const id = helper_1.default.getRandomNumber(100000000);
    const lifePoint = helper_1.default.getRandomNumber(100);
    const color = 'white';
    const size = 1;
    const value = actionList[item].split(':');
    x += parseInt(value[0]);
    y += parseInt(value[1]);
    const simulatorCell = (0, create_1.createCell)({
      id,
      gender: true,
      actionList: [],
      lifePoint,
      x,
      y,
      color,
      size
    });
    const simulateCell = {};
    simulateCell[id] = simulatorCell;
    socket.emit('draw', simulateCell);
  }
});
const draw = (socket) => {
  if (!process.argv[2]) {
    console.log('#usage: npm start 100');
  }
  for (let i = 0; i < parseInt(process.argv[2]); i++) {
    const id = helper_1.default.getRandomNumber(1000000000000);
    const lifePoint = helper_1.default.getRandomNumber(100);
    const x = 750;
    const y = 500;
    const color = `rgb(${helper_1.default.getRandomNumber(255)}, ${helper_1.default.getRandomNumber(255)},${helper_1.default.getRandomNumber(255)})`;
    const size = 1;
    if (!cellPool[id]) {
      cellPool[id] = (0, create_1.createCell)({
        id,
        gender: true,
        actionList: [],
        lifePoint,
        x,
        y,
        color,
        size
      });
      socket.emit('draw', cellPool);
    }
  }
};
io.on('connection', (socket) => {
  console.log('connected: ' + socket.id);
  draw(socket);
  moveCell(socket);
  // simulator(socket, 208921884416);
});
process.on('SIGINT', () => {
  process.exit();
});
