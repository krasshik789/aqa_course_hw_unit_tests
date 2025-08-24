/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Invalid character object');
  }
  characters.push(character);
}

function getCharacter(name) {
  for(let i = 0; i < characters.length; i++){
    if(characters[i].name === name){
     return characters[i]
    }
  }
}


function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('Invalid age');
  }

  return characters.filter(el => el.age >= minAge);
}


function getCharacter1(name) {
  for(let i = 0; i < characters.length; i++) {
    if(characters[i].name === name) {
      return characters[i]
    }
  }
return null
}

function updateCharacter(name, newCharacter) {
  const character = getCharacter1(name);

  if (!character) {
    throw new Error(`Character ${name} not found`);
  }

  character.name = newCharacter.name;
  character.age = newCharacter.age;
}

function removeCharacter(name) {
  const index = characters.findIndex(el => el.name === name);
  if (index === -1) {
    throw new Error(`Character ${name} not found`);
  }
  characters.splice(index, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
