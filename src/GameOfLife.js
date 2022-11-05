/**
 *
 * @param {number} dimensions
 */
function createGrid(dimensions) {
  const grid = []
  for (let i = 0; i < dimensions; i++) {
    grid[i] = []
    for (let j = 0; j < dimensions; j++) {
      grid[i][j] = 0
    }
  }

  return grid
}

module.exports = {
  createGrid
}
