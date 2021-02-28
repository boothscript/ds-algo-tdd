import * as assert from "assert";

import LinkedList from "../LinkedList";

describe("List and node creation", () => {
  it("creates empty linked list", () => {
    const linkedList = new LinkedList();
    assert.strictEqual(linkedList.next, null);
  });
  it("append value on to list and create a node", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    assert.strictEqual(linkedList.next.value, 1);
  });
  it("append x and create node with x", () => {
    const linkedList = new LinkedList();
    linkedList.append(100);
    assert.strictEqual(linkedList.next.value, 100);
  });
  it("append 2nd value on to linked list", () => {
    const linkedList = new LinkedList();
    linkedList.append(100);
    assert.strictEqual(linkedList.next.value, 100);
    linkedList.append(300);
    assert.strictEqual(linkedList.next.value, 100);
    assert.strictEqual(linkedList.next.next.value, 300);
  });
  it("prints an empty list when empty", () => {
    const linkedList = new LinkedList();
    assert.strictEqual(linkedList.print(), "[]");
  });
  it("append 3nd value on to linked list and print", () => {
    const linkedList = new LinkedList();
    linkedList.append(100);
    linkedList.append(300);
    linkedList.append(500);
    assert.strictEqual(linkedList.print(), "[100, 300, 500]");
    2;
  });
  it("returns length of 0 when empty", () => {
    const linkedList = new LinkedList();
    assert.strictEqual(linkedList.length, 0);
  });
  it("returns length of list", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    assert.strictEqual(linkedList.length, 3);
  });
  it("push x onto the start of list", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.push(100);
    assert.strictEqual(linkedList.print(), "[100, 1, 2, 3]");
  });
});
