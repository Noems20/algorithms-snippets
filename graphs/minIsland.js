const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

// O(rc) time | O(rc) space
const minimumIsland = (grid) => {
  const visited = new Set(); // O(rc) space
  let min = Infinity;
  // O(rc) time
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const newSize = explore(grid, row, col, visited);
      if (newSize > 0 && newSize < min) min = newSize;
    }
  }

  return min;
};

// Depth first
const explore = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;
  if (grid[row][col] === 'W') return 0;

  const pos = row + ',' + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);
  let size = 1;

  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row, col - 1, visited);
  size += explore(grid, row, col + 1, visited);
  return size;
};

console.log(minimumIsland(grid)); // -> 2
