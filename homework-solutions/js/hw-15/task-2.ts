// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

const exampleObject = {
    name: "Alex",
    job_title: "QA",
    salary: 25000,
    bigBoss: true
}

function getKeyByValue<T extends Record<string,any>> (obj:T, value: T[keyof T]): keyof T | undefined {
for (const key in obj) {
  if (obj[key] === value )
    return key
}
}

const key1 = getKeyByValue(exampleObject, "QA")
const key2 = getKeyByValue(exampleObject, "QA2")
console.log(key1)
console.log(key2)