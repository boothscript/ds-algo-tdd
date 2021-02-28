class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.next = null;
    this.value = null;
  }
  traverse(node, nodeCallback = null) {
    if (nodeCallback) nodeCallback(node);
    if (!node.next) return node;
    return this.traverse(node.next, nodeCallback);
  }

  append(value) {
    const lastNode = this.traverse(this);
    lastNode.next = new Node(value);
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.next;
    this.next = newNode;
  }

  print() {
    let result = "";
    const stringify = (node) => {
      if (!node.value) return;
      // if result is empty, no need to append value on to end
      result = result ? `${result}, ${node.value}` : node.value;
    };

    this.traverse(this, stringify);
    return `[${result}]`;
  }
  get length() {
    let count = -1;
    const countLength = (node) => {
      count++;
    };

    this.traverse(this, countLength);
    return count;
  }
}

export default LinkedList;
