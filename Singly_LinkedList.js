//the node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//Linked List class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    this.head = new Node(data, this.head);
  }
}

let list = new LinkedList();
list.insert(5);
list.insert(6);
console.log(list);
