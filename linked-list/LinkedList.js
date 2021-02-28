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

  push(value) {
    const lastNode = this.traverse(this);
    lastNode.next = new Node(value);
  }

  print() {
    let result = "";
    this.traverse(this, (node) => {
      if (!node.value) return;
      // if result is empty, no need to append value on to end
      result = result ? `${result}, ${node.value}` : node.value;
    });
    return `[${result}]`;
  }
}

export default LinkedList;
