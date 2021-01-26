/*Написать функцию, которая принимает число как аргумент и возвращает функцию,
которая также принимает число как аргумент и возвращает сумму этих двух чисел.
Выведите в консоль результат.*/

function callbackFunc(a) {
    function sum(b) {
    return a + b;
  }
    return sum(85);
  }
  let resultFunc = callbackFunc(13);
  console.log(resultFunc);