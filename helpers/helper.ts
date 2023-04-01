import fs from "fs";

class Helper {
    getRandomNumber = (lastNumber: number) => {
        return Math.floor(Math.random() * lastNumber);
    }

    getRandomWay = () => {
        let randomNumber = this.getRandomNumber(12);
  
        if (randomNumber % 2 === 0) {
            return 1;
        }
        else if(randomNumber % 2 === 1) {
            return -1;
        }
    }
}

export = new Helper;