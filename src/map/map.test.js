const map = (array, callback) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);

    newArray.push(result);
  }

  return newArray;
};

describe("map function", () => {
  const ARRAY = [1, 2, 3];
  it("should return the array based on callback function", () => {
    const callback = (num) => num * 2;

    expect(map(ARRAY, callback)).toStrictEqual([2, 4, 6]);
  });

  it("should should call the callback function", () => {
    const callback = jest.fn();

    map(ARRAY, callback);
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(ARRAY.length);
    expect(callback).toHaveBeenNthCalledWith(1, ARRAY[0], 0, ARRAY);
    expect(callback).toHaveBeenNthCalledWith(2, ARRAY[1], 1, ARRAY);
    expect(callback).toHaveBeenNthCalledWith(3, ARRAY[2], 2, ARRAY);
  });
});
