function countWords(inputWords) {
  return inputWords.reduce(function(allFruits, fruit) {
    if (fruit in allFruits) {
      allFruits[fruit]++;
    } else {
      allFruits[fruit] = 1;
    }
    return allFruits
  },{});
}

module.exports = countWords;
