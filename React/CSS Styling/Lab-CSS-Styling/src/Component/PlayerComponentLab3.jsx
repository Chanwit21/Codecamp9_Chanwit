import React from "react";
import "./PlayerComponentLab3.css";

function PlayerComponentLab3({ active, playerName, score }) {
  return (
    <div className={`player ${active ? "active" : ""}`}>
      <h1 className="player-name">{playerName}</h1>
      <h1 className="player-score">{score}</h1>
    </div>
  );
}

export default PlayerComponentLab3;
