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
const socketIO = __importStar(require("socket.io"));
const http = __importStar(require("http"));
const express = __importStar(require("express"));
// My Modules
const helper_1 = __importDefault(require("./helpers/helper"));
const create_1 = require("./modules/create");
const cors = {
    cors: {
        origin: "https://example.com",
        methods: ["GET", "POST"]
    }
};
const app = express.default();
const server = http.createServer(app);
const io = new socketIO.Server(server, cors);
server.listen(7001, () => {
    console.log("Listening *:7001");
});
io.on("connection", () => {
    console.log("connected: ");
});
let cellPool = {};
setInterval(() => {
    let id = helper_1.default.getRandomNumber(1000000000000);
    let lifePoint = helper_1.default.getRandomNumber(100);
    cellPool[id] = (0, create_1.createCell)({
        id,
        gender: true,
        actionList: [],
        lifePoint
    });
    helper_1.default.save(cellPool);
}, 5000);
