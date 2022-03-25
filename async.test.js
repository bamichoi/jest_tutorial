import fn from "./fn";
import regenerator from "regenerator-runtime";

// 콜백 패턴

// test("3초 후에 받아올 이름은  Bami", () => {
//   function callback(name) {
//     expect(name).toBe("ami");
//   }
//   fn.getName(callback);
// });
// 실패해야하는데 통과. Jest 는 기다리지 않고 callback함수를 기다리지 않고 테스트를 종료해버림

// test("3초 후에 받아올 이름은  Bami", (done) => {
//   function callback(name) {
//     expect(name).toBe("ami");
//     done();
//   }
//   fn.getName(callback);
// });

// 실패

// test("3초 후에 받아올 이름은  Bami", (done) => {
//   function callback(name) {
//     expect(name).toBe("Bami");
//     done();
//   }
//   fn.getName(callback);
// });

// test("3초 후에 받아올 이름은  Bami", (done) => {
//   function callback(name) {
//     expect(name).toBe("Bami");
//     //done();
//   }
//   fn.getName(callback);
// });

// done을 실행하지 않으면 실패.
// Thrown: "Exceeded timeout of 5000 ms for a test.
//     Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."

// test("3초 후에 받아올 이름은  Bami", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("ami");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fn.getName(callback);
// });

// Promise

// test("3초 후에 받아올 나이는 30", () => {
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });

// Promise 를 반환하는 함수는 done이 없어도 Jest가 기다려줌
// promise를 반환하는 함수를 항상 return 해줘야 기다려줌

//resolves, regjects 매쳐를 사용해서 더 간단히 작성가능
// test("3초 후에 받아올 나이는 30", () => {
//   return expect(fn.getAge()).resolves.toBe(30);
//   //return expect(fn.getAge()).rejects.toBe(30);
//   //return expect(fn.getAge()).rejects.toMatch('error'); // 해당 에러인지 확인
// });

// async await

test("3초 후에 받아올 나이는 30", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});

// resolves 매쳐와 함께 사용
// test("3초 후에 받아올 나이는 30", async () => {
//   await expect(fn.getAge()).resolves.toBe(30);
// });
