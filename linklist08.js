class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist08 {
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

let linklist08= new Linklist08()

console.log(linklist08.insert(80));
console.log(linklist08.insert(800));
console.log(linklist08.insert(8000));
linklist08.remove()
console.log(linklist08.insert(80000));
console.log(linklist08.insert(800000));

