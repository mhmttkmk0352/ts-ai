//Required Modules
import * as socketIO from "socket.io"
import * as http from "http";
import * as express from "express";

// My Modules
import redis from "./services/redis";
import helper from "./helpers/helper";
import { createCell } from "./modules/create";




const cors: any = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
}

const app = express.default();
const server = http.createServer(app);
const io = new socketIO.Server(server, cors);


server.listen(7001, () => {
    console.log("Listening *:7001");
});



let cellPool: any = {}



let moveCell: any = (socket: any) => {
    setInterval(() => {
        for (let item in cellPool) {
            let way_x: any = helper.getRandomWay();
            let way_y: any = helper.getRandomWay();

            cellPool[item].x += way_x;
            cellPool[item].y += way_y;
            //redis.lpush(item, `${way_x}:${way_y}`);
        }

        socket.emit("draw", cellPool);

    }, 0);




}
// 879980138340



let simulator = async (socket: any, key: number) => {

    var x: number = 1250;
    var y: number = 500;
    let actionList: any = await redis.lrange(key);

    for (let item in actionList) {
        let id: number = helper.getRandomNumber(100000000);
        let lifePoint: number = helper.getRandomNumber(100);
        let color: string = "white";
        let size: number = 1;

        let value: any = actionList[item].split(":");
        x += parseInt(value[0]);
        y += parseInt(value[1]);

        let simulatorCell = createCell({
            id,
            gender: true,
            actionList: [],
            lifePoint,
            x,
            y,
            color,
            size
        });

        let simulateCell: any = {}
        simulateCell[id] = simulatorCell;
        socket.emit("draw", simulateCell);

    }
}



let draw: any = (socket: any) => {
    if (!process.argv[2]) {
        console.log("#usage: npm start 100");
    }
    for (let i: number = 0; i < parseInt(process.argv[2]); i++) {
        let id: number = helper.getRandomNumber(1000000000000);
        let lifePoint: number = helper.getRandomNumber(100);
        let x: number = 750;
        let y: number = 500;
        let color: string = `rgb(${helper.getRandomNumber(255)}, ${helper.getRandomNumber(255)},${helper.getRandomNumber(255)})`;
        let size: number = 1;

        if (!cellPool[id]) {
            cellPool[id] = createCell({
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
}




io.on("connection", (socket: any) => {
    console.log("connected: " + socket.id);

    draw(socket);
    moveCell(socket);

    // simulator(socket, 208921884416);

});



process.on("SIGINT", () => {
    process.exit();
});