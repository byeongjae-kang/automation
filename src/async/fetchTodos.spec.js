export const fetchTodos = (isGood) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isGood) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, 1000);
  });
};

describe("fetchTodos function", () => {
  it("should resolve when everything is good", async () => {
    expect(fetchTodos(true)).resolves.toMatch(/resolved/);
  });

  it("should resolve when everything is good", async () => {
    expect(fetchTodos(false)).rejects.toMatch(/reject/gi);
  });
});
