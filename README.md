The world is a two dimensions array. Each cell of the array represents a cell.

If the value is 0 the cell is dead, and if the value is 1 the cell is alive.

The cell interacts with all his 8 neighbours.

In each generation the rules of life are the following:

If the cell is alive and has 0 or 1 alive neighbours, then the cell dies
If the cell is alive and has 2 or 3 alive neighbours, then the cell lives
If the cell is alive and had 4 or more alive neighbours, then the cell dies
If the cell is dead and has 3 alive neighbours, then the cell becomes alive.
