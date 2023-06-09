class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist02 {
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

let Linkedlist02 = new Linklist02()

console.log(Linkedlist02.insert(50));
console.log(Linkedlist02.insert(500));
Linkedlist02.remove();
console.log(Linkedlist02.insert(50));
