"use strict";
const getRandChar = () => {
    return String.fromCharCode(Math.floor(Math.random() * 255));
};
const randCodeCreator = () => {
    return getRandChar();
};
const check = (command) => {
    try {
        return { status: true, result: eval(command) };
    }
    catch (err) {
        return { status: false };
    }
};
const startApp = () => {
    for (let i = 0; i < 10; i++) {
        const result = check(randCodeCreator());
        console.log(result);
        if (result.status === true) {
            console.log({ result });
        }
        else {
            console.log({ result });
        }
    }
};
startApp();
