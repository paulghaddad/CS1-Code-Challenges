/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonCharacters = (string1, string2) => {
  let commonSet = new Set();

  for (let i = 0; i < string1.length; i++) {
    if (string2.match(string1[i]) && !string1[i].match(/ /)) {
      commonSet.add(string1[i]);
    }
  }

  return Array.from(commonSet).join('');
};


var characters = commonCharacters('acexivou', 'aegihobu');
console.assert(characters === 'aeiou');

var characters = commonCharacters('acex ivou', 'aegi hobu');
console.assert(characters === 'aeiou');

