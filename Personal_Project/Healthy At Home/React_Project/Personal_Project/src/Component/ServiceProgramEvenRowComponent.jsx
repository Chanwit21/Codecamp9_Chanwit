import React from 'react'
import './ServiceProgramEvenRowComponent.css'

function ServiceProgramEvenRowComponent(props) {
    return (
        <div>
            <div className="service-cardEven">
            <div
          className="img-in-servicecardEven"
          style={{ backgroundImage: `url(${props.imgPath})` }}
        ></div>
        <div className="content-in-servicecardEven">
          <div className="text-content-in-servicecardEven">
            <h1>{props.courseName}</h1>
            <p>{props.content}</p>
            <button>Join Now</button>
            <p className="price-in-service-cardEven">Price : {props.Price}</p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default ServiceProgramEvenRowComponent
