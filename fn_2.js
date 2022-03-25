const fnc = {
  connectUserdb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Bami",
          age: 30,
          gender: "mail",
        });
      }, 500);
    });
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCardb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "volvo",
          name: "xc40",
          color: "blue",
        });
      }, 500);
    });
  },
};

export default fnc;
