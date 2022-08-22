const findMostCommons = (arr) => {
  let counts = {};
  let maxCount = 0;

  for (let val of arr) {
    counts[val] = (counts[val] || 0) + 1;
    if (counts[val] > maxCount) maxCount = counts[val];
  }

  return Object.keys(counts).filter((item) => counts[item] === maxCount);
};

console.log(findMostCommons([5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4]));
console.log(findMostCommons([1, 2, 3, 4, 5, 1, 6, 7]));
console.log(findMostCommons([1, 2, 3, 4, 5, 6, 7]));
