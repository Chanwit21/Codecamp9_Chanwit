import React, { useState } from "react";
import "./Lab3.css";
import PlayerComponentLab3 from "../Component/PlayerComponentLab3";

function Lab3() {
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [rollStatus, setRollStatus] = useState(false);

  function newGame() {
    setScorePlayer1(0);
    setScorePlayer2(0);
    setRandomNumber(0);
    setRoundScore(0);
    setRollStatus(false);
  }

  if (rollStatus) {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 7);
      setRandomNumber(random);
    }, 1);
  }

  function roll() {
    setRollStatus(true);
  }

  function keep() {
    setRollStatus(false);
  }

  return (
    <div className="App">
      <div className="lab3">
        <nav>
          <button className="btn btn-newGame" onClick={() => newGame()}>
            New game
          </button>
        </nav>
        <section className="game">
          <PlayerComponentLab3
            playerName="Player 1"
            score={"0"}
            backgroundColor="pink"
          />
          <div className="game-control">
            <div className="row-button">
              <button className="btn btn-roll" onClick={() => roll()}>
                Roll
              </button>
              <button className="btn btn-keep" onClick={() => keep()}>
                Keep
              </button>
            </div>
            <div className="row-number">
              <h1>{randomNumber}</h1>
            </div>
            <h2>Round Score : 0</h2>
          </div>
          <PlayerComponentLab3
            playerName="Player 2"
            score={"1"}
            backgroundColor="white"
          />
        </section>
      </div>
    </div>
  );
}

export default Lab3;
