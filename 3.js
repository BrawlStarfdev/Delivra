class InvalidTriangleException extends Error {
  constructor(a, b, c) {
    super(`Invalid triangle exception: ${a}, ${b}, ${c}`);
    this.name = "InvalidTriangleException";
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const validateTriangle = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  if (a + b <= c) return false;
  if (a + c <= b) return false;
  if (b + c <= a) return false;

  return true;
};

const calcTriArea = (a, b, c) => {
  if (!validateTriangle(a, b, c)) {
    throw new InvalidTriangleException(a, b, c);
  }

  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

console.log(calcTriArea(3, 4, 5));
console.log(calcTriArea(-1, 2, 3));
console.log(calcTriArea(1, 2, 3));
