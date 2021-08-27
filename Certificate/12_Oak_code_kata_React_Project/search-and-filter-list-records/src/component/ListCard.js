import React from 'react';

function ListCard({ list }) {
  console.log(list);
  const { City, Name, Rating, Ranking } = list;
  const Reviews = list['Number of Reviews'];
  const cuisines = list['Cuisine Style'].map((item, index) => {
    return (
      <p
        className="card-text m-1 border text-center"
        style={{ fontSize: '1rem' }}
        key={index}
      >
        {item}
      </p>
    );
  });
  return (
    <div
      className="card border-success mb-3 hover-shadow"
      style={{ maxWidth: '18rem', minWidth: '18rem' }}
    >
      <div className="card-header border-success d-flex justify-content-between">
        <p className="m-0 p-0">{City}</p>
        <p className="m-0" style={{ fontSize: '1rem' }}>
          Ranking : {Ranking}
        </p>
      </div>
      <div className="card-body text-success">
        <h5 className="card-title">{Name}</h5>
        {cuisines}
      </div>
      <div className="card-footer border-success d-flex justify-content-evenly hover-text">
        <p className="m-0" style={{ fontSize: '1rem' }}>
          Reviews : {Reviews}
        </p>
        <p className="m-0" style={{ fontSize: '1rem' }}>
          Rating : {Rating}
        </p>
      </div>
    </div>
  );
}

export default ListCard;
