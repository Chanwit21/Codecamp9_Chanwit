import React from "react";
import "./ServiceProgramOddRowComponent.css";

function ServiceProgramOddRowComponent(props) {
  return (
    <div>
      <div className="service-cardOdd">
        <div className="content-in-servicecardOdd">
          <div className="text-content-in-servicecardOdd">
            <h1>{props.courseName}</h1>
            <p>{props.content}</p>
            <button>Join Now</button>
            <p className="price-in-service-cardOdd">Price : {props.Price}</p>
          </div>
        </div>
        <div
          className="img-in-servicecardOdd"
          style={{ backgroundImage: `url(${props.imgPath})` }}
        ></div>
      </div>
    </div>
  );
}

export default ServiceProgramOddRowComponent;
