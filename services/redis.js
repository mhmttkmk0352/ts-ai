"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const tedis_1 = require("tedis");
class RedisClass {
    constructor() {
        this.lpush = (key, data) => {
            //await this.tedis.lpush(89, "a", "b", "c");
            this.tedis.lpush(key, data);
        };
        this.lrange = (key) => {
            return new Promise((resolve, reject) => {
                (() => __awaiter(this, void 0, void 0, function* () {
                    let lrange = yield this.tedis.lrange(key, -100, 999999999999);
                    resolve(lrange);
                }))();
            });
        };
        this.tedis = new tedis_1.Tedis();
    }
}
module.exports = new RedisClass;
