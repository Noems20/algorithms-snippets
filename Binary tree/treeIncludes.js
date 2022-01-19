class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

//     a
//    /  \
//   b    c
//  / \    \
// d   e    f

// Breadth First Search
const treeIncludesBFS = (node, target) => {
  if (!node) return false;
  const queue = [node];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};

// Depth First Search
const treeIncludesDFS = (node, target) => {
  if (!node) return false;
  const stack = [node];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.value === target) return true;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
};

// Depth First Search Recursive
const treeIncludesDFSR = (node, target) => {
  if (!node) return false;
  if (node.value === target) return true;

  return (
    treeIncludesDFSR(node.left, target) || treeIncludesDFSR(node.right, target)
  );
};

// console.log(treeIncludesBFS(root, 'a'));
// console.log(treeIncludesBFS(root, 'b'));
// console.log(treeIncludesBFS(root, 'f'));
// console.log(treeIncludesBFS(root, 'g'));
// console.log(treeIncludesBFS(root, 'h'));

// console.log(treeIncludesDFS(null, 'a'));
// console.log(treeIncludesDFS(root, 'a'));
// console.log(treeIncludesDFS(root, 'b'));
// console.log(treeIncludesDFS(root, 'f'));
// console.log(treeIncludesDFS(root, 'g'));
// console.log(treeIncludesDFS(root, 'h'));

console.log(treeIncludesDFSR(null, 'a'));
console.log(treeIncludesDFSR(root, 'a'));
console.log(treeIncludesDFSR(root, 'b'));
console.log(treeIncludesDFSR(root, 'f'));
console.log(treeIncludesDFSR(root, 'g'));
console.log(treeIncludesDFSR(root, 'h'));
