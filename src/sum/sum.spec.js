import { sum } from "./sum.js";

describe("sum function", () => {
  it("should sum up 1 and 1 and return 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  it("should throw an error when passed arg is not number", () => {
    expect(() => sum(1, 2, undefined)).toThrow(Error);
  });

  it("should be able handle long number decimal and return two decimal places", () => {
    expect(
      sum(1.19237918237918, 2.128379182739)
    ).toBe(3.32);
  });
});
