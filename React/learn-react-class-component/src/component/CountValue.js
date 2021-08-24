import React, { Component } from 'react';

class CountValue extends Component {
  render() {
    //   เวลาจะ Destructure props หรือเรียกใช้ Props ต้องอยู่ภายใต้ render function
    const {
      props: { count },
    } = this;
    return (
      <>
        <h1>{count}</h1>
      </>
    );
  }
}

export default CountValue;
