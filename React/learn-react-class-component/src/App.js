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
  // constructor(props) {
  //   super(props);
  //   // #1 Deciare state
  //   this.state = { count: 0, error: '' };
  // }

  // #2 Deciare state
  state = {
    count: 0,
    error: '',
  };

  handleClickIncrement = () => {
    // มันจะทำการ Merge ค่าตรงนี้ไปกับค่าเดิม ไม่ได้เอาไปแทนค่า state เก่าไป
    this.setState({ count: this.state.count + 1 });
  };

  handleClickDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleClickReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Counter App</h1>
        <CountValue count={this.state.count} />
        {/* <h1>{this.state.count}</h1> */}
        <button onClick={this.handleClickIncrement}>+</button>
        <button onClick={this.handleClickDecrement}>-</button>
        <button onClick={this.handleClickReset}>reset</button>
      </div>
    );
  }
}

export default App;
