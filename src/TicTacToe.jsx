import React from "react";

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every((value) => value === "X" || value === "O")
    ? `Tie!`
    : `Next player: ${nextValue}`;
}

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function calculateNextValue(squares) {
  const xSquaresCount = squares.filter((r) => r === "X").length;
  const oSquaresCount = squares.filter((r) => r === "O").length;
  return oSquaresCount === xSquaresCount ? "X" : "O";
}

function calculateWinner(board) {
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningMoves.length; i++) {
    const [index1, index2, index3] = winningMoves[i];
    if (board[index1] && board[index1] === board[index2] && board[index1] === board[index3]) {
      return board[index1];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = React.useState(Array(9).fill(null));

  const winner = calculateWinner(board);
  const nextValue = calculateNextValue(board);
  const status = calculateStatus(winner, board, nextValue);

  function restart() {
    setBoard(Array(9).fill(null));
  }

  function selectSquare(squareIndex) {
    console.log("in select square", squareIndex);
    if (winner || board[squareIndex] != null) {
      return;
    }
    setBoard((currentBoard) => {
      const updatedBoard = [...currentBoard];
      updatedBoard[squareIndex] = nextValue;
      return updatedBoard;
    });
  }

  return (
    <>
      <div className="board">
        <Square value={board[0]} onClick={() => selectSquare(0)} />
        <Square value={board[1]} onClick={() => selectSquare(1)} />
        <Square value={board[2]} onClick={() => selectSquare(2)} />
        <Square value={board[3]} onClick={() => selectSquare(3)} />
        <Square value={board[4]} onClick={() => selectSquare(4)} />
        <Square value={board[5]} onClick={() => selectSquare(5)} />
        <Square value={board[6]} onClick={() => selectSquare(6)} />
        <Square value={board[7]} onClick={() => selectSquare(7)} />
        <Square value={board[8]} onClick={() => selectSquare(8)} />
      </div>
      <div className="game-info">
        <button className="restart" onClick={restart}>
          restart
        </button>
        <div>{status}</div>
      </div>
    </>
  );
}
