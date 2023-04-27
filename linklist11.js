class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist11 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
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

let linklist11 = new Linklist11();

console.log(linklist11.insert(440));
console.log(linklist11.insert(4400));
console.log(linklist11.insert(44000));
linklist11.remove();
console.log(linklist11.insert(440000));
console.log(linklist11.insert(4400000));
