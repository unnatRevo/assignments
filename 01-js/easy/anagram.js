/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (!str1 || !str2) return false;

  if (str1.length != str2.length) return false;

  if (str1 == str2) return true;

  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    let isCharAv = str2.toLowerCase().indexOf(str1[i].toLowerCase()) > -1;
    if (!isCharAv) return false;
  }

  return true;
}

module.exports = isAnagram;
