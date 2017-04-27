# Tic-tac-toe

#### _Multiplayer game of tic-tac-toe, 1/26/17_

#### By **Dylan Stackhouse & Jennifer Beem**

## Description

A board game between two players competing to fill three sequential spaces in a 3 x 3 grid.

## Specifications:
1. Program will display a clickable 3 x 3 grid.
  ** *Input: Load page* **
  ** *Output: 3 x 3 grid* **
2. Program displays a symbol when space in grid is clicked on.
  ** *Input: user clicks space [1,1]* **
  ** *Output: [1,1] = X* **
3. Program switches players & symbol (X or O) after each click.
  ** *Input: Player 1 clicks* **
  ** *Output: Player 2's turn* **
4. Program will not allow a player to overwrite the other's move.
  ** *Input: 1-1:X.click(O)* **
  ** *Output: alert("space occupied, try again")* **
5. Program checks if three sequentially adjacent spaces are occupied by the same symbol.
  ** *Input: [1,1][1,2][1,3] all filled with X symbol* **
  ** *Output: Victory for X!* **
6. Program will not allow further input after victory has been determined.
  ** *Input: [1,1].click()* **
  ** *Output: ""* **
7. Add button to restart game with a fresh board.
    ** *Input: [1,1]..[3,3] == x, restart()* **
    ** *Output: [1,1]..[3,3] == ""* **
8. Allow players to play multiple games to determine a winner

## Setup/Installation Requirements

Clone the git repository and open index.html in any web browser.

## Technologies Used

Html, CSS, JavaScript, JQuery

### License
Licensed under the MIT license.

Copyright (c) 2017 **Dylan Stackhouse & Jennifer Beem**
