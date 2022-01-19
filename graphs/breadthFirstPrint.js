// Breadth First - Iterative
const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

const graph = {
  a: ['b', 'c'], // abcdef
  //   a: ['c', 'b'], // acbedf
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

breadthFirstPrint(graph, 'a');
