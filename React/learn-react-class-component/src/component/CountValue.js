import React, { Component } from 'react';

class CountValue extends Component {
  constructor(props) {
    super(props);
    console.log('CountValue : constructor');
  }
  componentDidMount() {
    console.log('CountValue : componentDidMount');
  }
  // useEffect (()=>{},[])  เหมืน useEffect มี dependency Array

  componentDidUpdate() {
    console.log('CountValue : componentDidUpdate');
  }
  // useEffect (()=>{}) เหมืน useEffect ไม่มี dependency Array

  componentWillUnmount() {
    console.log('CountValue : componentWillUnmount');
  }
  //  เหมือนกับ

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
