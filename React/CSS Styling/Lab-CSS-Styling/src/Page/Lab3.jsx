import React, { useState } from "react";
import "./Lab3.css";
import PlayerComponentLab3 from "../Component/PlayerComponentLab3";

function Lab3() {
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [randomNumber, setRandomNumber] = useState(1);
  const [roundScore, setRoundScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("Player1");
  const [winText, setWinText] = useState("");
  const [checkWin, setCheckWin] = useState(false);
  // เอาไว้ห้าม Click เมื่อจบเกมส์
  const [pointerEvent, setPoiterEvent] = useState("");

  function newGame() {
    setScorePlayer1(0);
    setScorePlayer2(0);
    setRandomNumber(1);
    setRoundScore(0);
    setWinText("");
    setPoiterEvent("");
  }

  function roll() {
    let random = Math.floor(Math.random() * 6) + 1;
    if (random !== 1) {
      setRandomNumber(random);
      setRoundScore(currentScore => currentScore + random);
    } else {
      setCurrentPlayer(currentPlayer =>
        currentPlayer === "Player1" ? "Player2" : "Player1"
      );
      setRandomNumber(1);
      setRoundScore(0);
    }
  }

  function keep() {
    const round_score = roundScore;
    currentPlayer === "Player1"
      ? setScorePlayer1(currentScore => currentScore + round_score)
      : setScorePlayer2(currentScore => currentScore + round_score);
    setCurrentPlayer(currentPlayer =>
      currentPlayer === "Player1" ? "Player2" : "Player1"
    );
    setRandomNumber(1);
    setRoundScore(0);
    setCheckWin(true);
  }

  if (checkWin) {
    let text = "";
    if (scorePlayer1 >= 100) {
      text = "Payer1 Win";
      setPoiterEvent("none");
    }
    if (scorePlayer2 >= 100) {
      text = "Payer2 Win";
      setPoiterEvent("none");
    }
    setWinText(text);
    setCheckWin(false);
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
            score={scorePlayer1}
            active={currentPlayer === "Player1" ? true : false}
          />
          <div className="game-control">
            <div className="row-button">
              <button
                className="btn btn-roll"
                style={{
                  pointerEvents: pointerEvent,
                }}
                onClick={() => roll()}
              >
                Roll
              </button>
              <button
                className="btn btn-keep"
                style={{
                  pointerEvents: pointerEvent,
                }}
                onClick={() => keep()}
              >
                Keep
              </button>
            </div>
            <div className="row-number">
              <h1>{randomNumber}</h1>
            </div>
            <h2>Round Score : {roundScore}</h2>
          </div>
          <PlayerComponentLab3
            playerName="Player 2"
            score={scorePlayer2}
            active={currentPlayer === "Player2" ? true : false}
          />
        </section>
        {winText ? (
          <section className="win-text">
            <h2>{winText}</h2>
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default Lab3;
