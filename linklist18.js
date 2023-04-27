class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist18 {
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
    return this;
  }
}

let linklist18 = new Linklist18();

console.log(linklist18.insert(8));
linklist18.remove();
console.log(linklist18.insert(88));
console.log(linklist18.insert(888));
console.log(linklist18.insert(8888));

console.log(linklist18.insert(88888));
