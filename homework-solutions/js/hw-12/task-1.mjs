// Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
 function delayTwoSeconds(callback) {
  setTimeout(callback,2000)
 }
delayTwoSeconds(() => {
  console.log("Отработка спустя 2 секунды")
})

//Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль

const promiseResolve = new Promise((resolve) => {
  resolve(1)
})

promiseResolve.then((result) =>{
  console.log(result)
})

//Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".  Обработайте промис методом .catch и выведите результат его резолва в консоль

const promiseReject = new Promise((reject) => {
  reject("Promised failed")
})

promiseReject
.then ((result) => {
  console.log(result)
})
.catch((error) =>{
  console.error (error.message)
})

// Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(num){
  return new Promise((resolve,reject) => {
  if (typeof num === 'number'){
    resolve(num)
  } else {
    reject(new Error('На входе не число'))
  }
})
}
promiseNumber(5)
.then((result) => {
console.log(`Result:${result}`)
})
.catch((error) => {
console.error(error.message)
})

// Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1),promiseNumber(2),promiseNumber(3)])
.then((results) => {
results.forEach(value => {
  console.log(value)
 
});
})

//Вызовите метод Promise.allSettled([c]), обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((result) => {
result.forEach(value =>{
if (value.status === 'fulfilled'){
  console.log(`Cтатус:${value.status}; Значение: ${value.value}`)
} else {
console.log (`Cтатус:${value.status}`)
}
})
})

// Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function RunAllTests() {
  try {
    // === пункт 5 ===
    const results = await Promise.all([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);

    results.forEach((value) => {
      console.log(value);
    });

    // === пункт 6 ===
    const settledResults = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);

    settledResults.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(`Статус: ${result.status}; Значение: ${result.value}`);
      } else {
        console.log(`Статус: ${result.status}; Причина: ${result.reason}`);
      }
    });

  } catch (error) {
    console.error("Ошибка:", error.message);
  }
}


RunAllTests();