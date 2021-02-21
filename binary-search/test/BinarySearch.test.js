import * as assert from "assert";

import BinarySearch, { InitializationError } from "../BinarySearch.js";

describe("Binary Search", () => {
  it("instance of class can be created", () => {
    const binarySearch = new BinarySearch([1, 2, 3, 4]);
  });

  it("throws an error when created with empty array", () => {
    assert.throws(() => {
      const binarySearch = new BinarySearch([]);
    }, InitializationError);
  });

  it("returns size of array to search", () => {
    const binarySearch = new BinarySearch([1, 2, 3, 4]);
    assert.strictEqual(binarySearch.searchArraySize(), 4);
  });

  it("throws exception if search array is not in order", () => {
    assert.throws(() => {
      const binarySearch = new BinarySearch([1, 100, 4, 99]);
    }, InitializationError);
  });
  it("throws exception if search array is not in order when using custom compare", () => {
    const compareFunction = (a, b) => b - a;
    assert.throws(() => {
      const binarySearch = new BinarySearch([1, 2, 3, 4], compareFunction);
    }, InitializationError);
  });
  it("finds central index of odd number of items in array", () => {
    const binarySearch = new BinarySearch([1, 2, 3, 4]);
    assert.strictEqual(
      binarySearch.findCentralIndex([1, 2, 3, 4, 5, 6, 7, 8, 9].length),
      4
    );
    assert.strictEqual(
      binarySearch.findCentralIndex(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].length
      ),
      6
    );
    assert.strictEqual(binarySearch.findCentralIndex(4), 1);
  });
  it("finds central index of even number of items in array", () => {
    const binarySearch = new BinarySearch([1, 2, 3, 4]);
    assert.strictEqual(
      binarySearch.findCentralIndex([1, 2, 3, 4, 5, 6, 7, 8].length),
      3
    );
    assert.strictEqual(
      binarySearch.findCentralIndex(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].length
      ),
      5
    );
  });
  it("returns -1 if item is not in array", () => {
    const binarySearch = new BinarySearch([1, 2, 3, 4]);
    assert.strictEqual(binarySearch.find(5), -1);
  });
  it("finds item in array", () => {
    const binarySearch = new BinarySearch([1, 2, 3, 4]);
    assert.notStrictEqual(binarySearch.find(1), -1);
    const binarySearch2 = new BinarySearch([1, 2, 3, 4, 6, 7, 8, 9, 400]);
    assert.notStrictEqual(binarySearch2.find(400), -1);
  });

  it("returns correct index of item found", () => {
    const binarySearch = new BinarySearch([1, 2, 3, 4]);
    assert.strictEqual(binarySearch.find(1), 0);
    const binarySearch2 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch2.find(2), 1);
    const binarySearch3 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch3.find(3), 2);
    const binarySearch4 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch4.find(4), 3);
    const binarySearch5 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch5.find(5), 4);
    const binarySearch6 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch6.find(6), 5);
    const binarySearch7 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch7.find(7), 6);
    const binarySearch8 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch8.find(8), 7);
    const binarySearch9 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch9.find(9), 8);
    const binarySearch10 = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 400]);
    assert.strictEqual(binarySearch10.find(400), 9);
  });
});
