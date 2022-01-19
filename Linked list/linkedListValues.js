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

// Linked List Values - iterative
// O(n) time | O(n) space
const linkedListValues = (head) => {
  let current = head;
  const result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }

  return result;
};

// Linked List Values - Recursive
// O(n) time | O(n) space
const linkedListValuesR = (head, result = []) => {
  if (!head) return result;
  result.push(head.value);
  return linkedListValuesR(head.next, result);
};

// Alvin - Linked List Values - Recursive
// O(n) time | O(n) space
const linkedListValuesR2 = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (!head) return;
  values.push(head.value);
  return fillValues(head.next, values);
};

console.log(linkedListValues(a));
console.log(linkedListValuesR(a));
console.log(linkedListValuesR2(a));
