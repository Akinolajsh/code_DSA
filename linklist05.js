class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist05 {
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
      this.tail.next = null;
    }
    this.length--;
    return current;
  }
}

let linklist05 = new Linklist05();

console.log(linklist05.insert(50));
console.log(linklist05.insert(500));
console.log(linklist05.insert(5000));
linklist05.remove();
console.log(linklist05.insert(50000));
