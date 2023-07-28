const getRandChar: any = () => {
  return String.fromCharCode(Math.floor(Math.random() * 255));
};

const randCodeCreator: any = () => {
  return getRandChar();
};

const check: any = (command: string) => {
  try {
    return { status: true, result: eval(command) };
  } catch (err) {
    return { status: false };
  }
};

const startApp: any = () => {
  for (let i = 0; i < 100; i++) {
    const result = check(randCodeCreator());
    console.log(result);
    if (result.status === true) {
      console.log({ result });
    } else {
      console.log({ result });
    }
  }
};

startApp();
