import fn from "./fn";

// mock function

// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("dd는 dd", () => {
//   console.log(mockFn.mock.calls);
//   expect("dd").toBe("dd");
// });

// 몇번 호출되었는지

// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

// 인수

// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// 리턴 값

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     //fm(num+1)
//     mockFn(num + 1);
//   });
// }

// forEachAdd1([10, 20, 30]);

// test("함수 호출은 3번 됩니다", () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("전달된 값은 11, 21, 31", () => {
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// });

// results

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("함수 호출은 3번 됩니다", () => {
//   console.log(mockFn.mock.results);
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("10에서 1증가한 값이 반환", () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
//   expect(mockFn.mock.results[1].value).toBe(21);
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

// 각각 다른 값 반환하기

// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(10)
//   .mockReturnValueOnce(20)
//   .mockReturnValueOnce(30)
//   .mockReturnValueOnce(40);

// mockFn();
// mockFn();
// mockFn();
// mockFn();

// test("dd는 dd", () => {
//   console.log(mockFn.mock.results);
//   expect("dd").toBe("dd");
// });

// 각각 다른 값을 반환해서 홀수만 출력

// const mockFn = jest.fn();

// [1,2,3,4,5].filter(num => callback(num));
// 당장 콜백을 쓸 수 없다면 목 함수를 활용

// mockFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true);

// const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

// test("홀수는 1,3,5", () => {
//   expect(result).toStrictEqual([1, 3, 5]);
// });

// 비동기 함수를 흉내내는 mockresolvedValue

// const mockFn = jest.fn();

// mockFn.mockResolvedValue({ name: "Bami" });

// test("받아온 이름은 Bami", () => {
//   mockFn().then((res) => {
//     expect(res.name).toBe("Bami");
//   });
// });

// 모킹 모듈을 사용해서 유저를 만드는 함수 테스트 예제

// test("유저를 만든다", () => {
//   const user = fn.createUser("Bami");
//   expect(user.name).toBe("Bami");
// });

//  이러면 매번 유저를 만들고 db에서 롤백을하고 반복을해야함
// 이럴때 mock을 사용하면

// jest.mock("./fn");

// fn.createUser.mockReturnValue({ name: "Bami" });
// // 실제 createUser가 호출되는 것이 아님

// test("유저를 만든다", () => {
//   const user = fn.createUser("Bami");
//   expect(user.name).toBe("Bami");
// });

// 유용한 matcher들

const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalled();
});

test("정확히 3번  호출?", () => {
  expect(mockFn).toBeCalledTimes(3);
});

test("10과 20을 전달받은 함수가 있는가?", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});

test("마지막 함수는 30, 40을 전달 받았는가?", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
