import fn from "./fn";

test("1은 1이야", () => {
  expect(1).toBe(1);
});

// test 이름은 쉽고 명확하게 작성
// expect : 검증할 값, toBe(기대되는 결과 값)

// toBe는 Matcher 중 하나로 숫자나 문자등 기본타입값을 비교할때 사용

test("2 더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// 실패하는 케이스

// test("3 더하기 3은 5야", () => {
//   expect(fn.add(3, 3)).toBe(5);
// });

// not

test("3 더하기 3은 5야", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});
