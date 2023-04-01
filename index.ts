//Required Modules
import * as fs from "fs";
import * as socketIO from "socket.io"
import * as http from "http";
import * as express from "express";
import * as path from "path";

// My Modules
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
        for (var item in cellPool) {
            let way_x: any = helper.getRandomWay();
            let way_y: any = helper.getRandomWay();

            cellPool[item].actionList.push({ x: way_x, y: way_y });

            cellPool[item].x += way_x;
            cellPool[item].y += way_y;
        }
        socket.emit("draw", cellPool);
        console.log("actionList:");
        console.log(cellPool);
    }, 100);




}
// 879980138340



let simulator = (socket: any, id: number, cellPool: any) => {
    console.log(cellPool[720413192455]);

    if (cellPool[id] && cellPool[id].actionList && cellPool[id].actionList.length > 0) {
        let x: number = 1250;
        let y: number = 500;

        cellPool[id].actionList.forEach((value: any, key: number) => {
            let lifePoint: number = helper.getRandomNumber(100);
            let color: string = cellPool[id].color;
            let size: number = 1;

            x += value.x;
            y += value.y;

            let simulatorCell: any = {
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
}



let draw: any = (socket: any) => {
    setInterval(() => {
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
            console.log({ cellPool: Object.keys(cellPool).length });

        }


    }, 60000 * 60 * 24);
}




io.on("connection", (socket: any) => {


    if (fs.existsSync(path.resolve("data", "logs.json"))) {
        cellPool = JSON.parse(fs.readFileSync(path.resolve("data", "logs.json")).toString());

        //socket.emit("draw", cellPool);
        //draw(socket);
        //moveCell(socket);
        simulator(socket, 830499230008, cellPool);

    }
    else {
        //draw(socket);
        //moveCell(socket);
    }

    console.log("connected: " + socket.id);
});






process.on("SIGINT", () => {
    helper.save(cellPool);
    process.exit();
});