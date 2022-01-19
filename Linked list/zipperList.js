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
const e = new Node('E');
const f = new Node('F');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// A -> B -> C -> D -> E -> F -> NULL

const q = new Node('Q');
const r = new Node('R');

q.next = r;

// Q -> R -> NULL

// A -> Q -> B -> R -> C -> D -> E -> F -> NULL
// Zipper lists - Iterative
// O(min(n , m)) time | O(1) space
const zipperList = (head1, head2) => {
  let tail = head1;
  let currentOne = head1.next;
  let currentTwo = head2;
  let count = 0;

  while (currentOne && currentTwo) {
    if (count % 2 === 0) {
      tail.next = currentTwo;
      currentTwo = currentTwo.next;
    } else {
      tail.next = currentOne;
      currentOne = currentOne.next;
    }
    tail = tail.next;
    count++;
  }

  if (currentOne === null) tail.next = currentTwo;
  if (currentTwo === null) tail.next = currentOne;

  return head1;
};

// Zipper lists - Recursive
// O(min(n , m)) time | O(min(n , m)) space
const zipperListR = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;

  head2.next = zipperListR(next1, next2);

  return head1;
};

const linkedListValues = (head) => {
  let current = head;
  const result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }

  return result;
};

// zipperList(a, q);
zipperListR(a, q);
console.log(linkedListValues(a));
