"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
class Helper {
    constructor() {
        this.getRandomNumber = (lastNumber) => {
            return Math.floor(Math.random() * lastNumber);
        };
        this.save = (data) => {
            fs_1.default.writeFileSync("data/logs.json", JSON.stringify(data));
        };
    }
}
module.exports = new Helper;
