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

// D -> C -> B -> A -> NULL
// Reverse Linked List - iterative
// O(n) time | O(1) space
const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

// Reverse Linked List - Recursive
// O(n) time | O(n) space
const reverseLinkedListR = (head, prev = null) => {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverseLinkedListR(next, head);
};

// console.log(reverseLinkedList(a));
// console.log(d.next);
console.log(reverseLinkedListR(a));
console.log(d.next);
