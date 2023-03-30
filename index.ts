//Required Modules
import * as socketIO from "socket.io"
import * as http from "http";
import * as express from "express";

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





let draw: any = (socket: any) => {
    setInterval(() => {
        let id: number = helper.getRandomNumber(1000000000000);
        let lifePoint: number = helper.getRandomNumber(100);
        let x: number = helper.getRandomNumber(1000);
        let y: number = helper.getRandomNumber(100);

        cellPool[id] = createCell({
            id,
            gender: true,
            actionList: [],
            lifePoint,
            x,
            y,
        });

        socket.emit("draw", cellPool);
        console.log({cellPool});
        //helper.save(cellPool);
    }, 1000);
}




io.on("connection", (socket: any) => {
    draw(socket);
    console.log("connected: " + socket.id);
});