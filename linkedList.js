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
    if (this.size === 0) {
      this.tail = new Node(value);
      this.head = new Node(value);
      this.head.next=this.tail;
    } else {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
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
    for (let i = 0; i < this.size - 1; i++) {
      if (currentNode.value === value) return i;
      currentNode = currentNode.next;
    }
    return null;
  }
  toString() {
    let currentNode = this.head;
    let valueList = "";
    for (let i = 0; i < this.size - 1; i++) {
      let text = `(${currentNode.value.toString()}) ->`;
      valueList += text;
      currentNode = currentNode.next;
    }
    return valueList + "null";
  }
}

export { LinkedList };
