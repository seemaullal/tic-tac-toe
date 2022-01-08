import React from "react";
import Square from "./Square";

export default function TicTacToe(props) {
  return (
    <div className="board">
      <Square value={""} onClick={() => console.log("you clicked me")} />
      <Square value={""} onClick={() => console.log("you clicked me")} />
      <Square value={""} onClick={() => console.log("you clicked me")} />
      <Square value={""} onClick={() => console.log("you clicked me")} />
      <Square value={""} onClick={() => console.log("you clicked me")} />
      <Square value={""} onClick={() => console.log("you clicked me")} />
      <Square value={""} onClick={() => console.log("you clicked me")} />
      <Square value={""} onClick={() => console.log("you clicked me")} />
      <Square value={""} onClick={() => console.log("you clicked me")} />
    </div>
  );
}
