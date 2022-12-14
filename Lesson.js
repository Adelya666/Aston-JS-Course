function sum(a, b) {
  if (typeof a == "string") {
    a = Number(a);
  }
  if (typeof b == "string") {
    b = Number(b);
  }
  return (a + b).toFixed(3);
}
console.log(sum(4.55456, "17"));

function getNumberRadix(number, radix) {
  if (+number > 0 && +radix >= 2 && +radix <= 16) {
    return (+number).toString(+radix);
  } else {
    throw Error(
      "функция getNumberRadix была вызвана с некорректными параметрами"
    );
  }
}
console.log(getNumberRadix("Hello", 8));
