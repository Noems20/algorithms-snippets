class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;

// 2 -> 8 -> 3 -> 7 -> NULL

// Linked List Values - iterative
// O(n) time | O(1) space
const linkedListSum = (head) => {
  let current = head;
  let sum = 0;
  while (current) {
    sum += current.value;
    current = current.next;
  }

  return sum;
};

// Linked List Values - Recursive
// O(n) time | O(n) space
const linkedListSumR = (head, sum = 0) => {
  if (!head) return sum;
  sum += head.value;
  return linkedListSumR(head.next, sum);
};

// Linked List Values - Recursive 2
// O(n) time | O(n) space
const linkedListSumR2 = (head) => {
  if (!head) return 0;
  return head.value + linkedListSumR(head.next);
};

console.log(linkedListSum(a));
console.log(linkedListSumR(a));
console.log(linkedListSumR2(a));
