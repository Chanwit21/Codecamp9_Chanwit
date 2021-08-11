import React, { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [square, setSquare] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [player, setPlayer] = useState("1");
  const [arrayToCheckWin, setArrayToCheckWin] = useState([]);
  const [checkWinStatus, setCheckWinStatus] = useState(false);
  const [statusIndexSame, setStatusIndexSame] = useState([]);

  console.log(arrayToCheckWin.filter(item => item.value === "O"));
  console.log(arrayToCheckWin.filter(item => item.value === "X"));

  function runId(list) {
    if (list.length !== 0) {
      return list[list.length - 1].id + 1;
    }
    return 1;
  }

  function handleClickXorO(index1, index2) {
    // console.log(index1);
    // console.log(index2);
    const newSquare = [...square];
    if (player === "1") {
      if (typeof newSquare[index1][index2] !== "string") {
        newSquare[index1][index2] = "X";
        setSquare(newSquare);
        setPlayer(currentPlayer => (currentPlayer === "1" ? "2" : "1"));
        const newArrayToCheckWin = [...arrayToCheckWin];
        setArrayToCheckWin([
          ...newArrayToCheckWin,
          {
            id: runId(arrayToCheckWin),
            index1: index1,
            index2: index2,
            value: newSquare[index1][index2],
          },
        ]);
        setCheckWinStatus(true);
      }
    } else {
      if (typeof newSquare[index1][index2] !== "string") {
        newSquare[index1][index2] = "O";
        setSquare(newSquare);
        setPlayer(currentPlayer => (currentPlayer === "1" ? "2" : "1"));
        const newArrayToCheckWin = [...arrayToCheckWin];
        setArrayToCheckWin([
          ...newArrayToCheckWin,
          {
            id: runId(arrayToCheckWin),
            index1: index1,
            index2: index2,
            value: newSquare[index1][index2],
          },
        ]);
        setCheckWinStatus(true);
      }
    }
    console.log(newSquare);
  }

  function RenderSquare({ index1, index2 }) {
    const index1Number = +index1;
    const index2Number = +index2;
    return (
      <td>
        <button onClick={() => handleClickXorO(index1Number, index2Number)}>
          {square[index1Number][index2Number]}
        </button>
      </td>
    );
  }

  return (
    <div className="tic-tac-toe-page">
      <h2>Player : {player}</h2>
      <table>
        <tbody>
          <tr>
            <RenderSquare index1="0" index2="0" />
            <RenderSquare index1="0" index2="1" />
            <RenderSquare index1="0" index2="2" />
          </tr>
          <tr>
            <RenderSquare index1="1" index2="0" />
            <RenderSquare index1="1" index2="1" />
            <RenderSquare index1="1" index2="2" />
          </tr>
          <tr>
            <RenderSquare index1="2" index2="0" />
            <RenderSquare index1="2" index2="1" />
            <RenderSquare index1="2" index2="2" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TicTacToe;
