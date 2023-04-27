class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Linklist14 {
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
  
  let linklist14 = new Linklist14();
  
  console.log(linklist14.insert(11));
  console.log(linklist14.insert(22));
  console.log(linklist14.insert(33));
  linklist14.remove();
  console.log(linklist14.insert(44));
  console.log(linklist14.insert(55));
  