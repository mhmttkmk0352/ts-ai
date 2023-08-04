'use strict';
class Helper {
  constructor () {
    this.getRandomNumber = (lastNumber) => {
      return Math.floor(Math.random() * lastNumber);
    };
    this.getRandomWay = () => {
      const randomNumber = this.getRandomNumber(12);
      if (randomNumber % 2 === 0) {
        return 1;
      } else if (randomNumber % 2 === 1) {
        return -1;
      }
    };
  }
}
module.exports = new Helper();
