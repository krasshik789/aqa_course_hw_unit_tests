/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  const arr1 = []
 return arr1.concat(...arr)
  }
console.log(mergeArrays([1,2], [3,4], [5,6]))
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let word = sentence.trim().split(" ")
  let result = ""
  let firstWord = true

  for (let i = 0; i < word.length; i++){
    if (word[i] === '') continue

    if(firstWord) {
    result = result + word[i].toLowerCase()
    firstWord = false
    } else {
    result = result + "_" + word[i][0].toUpperCase() + word[i].slice(1).toLowerCase()
    }
  }
return result
}
console.log(devideBy(" I am super engineer"))
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
let firtNumber = 0
let secondNumber = 1
let result = 0

if (n === 0)
  return 0
if (n === 1)
  return 1

for (let i = 2; i <= n; i++){
result = firtNumber + secondNumber
firtNumber = secondNumber
secondNumber = result
}
return result
}
console.log(fibonacci(8))

export { mergeArrays, fibonacci, devideBy };
