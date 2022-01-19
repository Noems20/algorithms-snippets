const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};

const connectedComponents = (graph) => {
  let count = 0;
  // Because we call traverse multiple times we need to have
  // a goblal visited set to keep the visited nodes for all
  // traverse calls
  const visited = new Set();
  // Traverse to object keys
  for (let node in graph) {
    count += traverse(graph, node, visited);
    // WRONG: The code below will reset the set every traverse call
    // count += traverse(graph, node, new Set());
  }
  return count;
};

// Depth First - Recursive
// O(e) time | O(n) space - Where e is the number of edges
const traverse = (graph, src, visited) => {
  if (visited.has(String(src))) return 0;
  visited.add(String(src));
  console.log(src);

  for (let neighbor of graph[src]) {
    traverse(graph, neighbor, visited);
  }

  return 1;
};

console.log(connectedComponents(graph));
