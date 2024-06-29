const myArr = [10, 20, 30, 40, 50];

const result1 = myArr.reduce((acc, curr, i, array) => {
  console.log("index =", i);
  console.log("item =", myArr[i]);
  console.log("acc =", acc);

  return (acc = acc + curr);
}, 0);

console.log("result1", result1);
// аккумулятор инициализируется значением 'ноль'.
// бонус его объявления - знаю его тип - Number.

// Понятнее выглядит, если колбэк объявить отдельно.

function sum(acc, curr, i, array) {
  console.log("index =", i);
  console.log("item =", myArr[i]);
  console.log("acc =", acc);

  return (acc = acc + curr);
}

const result2 = myArr.reduce(sum, 0);
console.log("result2 ", result2);
