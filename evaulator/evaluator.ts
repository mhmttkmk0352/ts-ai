let successPool: any = {};

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

const check: any = (command: string) => {
  try {
    return {
      status: true,
      command,
      result: eval(command)
    };
  } catch (err) {
    return { status: false, tried: command };
  }
};

const startApp: any = () => {
  return new Promise((resolve: any, reject: any) => {
    (async () => {
      for (let i = 0; i < 100000; i++) {
        const result = check(await randCodeCreator(25));

        if (result.status === true) {
          if (!successPool[result.dec]) {
            successPool[result.dec] = result;
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

const test: any = () => {
  const result = check("'$\x15é\x8F¦ÅÞÂ¬¶f!F'");
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
