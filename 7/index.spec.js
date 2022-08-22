const arrangeBy = require("./index");

describe("arrangeBy function", () => {
  const users = [
    { id: 1, name: "bob" },
    { id: 2, name: "sally" },
    { id: 3, name: "bob", age: 30 },
  ];

  it("should handle invalid inputs", () => {
    expect(arrangeBy(null)).toBe(null);
    expect(arrangeBy([], null)).toBe(null);
    expect(arrangeBy([])).toBe(null);
  });

  it("shouldn't mutate the original array", () => {
    const original = JSON.stringify(users);
    arrangeBy(users, "name");

    expect(JSON.stringify(users)).toEqual(original);
  });

  it("should exclude objects that don't have the given key", () => {
    const expected = {
      30: [{ id: 3, name: "bob", age: 30 }],
    };

    expect(arrangeBy(users, "age")).toEqual(expected);
  });

  it("should exclude null/undefined or not an object", () => {
    const arr = [null, undefined, 1, { id: 1 }];
    expect(arrangeBy(arr, "id")).toEqual({ 1: [{ id: 1 }] });
  });

  it("should return properly grouped array with the given key", () => {
    const expected = {
      bob: [
        { id: 1, name: "bob" },
        { id: 3, name: "bob", age: 30 },
      ],
      sally: [{ id: 2, name: "sally" }],
    };

    expect(arrangeBy(users, "name")).toEqual(expected);
  });

  it("should store the key", () => {
    const expected = {
      bob: [
        { id: 1, name: "bob" },
        { id: 3, name: "bob", age: 30 },
      ],
      sally: [{ id: 2, name: "sally" }],
    };

    expect(arrangeBy(users, "name")).toEqual(expected);
    expect(arrangeBy(users)).toEqual(expected);
  });
});
