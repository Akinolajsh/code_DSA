class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist07 {
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
  }
}

let linklist07= new Linklist07()

console.log(linklist07.insert(40));
console.log(linklist07.insert(400));
console.log(linklist07.insert(4000));
linklist07.remove()
console.log(linklist07.insert(40000));

