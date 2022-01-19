class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

// Traverse Linked List - iterative
const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

// Traverse Linked List - Recursive
const printLinkedListR = (head) => {
  if (!head) return;
  console.log(head.value);
  printLinkedListR(head.next);
};

printLinkedList(a);
printLinkedListR(a);
