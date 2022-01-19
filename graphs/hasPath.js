const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

// Depth First - Recursive
// O(e) time | O(n) space - Where e is the number of edges
const hasPathDFSR = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathDFSR(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
};

// Depth First - Iterative
// O(e) time | O(n) space - Where e is the number of edges
const hasPathDFSI = (graph, src, dst) => {
  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

// Breadth First - Iterative
// O(e) time | O(n) space - Where e is the number of edges
const hasPathBFS = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

// console.log(hasPathDFSR(graph, 'f', 'k')); // true
// console.log(hasPathDFSR(graph, 'f', 'h')); // true
// console.log(hasPathDFSR(graph, 'j', 'f')); // false

console.log(hasPathDFSI(graph, 'f', 'k')); // true
console.log(hasPathDFSI(graph, 'f', 'h')); // true
console.log(hasPathDFSI(graph, 'j', 'f')); // false

// console.log(hasPathBFS(graph, 'f', 'k')); // true
// console.log(hasPathBFS(graph, 'f', 'h')); // true
// console.log(hasPathBFS(graph, 'j', 'f')); // false
