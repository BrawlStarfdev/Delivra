const findDivisors = (n) => {
  const divisors = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i != n / i) divisors.push(n / i);
    }
  }

  // sort (this is not required tho)
  divisors.sort((a, b) => a - b);

  return divisors;
};

console.log(findDivisors(60));
console.log(findDivisors(42));
console.log(findDivisors(64));
