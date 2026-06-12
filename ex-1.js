let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  const strLength = words.map(word => word.length);
  /*const result words.map(function(word) {
    return word.length;
  })*/
  return strLength
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
