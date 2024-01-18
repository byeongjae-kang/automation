export const sum = (...rest) => {
  if (rest.length > 10) {
    return rest.reduce((prev, curr) => prev + curr, 0);
  }

  for (let i = 0; i < rest.length; i++) {
    if (isNaN(rest[i])) {
      throw new Error("hey this is not a number which is not acceptable");
    }
  }
  const result = rest.reduce((prev, curr) => prev + curr, 0);

  return parseFloat(result.toFixed(2));
};
