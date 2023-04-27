class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist04 {
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
    if (!this.head) {
      return undefined;
    } else {
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
}

let linklist04= new Linklist04()

console.log(linklist04.insert(40));
console.log(linklist04.insert(400));
console.log(linklist04.insert(4000));
linklist04.remove()
console.log(linklist04.insert(40000));
