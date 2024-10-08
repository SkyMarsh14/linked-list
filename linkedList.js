class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.tail.next = null;
    }
    ++this.size;
  }

  prepend(value) {
    if (this.size === 0) {
      this.tail = new Node(value);
      this.head = new Node(value);
    } else {
      const node = new Node(value, this.head);
      this.head = node;
    }
    ++this.size;
  }

  at(index) {
    if (index < 0 || index > this.size) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    --this.size;
    this.tail = this.at(this.size - 1);
    this.tail.next = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      else currentNode = currentNode.next;
    }
    return false;
  }
  find(value) {
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) return i;
      currentNode = currentNode.next;
    }
    return null;
  }
  toString() {
    let currentNode = this.head;
    let valueList = "";
    for (let i = 0; i < this.size; i++) {
      let text = `(${currentNode.value.toString()}) ->`;
      valueList += text;
      currentNode = currentNode.next;
    }
    return valueList + "null";
  }
  insertAt(value, index) {
    let prev = this.at(index - 1);
    let targetNode = prev.next;
    const node = new Node(value, targetNode);
    prev.next = node;
    ++this.size;
  }
  removeAt(index) {
    let prev = this.at(index - 1);
    prev.next = prev.next.next;
    --this.size;
  }
}

export { LinkedList };
