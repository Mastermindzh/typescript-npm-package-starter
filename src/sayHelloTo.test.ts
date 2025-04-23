import { sayHelloTo } from "./sayHelloTo";

test("sayHelloTo", () => {
  expect(sayHelloTo("world")).toBe("Hello world");
});
