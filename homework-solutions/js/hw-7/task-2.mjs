/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if(typeof word !== 'string'){
    return false
  }  
 const lowerWord = word.toLowerCase()
 const reverseWord = lowerWord.split("").reverse().join('')
 return lowerWord === reverseWord
}
console.log(isPalindrom('Abba'))

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence === '') {
    return [];
  }
  const words = sentence.split(' ');

  let maxLength = 0;
  let longestWord = [];

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = [word];
    } else if (word.length === maxLength) {
      longestWord.push(word);
    }
  }
  return longestWord;
}  

console.log(findLongestWords('helis penis zalupa'))

export { isPalindrom, findLongestWords };
