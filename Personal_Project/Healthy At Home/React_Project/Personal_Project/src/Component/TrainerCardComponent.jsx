import React from 'react'
import "./TrainerCardComponent.css"

function TrainerCardComponent(props) {
    return (
        <div>
            <div className="trainer-card">
            <div
                  className="trainer-pic"
                  style={{
                    backgroundImage: `url(${props.pathOfImg})`
                  }}>
                </div>
                <div className="text-in-trainer-card">
                  <h1>{props.nickName}</h1>
                  <p>{props.Fullname}</p>
                </div>
            </div>
        </div>
    )
}

export default TrainerCardComponent
