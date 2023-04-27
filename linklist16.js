class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist16 {
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

let linklist16 = new Linklist16();

console.log(linklist16.insert(650));
console.log(linklist16.insert(660));
console.log(linklist16.insert(670));
linklist16.remove();
console.log(linklist16.insert(680));
