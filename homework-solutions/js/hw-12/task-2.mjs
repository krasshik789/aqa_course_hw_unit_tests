// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(body) {
   try { 
     const response = await fetch ('https://jsonplaceholder.typicode.com/todos',{
         method: 'Post',
         body: JSON.stringify(body)
      })
      if (response.status !== 201) {
         throw new Error (`Неверный статус:${response.status}`)
      }
      
      const responseToObject = await response.json()
      
      if(responseToObject.id !== 201){
         throw new Error (`Неверный ID: ${responseToObject.id}`)
      }
      return responseToObject
       
   } catch (error) {
      console.error (error.message)
   }
}

createTodo (  {
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },)
  .then(value => {
   console.log(value)
  })