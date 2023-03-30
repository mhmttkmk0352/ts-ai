import helper from "./helpers/helper";
import { createCell } from "./modules/create";

let cellPool: any = {}


setInterval(() => {
    let id: number = helper.getRandomNumber(1000000000000);
    let lifePoint: number = helper.getRandomNumber(100);

    cellPool[id] = createCell({
        id,
        gender: true,
        actionList: [],
        lifePoint
    });

    helper.save(cellPool);
}, 5000);

