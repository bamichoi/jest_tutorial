const fn = {
  add: (num1, num2) => num1 + num2,
  makeuser: (username, age) => ({ username, age, gender: undefined }),
  theError: () => {
    throw new Error("error");
  },
  getName: (callback) => {
    const name = "Bami";
    setTimeout(() => {
      callback(name);
      //throw new Error("server errror");
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
        //rej("error")
      }, 3000);
    });
  },
};

export default fn;
