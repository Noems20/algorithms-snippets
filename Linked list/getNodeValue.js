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

// Get Node Value - iterative
// O(n) time | O(1) space
const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current) {
    if (count === index) return current.value;
    count++;
    current = current.next;
  }

  return null;
};

// Get Node Value - Recursive
// O(n) time | O(n) space
const getNodeValueR = (head, index) => {
  if (!head) return null;
  if (index === 0) return head.value;
  return getNodeValueR(head.next, index - 1);
};

console.log(getNodeValue(a, 0));
console.log(getNodeValueR(a, 0));
console.log(getNodeValue(a, 2));
console.log(getNodeValueR(a, 2));
