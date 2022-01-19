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
const maxRootToLeaf = (node) => {
  if (!node) return -Infinity;
  if (!node.left && !node.right) return node.value;
  const maxPath = Math.max(maxRootToLeaf(node.left), maxRootToLeaf(node.right));
  //   console.log(maxPath);
  return node.value + maxPath;
};

console.log(maxRootToLeaf(root));
