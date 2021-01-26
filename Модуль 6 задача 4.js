/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо
выводить в консоль, начиная от первого и заканчивая вторым.
Используйте setInterval.*/

function showNumber(start, end) {
    let actual = start;
    let countNumber = setInterval(function() {
      console.log(actual);
      if (actual == end) {
        clearInterval(countNumber);
      }
      actual++;
    }, 1000);
  }
  
  showNumber(5, 15);