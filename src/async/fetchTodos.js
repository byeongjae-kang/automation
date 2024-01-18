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

const arrayFunc = (arg) => arg + arg + arg + arg + arg + arg;
arrayFunc();

const obj = {
    "trailingComma": "none",
    "tabWidth": 2,
    "arrowParens": "always",
    "printWidth": 80,
    "endOfLine": "lf",
    "semi": true,
    "singleQuote": false
};

console.log(obj);


