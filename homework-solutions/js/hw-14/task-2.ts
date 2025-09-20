// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]



type MapCallback <T,U> = (item: T, index: number) => U

type MyMapF = <T, U>(arr: T[], callback: MapCallback<T, U>) => U[]

const myMap: MyMapF = <T, U> (arr: T[], callback: MapCallback<T, U>): U[] => {
    const result: U[] = []
    for (let i = 0; i < arr.length;i++){
        const newItem = callback(arr[i],i)
        result.push(newItem)
    }
    return result
}
const numbers: number[] = [1,2,3,4,5]
const mapped = myMap(numbers,(item,index) => item * index)
console.log(mapped)