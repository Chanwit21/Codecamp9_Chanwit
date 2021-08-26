import './App.css';
import React, { Component } from 'react';
import CountValue from './component/CountValue';

// function App() {
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h1>0</h1>
//       <button>+</button>
//       <button>-</button>
//       <button>reset</button>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    // #1 Deciare state
    this.state = { count: 0, error: '', showCount: false };
    // this.handleClickReset = this.handleClickReset.bind(this); solution2 fix Lost this
    console.log('App : constructor');
  }

  // // #2 Deciare state
  // state = {
  //   count: 0,
  //   error: '',
  // };

  componentDidMount() {
    console.log('App : ComponentDidMount');
  }
  // useEffect (()=>{},[])  เหมืน useEffect มี dependency Array

  componentDidUpdate() {
    console.log('App : componentDidUpdate');
  }
  // useEffect (()=>{}) เหมืน useEffect ไม่มี dependency Array

  handleClickIncrement = () => {
    // มันจะทำการ Merge ค่าตรงนี้ไปกับค่าเดิม ไม่ได้เอาไปแทนค่า state เก่าไป
    // ควรใช้ในรูปแบบ Callback
    this.setState(current => ({ count: current.count + 1 }));
    console.log(this);
  };

  handleClickDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  // handleClickReset = () => {
  //   this.setState({ count: 0 });
  // };

  handleClickReset() {
    console.log(this);
  }

  render() {
    console.log('App : render');
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Counter App</h1>
        {this.state.showCount && <CountValue count={this.state.count} />}
        {/* <h1>{this.state.count}</h1> */}
        <button onClick={this.handleClickIncrement}>+</button>
        <button onClick={this.handleClickDecrement}>-</button>
        <button onClick={this.handleClickReset}>reset</button>
        {/* <button onClick={() => this.handleClickReset()}>reset</button> solution1 fix Lost of this */}
        <button
          onClick={() =>
            this.setState(current => ({
              showCount: !current.showCount,
            }))
          }
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
