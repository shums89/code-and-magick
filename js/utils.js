'use strict';
(function () {

  // Генерация случайного числа
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  // Получение случайного элемента массива
  function getRandonArrElement(arr) {
    return arr[getRandomNumber(arr.length)];
  }

  window.utils = {
    getRandomNumber,
    getRandonArrElement
  };

})();
