class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(5);
const b = new Node(11);
const c = new Node(4);
const d = new Node(15);
const e = new Node(3);
const f = new Node(12);

root.left = b;
root.right = c;
b.left = e;
b.right = d;
c.right = f;

//      5
//    /  \
//   11   3
//  /  \   \
// 4   15   12

// Recursive solution
// O(n) time | O(d) space - where d is the length of the longest branch
// O(n) space - worst case (If tree is like a linked list)
const treeMinR = (node) => {
  if (!node) return Infinity;
  return Math.min(node.value, treeMinR(node.left), treeMinR(node.right));
};

// Iterative solution - Depth First
// O(n) time | O(n) space
const treeMinDFS = (node) => {
  let min = Infinity;
  const stack = [node];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.value < min) min = current.value;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return min;
};

// Iterative solution - Breadth First
// O(n) time | O(n) space
const treeMinBFS = (node) => {
  let min = Infinity;
  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value < min) min = current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return min;
};

console.log(treeMinR(root));
console.log(treeMinDFS(root));
console.log(treeMinBFS(root));
