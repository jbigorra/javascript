const { describe, it, expect } = require("@jest/globals")
const { createGrid } = require("./GameOfLife")

/**

The world is a two dimensions array. Each cell of the array represents a cell.

If the value is 0 the cell is dead, and if the value is 1 the cell is alive.

The cell interacts with all his 8 neighbours.

In each generation the rules of life are the following:

If the cell is alive and has 0 or 1 alive neighbours, then the cell dies
If the cell is alive and has 2 or 3 alive neighbours, then the cell lives
If the cell is alive and had 4 or more alive neighbours, then the cell dies
If the cell is dead and has 3 alive neighbours, then the cell becomes alive.
 *
 */

/**
 * 1. Create grid given a number
 * 2. Cell is alive or dead
 * 3.
 *
 */

describe("GameOfLife", () => {
  it.each([
    [2, [
      [0, 0],
      [0 ,0],
    ]],
    [3, [
      [0, 0, 0],
      [0 ,0 ,0],
      [0 ,0 ,0],
    ]],
    [5, [
      [0, 0, 0, 0, 0],
      [0 ,0 ,0, 0, 0],
      [0 ,0 ,0, 0, 0],
      [0 ,0 ,0, 0, 0],
      [0 ,0 ,0, 0, 0],
    ]],
  ])("should create the world (grid) of %i x %i dimensions", (dimensions, expectGrid) => {
    // when
    const grid = createGrid(dimensions)

    // then
    expect(grid).toStrictEqual(expectGrid)
  })

  // it("should initialize the world (grid) with living cells", () => {


  //   expect(worldInitilized).toStrictEqual([
  //     [0, 0, 0],
  //     [0 ,0 ,0],
  //     [0 ,0 ,0],
  //     [0 ,0 ,1],
  //   ])
  // })
})
