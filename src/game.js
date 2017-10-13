const Board = require('./board.js');

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex)
    if(this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game OVER!')
      this._board.print();
    } else if(this._board.hasSafeTiles() === false) {
      console.log('YOU WON!');
    } else {
      console.log('Current Board:')
      this._board.print();
    }
  }
}

let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
