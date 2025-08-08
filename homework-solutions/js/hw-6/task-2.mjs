/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
let resultUnique
let resultNull 
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];

resultUnique = [];
resultNull = null;

for (let i = 0; i < myPizzas.length; i++) {
  let found = false;
  for (let j = 0; j < competitorPizzas.length; j++) {
    if (myPizzas[i].toLowerCase() === competitorPizzas[j].toLowerCase()) {
      found = true;
      break; 
    }
  }

  if (!found) {
    resultUnique.push(myPizzas[i]);
  }
}

if (resultUnique.length === 0) {
  resultNull = null;
} else {
  resultNull = null;
}

export { resultNull, resultUnique };
