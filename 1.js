const isNullOrEmpty = (val) => {
  return !val;
};

console.log(isNullOrEmpty(null));
console.log(isNullOrEmpty("a"));
console.log(isNullOrEmpty(""));
console.log(isNullOrEmpty("null"));
