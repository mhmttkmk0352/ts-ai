let successPool: any = {};

const getRandChar: any = () => {
  return String.fromCharCode(Math.floor(Math.random() * 255));
};

const randCodeCreator: any = () => {
  return getRandChar();
};

const check: any = (command: string) => {
  try {
    return {
      status: true,
      result: eval(command),
      dec: command.charCodeAt(0),
    };
  } catch (err) {
    return { status: false, tried: command };
  }
};

const startApp: any = () => {
  return new Promise((resolve: any, reject: any) => {
    (async () => {
      for (let i = 0; i < 10000000; i++) {
        const result = check(randCodeCreator());
        if (result.status === true) {
          if(!successPool[result.dec]){
            successPool[result.dec] = result;
          }
        }
      }

      resolve(successPool);
    })();
  });
};

const test: any = () => {
  const result = check(String.fromCharCode(32));
  console.log({ testResult: result });
};

startApp().then((r: any) => {
  console.log(r);
});

console.log("############ test result #############");
//test();
