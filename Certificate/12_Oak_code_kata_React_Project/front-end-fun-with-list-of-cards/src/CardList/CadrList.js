import React from "react";
import Card from "./Card";

function CadrList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card
          Image="https://picsum.photos/id/237/200/300"
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          link="#"
        />
      </div>
      <div className="col-sm-4">
        <Card
          Image="https://picsum.photos/id/2/420/1000"
          title="Where can I get some?"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          link="#"
        />
      </div>
      <div className="col-sm-4">
        <Card
          Image="https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fhn-images%2F1*mLBTwlihNj6U1eyEL46C5g.png&w=1920&q=75"
          title="Why do we use it?"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          link="#"
        />
      </div>
    </div>
  );
}

export default CadrList;
