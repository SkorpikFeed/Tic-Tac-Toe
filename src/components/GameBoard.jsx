// import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((gameBoard) => {
  //     const updatedBoard = [...gameBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activeSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
