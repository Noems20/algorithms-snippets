const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2'],
};

const graph2 = {
  1: ['2'],
  2: ['1', '8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2'],
};

const largestComponent = (graph) => {
  let largest = 0;
  // Set: linear lookup and insertion
  const visited = new Set(); // O(n) space

  for (let node in graph) {
    const newLength = traverse(graph, node, visited);
    if (newLength > largest) {
      largest = newLength;
    }
  }

  return largest;
};

// Depth First - Recursive
// O(e) time | O(n) space - Where e is the number of edges
const traverse = (graph, src, visited) => {
  if (visited.has(String(src))) return 0;
  visited.add(String(src));

  let count = 1;
  for (let neighbor of graph[src]) {
    count += traverse(graph, neighbor, visited);
  }

  return count;
};

console.log(largestComponent(graph));
console.log(largestComponent(graph2));
