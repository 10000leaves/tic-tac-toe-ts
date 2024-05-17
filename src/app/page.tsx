"use client"

import { useState } from "react";

// やること
/*
 * npx create-next-app
 *
 * √ What is your project named? ... 名前をつける
 * √ Would you like to use TypeScript? ... No / Yes ☜ Yes
 * √ Would you like to use ESLint? ... No / Yes ☜ No
 * √ Would you like to use Tailwind CSS? ... No / Yes ☜ No
 * √ Would you like to use `src/` directory? ... No / Yes ☜ Yes
 * √ Would you like to use App Router? (recommended) ... No / Yes ☜ Yes
 * √ Would you like to customize the default import alias? ... No / Yes ☜ Yes
 * 
 * Next.jsのファイルをルートに移動
 * 作成したprojectのフォルダを消す
 * 
 * pageのcssを消す
 * globals.cssを上書き
 * page.tsxを書き換える
 * 
 * npm run dev
 */


interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares: (string | null)[]): string | null {
  const lines: number[][] = [
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

export default function Board() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));

  const handleClick = (i: number): void => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares: (string | null)[] = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner: string | null = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
