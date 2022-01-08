import React from "react";

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every((value) => value === "X" || value === "O")
    ? `Tie!`
    : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
  const xSquaresCount = squares.filter((r) => r === "X").length;
  const oSquaresCount = squares.filter((r) => r === "O").length;
  return oSquaresCount === xSquaresCount ? "X" : "O";
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
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

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {board[i]}
      </button>
    );
  }

  return (
    <>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
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
