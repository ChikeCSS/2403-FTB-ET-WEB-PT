const { add } = require("./index.js");

describe("add()", () => {
  it("adds an array of 3 numbers correctly", () => {
    expect(add([1, 2, 3])).toBe(6);
  });

  it("adds an array of 2 numbers correctly", () => {
    expect(add([1000, 50])).toBe(1050);
  });

  it("adds an array of 1 number correctly", () => {
    expect(add([1])).toBe(1);
  });

  it("returns 0 when an empty array is given", () => {
    expect(add([])).toBe(0);
  });

  it("returns 0 when no array is given", () => {
    expect(add()).toBe(0);
  });
});
