class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist15 {
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

let linklist15 = new Linklist15();

console.log(linklist15.insert(55));
console.log(linklist15.insert(55));
console.log(linklist15.insert(55));
linklist15.remove();
console.log(linklist15.insert(55));
