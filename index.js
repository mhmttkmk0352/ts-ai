"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Required Modules
const fs = __importStar(require("fs"));
const socketIO = __importStar(require("socket.io"));
const http = __importStar(require("http"));
const express = __importStar(require("express"));
const path = __importStar(require("path"));
// My Modules
const helper_1 = __importDefault(require("./helpers/helper"));
const create_1 = require("./modules/create");
const cors = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
};
const app = express.default();
const server = http.createServer(app);
const io = new socketIO.Server(server, cors);
server.listen(7001, () => {
    console.log("Listening *:7001");
});
let cellPool = {};
let moveCell = (socket) => {
    setInterval(() => {
        for (var item in cellPool) {
            let way_x = helper_1.default.getRandomWay();
            let way_y = helper_1.default.getRandomWay();
            cellPool[item].actionList.push({ x: way_x, y: way_y });
            cellPool[item].x += way_x;
            cellPool[item].y += way_y;
        }
        socket.emit("draw", cellPool);
        console.log("actionList:");
        console.log(cellPool);
    }, 1000);
};
// 879980138340
let simulator = (socket, id, cellPool) => {
    console.log(cellPool[720413192455]);
    if (cellPool[id] && cellPool[id].actionList && cellPool[id].actionList.length > 0) {
        let x = 1250;
        let y = 500;
        cellPool[id].actionList.forEach((value, key) => {
            let lifePoint = helper_1.default.getRandomNumber(100);
            let color = cellPool[id].color;
            let size = 1;
            x += value.x;
            y += value.y;
            let simulatorCell = {
                id,
                gender: true,
                actionList: [],
                lifePoint,
                x,
                y,
                color,
                size
            };
            cellPool[id] = simulatorCell;
            socket.emit("draw", cellPool);
        });
    }
};
let draw = (socket) => {
    setInterval(() => {
        let id = helper_1.default.getRandomNumber(1000000000000);
        let lifePoint = helper_1.default.getRandomNumber(100);
        let x = 750;
        let y = 500;
        let color = `rgb(${helper_1.default.getRandomNumber(255)}, ${helper_1.default.getRandomNumber(255)},${helper_1.default.getRandomNumber(255)})`;
        let size = 1;
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
            socket.emit("draw", cellPool);
            console.log({ cellPool: Object.keys(cellPool).length });
        }
    }, 10000);
};
io.on("connection", (socket) => {
    if (fs.existsSync(path.resolve("data", "logs.json"))) {
        cellPool = JSON.parse(fs.readFileSync(path.resolve("data", "logs.json")).toString());
        //socket.emit("draw", cellPool);
        draw(socket);
        moveCell(socket);
        //simulator(socket, 636022980536, cellPool);
    }
    else {
        draw(socket);
        moveCell(socket);
    }
    console.log("connected: " + socket.id);
});
process.on("SIGINT", () => {
    helper_1.default.save(cellPool);
    process.exit();
});
