class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist03 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
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


let linklist03= new Linklist03()

console.log(linklist03.insert(20));
console.log(linklist03.insert(200));
console.log(linklist03.insert(2000));
linklist03.remove()
console.log(linklist03.insert(20000));