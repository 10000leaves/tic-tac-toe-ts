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
  value: string;
  hoge?: number; // 無くてもエラーにならない
}

function Square() {
  const [value, setValue] = useState<string>("");
  function handleClick() {
    // alert("clicked!");
    setValue("X")
  }

  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default function Board() {
  return(
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}