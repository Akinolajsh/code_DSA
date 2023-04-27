class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist09 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  remove() {
    let current = this.tail;
    let newTail = current;
    while (current.next) {
      this.tail = newTail;
      this.tail = null;
    }
    this.length--;
    return current;
  }
}

let linklist09 = new Linklist09();

console.log(linklist09.insert(90));
console.log(linklist09.insert(900));
console.log(linklist09.insert(9000));
linklist09.remove();
console.log(linklist09.insert(90000));
console.log(linklist09.insert(900000));
