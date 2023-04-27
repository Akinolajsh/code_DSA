class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist12 {
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

  remove(val) {
    let current = this.tail;
    let newTail = current;
    while (current.next) {
      this.tail = node;
      this.tail = node;
    }
    this.length--;
    return current;
  }
}

let linklist12 = new Linklist12();

console.log(linklist12.insert(12));
console.log(linklist12.insert(122));
console.log(linklist12.insert(1222));
linklist12.remove();
console.log(linklist12.insert(12222));
