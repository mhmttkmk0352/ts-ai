import fs from "fs";

class Helper {
    getRandomNumber = (lastNumber: number) => {
        return Math.floor(Math.random() * lastNumber);
    }

    save = (data: any) => {
        fs.writeFileSync("data/logs.json", JSON.stringify(data));
    }
}

export = new Helper;