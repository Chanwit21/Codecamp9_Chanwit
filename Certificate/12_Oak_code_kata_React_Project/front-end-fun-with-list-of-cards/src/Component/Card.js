import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.imgLink} alt="cap img" />
      <h3 className="card-title">{props.title}</h3>
      <p className="card-text">{props.description}</p>
      <a href={props.link} className="btn-inCard">
        Learn more
      </a>
    </div>
  );
}

export default Card;
