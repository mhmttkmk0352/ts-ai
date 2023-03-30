"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __importDefault(require("./helpers/helper"));
const create_1 = require("./modules/create");
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
