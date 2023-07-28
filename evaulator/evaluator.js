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
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
client.connect();
let successPool = {};
let counter = 0;
const getRandChar = () => {
    return String.fromCharCode(Math.floor(Math.random() * 255));
};
const getRandNumber = (max) => {
    return Math.floor(Math.random() * max);
};
const randCodeCreator = (max) => {
    return new Promise((resolve, reject) => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            let allCodes = "";
            for (let i = 0; i < getRandNumber(max); i++) {
                allCodes += getRandChar();
            }
            resolve(allCodes);
        }))();
    });
};
const check = (command) => {
    try {
        return {
            status: true,
            command,
            result: eval(command),
        };
    }
    catch (err) {
        return { status: false, tried: command };
    }
};
const startApp = () => {
    return new Promise((resolve, reject) => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < 1000000; i++) {
                const result = check(yield randCodeCreator(255));
                if (result.status === true) {
                    if (!successPool[counter]) {
                        successPool[counter] = result;
                        yield client.set(result.command, result.command);
                        counter++;
                    }
                    // console.log("\x1B[32m");
                    // console.log(result);
                    // console.log("\x1B[32m");
                }
                else {
                    //   console.log("\x1B[31m");
                    //   console.log(result);
                    //   console.log("\x1B[31m");
                }
            }
            resolve(successPool);
        }))();
    });
};
const test = () => {
    const result = check("'$\x15é\x8F¦ÅÞÂ¬¶f!F'");
    console.log({ testResult: result });
};
if (process.argv[2] === "test") {
    console.log("############ test result #############");
    test();
}
else if (process.argv[2] === "prod") {
    startApp().then((r) => {
        console.log(r);
    });
}
