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
