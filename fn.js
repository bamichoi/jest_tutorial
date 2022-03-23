const fn = {
  add: (num1, num2) => num1 + num2,
  makeuser: (username, age) => ({ username, age, gender: undefined }),
  theError: () => {
    throw new Error("error");
  },
};

export default fn;
