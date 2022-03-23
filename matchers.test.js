import fn from "./fn";

// toEqual, toStrictEqual

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeuser("Bami", 100)).toEqual({
    username: "Bami",
    age: 100,
  });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeuser("Bami", 100)).toStrictEqual({
    username: "Bami",
    age: 100,
  });
});

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeuser("Bami", 100)).toBe({
//     username: "Bami",
//     age: 100,
//   });
// });
//    If it should pass with deep equality, replace "toBe" with "toStrictEqual"

// 객체나 배열은 재귀적으로 돌면서 테스트해야하기 때문에 toEqual 혹은 toStrictEqual을 사용한다.
// toStrictEqual은 보다 엄격하게 체크를 한다. undefined가 있으면 테스트는 실패한다.

// toBenull, toBeUndfined, toBeDefined

test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

test("undefined은 undefined입니다.", () => {
  expect(undefined).toBeUndefined();
});

test("1은 Defined입니다.", () => {
  expect(1).toBeDefined();
});

// toBeTruthy
// toBeFalsy

test("0은 Falsy 값입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열의 합은 Truthy 값입니다.", () => {
  expect(fn.add("Hello", "World")).toBeTruthy();
});

// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual

test("ID는 10자 이하여야 합니다.", () => {
  const id = "SUPER_BAMI";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const password = "1234";
  expect(password.length).toBe(4);
});

test("비밀번호 4자리", () => {
  const password = "1234";
  expect(password.length).toEqual(4);
});

// 기본 값을 단순히 같은지 비교할때는 toBe 혹은 toEqual을 사용한다.

test("0.1 더하기 0.2는 0.3 입니다.", () => {
  const password = "1234";
  expect(fn.add(0.1, 0.2)).toEqual(0.3);
});
// Expected: 0.3
// Received: 0.30000000000000004
// 컴퓨터는 2진수를 사용하기 때문에 소수점을 정확하게 계산하지 못함. 테스트는 실패.
// 이런 경우 toBeCloseTo 를 사용해서 근사치를 판별한다.

test("0.1 더하기 0.2는 0.3 입니다.", () => {
  const password = "1234";
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// 문자열 관련

test("Hello World에 a라는 글자가 있나요?", () => {
  expect("Hello World").toMatch("H");
});

test("Hello World에 a라는 글자가 있나요?", () => {
  expect("Hello World").toMatch(/H/);
});
// 대소문자 구분함. /H/i 는 대소문자를 구분하지 않음.

// 배열에서 특정 요소 포함여부

test("유저 리스트에 Bami가 있나요?", () => {
  const user = "Bami";
  const userList = ["Bami", "Tom", "Jane"];
  expect(userList).toContain(user);
});

// 예외 발생

test("이거 에러 나요?", () => {
  expect(() => fn.theError()).toThrow();
});

test("이거 에러 나요?", () => {
  expect(() => fn.theError()).toThrow("error");
});

// 인수에 문자열을 전달하여 특정 에러인지 확인 가능
