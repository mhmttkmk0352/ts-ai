import { createClient } from "redis";
import { exec } from "child_process";
// const client = createClient();
// client.connect();

let successPool: any = {};
let counter: number = 0;

const getRandChar: any = () => {
  return String.fromCharCode(Math.floor(Math.random() * 255));
};

const getRandNumber: any = (max: number) => {
  return Math.floor(Math.random() * max);
};

const randCodeCreator: any = (max: number) => {
  return new Promise((resolve: any, reject: any) => {
    (async () => {
      let allCodes = "";
      for (let i = 0; i < getRandNumber(max); i++) {
        allCodes += getRandChar();
      }
      resolve(allCodes);
    })();
  });
};

const check: any = (command: any) => {
  return new Promise((resolve: any, reject: any) => {
    (async () => {
      try {
        exec(command, (error: any, stdout: any, stderr: any) => {
          if (stdout) {
            resolve({
              status: true,
              command,
              result: { error, stdout, stderr },
            });
          } else {
            resolve({ status: false, tried: command });
          }
        });
      } catch (err) {
        resolve({ status: false, tried: command });
      }
    })();
  });
};

const startApp: any = () => {
  return new Promise((resolve: any, reject: any) => {
    (async () => {
      for (let i = 0; i < 1000000; i++) {
        const result = await check(await randCodeCreator(25));
        console.log({ id: counter, result });
        counter++;
        if (result.status === true) {
          if (!successPool[counter]) {
            !!result.result ? (successPool[counter] = result) : "";
            //await client.set(result.command, counter.toString());
          }

          // console.log("\x1B[32m");
          // console.log(result);
          // console.log("\x1B[32m");
        } else {
          //   console.log("\x1B[31m");
          //   console.log(result);
          //   console.log("\x1B[31m");
        }
      }

      resolve(successPool);
    })();
  });
};

const test: any = async () => {
  const result = await check(`dir`);
  console.log({ testResult: result });
};

if (process.argv[2] === "test") {
  console.log("############ test result #############");
  test();
} else if (process.argv[2] === "prod") {
  startApp().then((r: any) => {
    console.log(r);
  });
}
