class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist13 {
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
    while (current.tail) {
      this.tail = newTail;
      this.tail = null;
    }

    this.length--;
    return this;
  }
}

let linklist13 = new Linklist13();

console.log(linklist13.insert(13));
console.log(linklist13.insert(133));
console.log(linklist13.insert(1333));
console.log(linklist13.insert(13333));
linklist13.remove();
console.log(linklist13.insert(133333));
