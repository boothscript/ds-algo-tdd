import * as assert from "assert";

import LinkedList from "../LinkedList";

describe("List and node creation", () => {
  it("creates empty linked list", () => {
    const linkedList = new LinkedList();
    assert.strictEqual(linkedList.next, null);
  });
  it("push value on to list and create a node", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    assert.strictEqual(linkedList.next.value, 1);
  });
  it("push x and create node with x", () => {
    const linkedList = new LinkedList();
    linkedList.push(100);
    assert.strictEqual(linkedList.next.value, 100);
  });
  it("push 2nd value on to linked list", () => {
    const linkedList = new LinkedList();
    linkedList.push(100);
    assert.strictEqual(linkedList.next.value, 100);
    linkedList.push(300);
    assert.strictEqual(linkedList.next.value, 100);
    assert.strictEqual(linkedList.next.next.value, 300);
  });
  it("prints an empty list when empty", () => {
    const linkedList = new LinkedList();
    assert.strictEqual(linkedList.print(), "[]");
  });
  it("push 3nd value on to linked list and print", () => {
    const linkedList = new LinkedList();
    linkedList.push(100);
    linkedList.push(300);
    linkedList.push(500);
    assert.strictEqual(linkedList.print(), "[100, 300, 500]");
    2;
  });
  it("returns length of 0 when empty", () => {
    const linkedList = new LinkedList();
    assert.strictEqual(linkedList.length, 0);
  });
  it("returns length of list", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    assert.strictEqual(linkedList.length, 3);
  });
});
