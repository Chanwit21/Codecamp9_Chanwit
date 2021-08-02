import React from "react";
import "./PlayerComponentLab3.css";

function PlayerComponentLab3(props) {
  return (
    <div className={`player ${props.active ? "active" : ""}`}>
      <h1 className="player-name">{props.playerName}</h1>
      <h1 className="player-score">{props.score}</h1>
    </div>
  );
}

export default PlayerComponentLab3;
