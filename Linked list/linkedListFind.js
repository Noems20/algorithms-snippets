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

// Linked List Find - iterative
// O(n) time | O(1) space
const linkedListFind = (head, target) => {
  let current = head;
  while (current) {
    if (current.value === target) return true;
    current = current.next;
  }

  return false;
};

// Linked List Find - Recursive
// O(n) time | O(n) space
const linkedListFindR = (head, target) => {
  if (!head) return false;
  if (head.value === target) return true;
  return linkedListFindR(head.next, target);
};

console.log(linkedListFind(a, 'F'));
console.log(linkedListFindR(a, 'F'));
