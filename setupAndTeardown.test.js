import fn from "./fn";
import fnc from "./fn_2";
import regenerator from "regenerator-runtime";

// let num = 0;

beforeEach(() => {
  num = 0;
});

afterEach(() => {
  num = 0;
});

test("0 더하기 1은 1이야", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 2은 2이야", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

test("0 더하기 3은 3이야", () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});

// 비동기 함수에서 전후처리

// let user;

// beforeEach(async () => {
//   user = await fnc.connectUserdb();
// });

// afterEach(() => {
//   return fnc.disconnectDb();
// });

// test("이름은 Bami", () => {
//   expect(user.name).toBe("Bami");
// });

// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });

// 이 경우 제일 최초에 한번만  user를 가져오고 마지막에 끊어주는게 더 좋아보임

let user;

beforeAll(async () => {
  user = await fnc.connectUserdb();
});

afterAll(() => {
  return fnc.disconnectDb();
});

test("이름은 Bami", () => {
  expect(user.name).toBe("Bami");
});

test("나이는 30", () => {
  expect(user.age).toBe(30);
});

// describe를 이용해 비슷한 기능끼리 묶을 수 있음

describe("Car 관련 작업", () => {
  let car;

  beforeAll(async () => {
    car = await fnc.connectCardb();
  });

  afterAll(() => {
    return fnc.disconnectDb();
  });

  test("브랜드는 volvo ", () => {
    expect(car.name).toBe("xc40");
  });

  test("색상은 blue", () => {
    expect(car.color).toBe("blue");
  });
});

//  순서 - 밖의 beforeEach는 항상 안의 beforEach가 실행되기전에 실행됨.
// 반대로 밖의  afterEach 는 항상 안의 afterEach가 실행된 후에 실행됨.

beforeAll(() => console.log("밖 beforeAll")); //1
beforeEach(() => console.log("밖 beforeEach")); //2, 6
afterEach(() => console.log("밖 afterEach")); //4 , 10
afterAll(() => console.log("밖 aftereAll")); //마지막

test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1); //3
});

describe("describe", () => {
  beforeAll(() => console.log("안 beforeAll")); //5
  beforeEach(() => console.log("안 beforeEach")); // 7
  afterEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 aftereAll")); // 마지막 -1

  test("0 + 1 = 1", () => {
    expect(fn.add(0, 1)).toBe(1); //8
  });
});

let num = 0;

test("0 더하기 1은 1이야", () => {
  expect(fn.add(num, 1)).toBe(1);
});

test("0 더하기 2은 2이야", () => {
  expect(fn.add(num, 2)).toBe(2);
});

test("0 더하기 3은 3이야", () => {
  expect(fn.add(num, 3)).toBe(3);
});

// test("0 더하기 4은 4이야", () => {
//   expect(fn.add(num, 4)).toBe(4);
//   num = 10;
// });

test.skip("0 더하기 4은 4이야", () => {
  expect(fn.add(num, 4)).toBe(4);
  num = 10;
});

test.only("0 더하기 5은 5이야", () => {
  expect(fn.add(num, 5)).toBe(5);
});

// only를 이용해 외부 요인을 제거한 고립된 테스트 진행. 에러의 원인이 내부에 있는지 외부에 있는지 확인.
// 반면 skip을 이용하면  해당 테스트만 스킵 가능.
