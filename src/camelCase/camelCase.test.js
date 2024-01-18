const camelCase = function (input) {
  if (typeof input !== "string") {
    return input;
  }

  return input
    .trim() // removing spacing before and after the input
    .split(" ")
    .map((word = "", index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

describe("camelCase function", () => {
  it("should convert string into camelCase", () => {
    expect(camelCase("This is a string")).toEqual("thisIsAString");
  });

  it("should trim extra spaces before and after the string", () => {
    expect(camelCase(" This is a string ")).toEqual("thisIsAString");
  });

  it("should return as it when single word is passed", () => {
    expect(camelCase(" word ")).toEqual("word");
  });

  it("should not have other data types other than string, in the case, then it returns as it", () => {
    // expect(camelCase([1, 2, 3])).toStrictEqual([1, 2, 3]);
    // expect(camelCase(undefined)).toBeUndefined();
    // expect(camelCase(null)).toBeNull();
    // expect(camelCase(false)).toBeFalsy();
    // expect(camelCase(["Bart", 19])).toContain(19);
    const arg = ["Bart", 19];
    expect(camelCase(arg)).toBe(arg);
  });
});
