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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Required Modules
const socketIO = __importStar(require("socket.io"));
const http = __importStar(require("http"));
const express = __importStar(require("express"));
// My Modules
const redis_1 = __importDefault(require("./services/redis"));
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
        for (let item in cellPool) {
            let way_x = helper_1.default.getRandomWay();
            let way_y = helper_1.default.getRandomWay();
            cellPool[item].x += way_x;
            cellPool[item].y += way_y;
            //redis.lpush(item, `${way_x}:${way_y}`);
        }
        socket.emit("draw", cellPool);
    }, 0);
};
// 879980138340
let simulator = (socket, key) => __awaiter(void 0, void 0, void 0, function* () {
    var x = 1250;
    var y = 500;
    let actionList = yield redis_1.default.lrange(key);
    for (let item in actionList) {
        let id = helper_1.default.getRandomNumber(100000000);
        let lifePoint = helper_1.default.getRandomNumber(100);
        let color = "white";
        let size = 1;
        let value = actionList[item].split(":");
        x += parseInt(value[0]);
        y += parseInt(value[1]);
        let simulatorCell = (0, create_1.createCell)({
            id,
            gender: true,
            actionList: [],
            lifePoint,
            x,
            y,
            color,
            size
        });
        let simulateCell = {};
        simulateCell[id] = simulatorCell;
        socket.emit("draw", simulateCell);
    }
});
let draw = (socket) => {
    for (let i = 0; i < parseInt(process.argv[2]); i++) {
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
        }
    }
};
io.on("connection", (socket) => {
    console.log("connected: " + socket.id);
    draw(socket);
    moveCell(socket);
    // simulator(socket, 208921884416);
});
process.on("SIGINT", () => {
    process.exit();
});
