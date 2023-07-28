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
let successPool = {};
const getRandChar = () => {
    return String.fromCharCode(Math.floor(Math.random() * 255));
};
const randCodeCreator = () => {
    return getRandChar();
};
const check = (command) => {
    try {
        return {
            status: true,
            result: eval(command),
            dec: command.charCodeAt(0),
        };
    }
    catch (err) {
        return { status: false, tried: command };
    }
};
const startApp = () => {
    return new Promise((resolve, reject) => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < 10000000; i++) {
                const result = check(randCodeCreator());
                if (result.status === true) {
                    if (!successPool[result.dec]) {
                        successPool[result.dec] = result;
                    }
                }
            }
            resolve(successPool);
        }))();
    });
};
const test = () => {
    const result = check(String.fromCharCode(32));
    console.log({ testResult: result });
};
startApp().then((r) => {
    console.log(r);
});
console.log("############ test result #############");
//test();
