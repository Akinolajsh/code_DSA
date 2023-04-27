class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist10 {
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

let linklist10 = new Linklist10();

console.log(linklist10.insert(1));
console.log(linklist10.insert(11));
console.log(linklist10.insert(111));
linklist10.remove();
console.log(linklist10.insert(1111));
console.log(linklist10.insert(11111));
