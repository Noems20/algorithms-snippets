// Depth First - Iterative
const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

// Depth First -  Recursive
const depthFirstPrintR = (graph, source) => {
  console.log(source);
  // Since we can have a case like graph[source] = []
  // this will skip the for loop and we won't call the function recursively
  // that is like the base case
  for (let neighbor of graph[source]) {
    depthFirstPrintR(graph, neighbor);
  }
};

const graph = {
  a: ['b', 'c'], //acebdf -> Iterative, abdfce -> Recursive
  //   a: ['c', 'b'], //  abdfce -> Iterative, acebdf -> Recursive
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

// depthFirstPrint(graph, 'a');
depthFirstPrintR(graph, 'a'); // Order of print will be inverted
