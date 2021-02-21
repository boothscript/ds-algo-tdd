class BinarySearch {
  constructor(searchArray = [], compareFunc = (a, b) => a - b) {
    if (searchArray.length === 0)
      throw new InitializationError("Empty array given when initalizing");

    this.compareFunc = compareFunc;

    if (this.arrayIsInOrder(searchArray)) {
      this.searchArray = searchArray;
      this.workingArray = [...searchArray];
      this.workingIndex = 0;
    } else {
      throw new InitializationError(
        "Search array does not appear to be in order"
      );
    }
  }

  searchArraySize() {
    return this.searchArray.length;
  }
  arrayIsInOrder(array) {
    const orderedArray = [...array].sort(this.compareFunc);
    console.log(orderedArray);
    console.log(array);
    return String(orderedArray) == String(array);
  }
  findCentralIndex(arrayLength) {
    return Math.ceil(arrayLength / 2) - 1;
  }

  find(targetItem) {
    if (this.workingArray.length <= 2) {
      if (this.workingArray[0] == targetItem) return this.workingIndex;
      if (this.workingArray[1] == targetItem) return this.workingIndex + 1;
      else return -1;
    }

    const splitIndex = this.findCentralIndex(this.workingArray.length);

    const compareValue = this.compareFunc(
      this.workingArray[splitIndex],
      targetItem
    );

    if (compareValue === 0) return this.workingIndex + splitIndex;
    if (compareValue < 0) {
      this.workingArray = [...this.workingArray].slice(
        splitIndex,
        this.workingArray.length + 1
      );
      this.workingIndex = this.workingIndex + splitIndex;
    } else this.workingArray = [...this.workingArray].slice(0, splitIndex);

    return this.find(targetItem);
  }
}
export class InitializationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InitializationError";
  }
}

export default BinarySearch;
