class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(2);
const e = new Node(4);
const f = new Node(1);

root.left = b;
root.right = c;
b.left = e;
b.right = d;
c.right = f;

//      3
//    /  \
//   11   4
//  /  \   \
// 4    2   1

// Recursive solution
// O(n) time | O(d) space - where d is the length of the longest branch
// O(n) space - worst case (If tree is like a linked list)
const treeSumR = (node) => {
  if (!node) return 0;
  return node.value + treeSumR(node.left) + treeSumR(node.right);
};

// Iterative solution - Depth First
// O(n) time | O(n) space
const treeSumDFS = (node) => {
  if (!node) return 0;
  let sum = 0;
  const stack = [node];

  while (stack.length > 0) {
    const current = stack.pop();
    sum += current.value;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
};

// Iterative solution - Breadth First
// O(n) time | O(d) space
const treeSumBFS = (node) => {
  if (!node) return 0;
  let sum = 0;
  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
};

console.log(treeSumDFS(root));
console.log(treeSumBFS(root));
console.log(treeSumR(root));
