import React from 'react';
// import { useReducer, useState } from 'react';
import './App.css';
import Button from './component/Button';
import Text from './component/Text';
import { CountProvider } from './context/CounterContext';

// Action INCREMENT /DECREMENT/ RESET / STEP
// dispatch({ type: 'INCREMENT' });
// state :{count:0}
// const INITIAL_STATE = { count: 0, step: 0 };
// // reducerFunction
// const countReducer = (state, action) => {
//   // มักใช้ Switch Case
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       if (state.count > 0) {
//         return { ...state, count: state.count - 1 };
//       }
//       return state;
//     case 'RESET':
//       return { ...state, count: 0 };
//     case 'STEP':
//       return { ...state, count: state.count + action.payload.step };
//     default:
//       return state;
//   }

// if (action.type === 'INCREMENT') {
//   // แบบยาว
//   const cloneState = { ...state };
//   cloneState.count = state.count + 1;
//   return cloneState;
//   //  แบบสั้น
//   // return { ...state, count: state.count + 1 };
// } else if (action.type === 'DECREMENT') {
//   if (state.count > 0) {
//     return { ...state, count: state.count - 1 };
//   }
//   return state;
// } else if (action.type === 'RESET') {
//   return { ...state, count: 0 };
// } else {
//   //  ถ้าไม่เข้าเงื่อนไขใดๆเลย ให้ใช้ state เดิม
//   return state;
// }
// };

// function App() {
//   const [state, dispatch] = useReducer(countReducer, INITIAL_STATE);
//   const [step, setStep] = useState(0);

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <input type="number" onChange={e => setStep(+e.target.value)} />
//       <h1>{state.count}</h1>
//       <button
//         onClick={() => dispatch({ type: 'STEP', payload: { step: step } })}
//       >
//         Step
//       </button>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
//     </div>
//   );
// }

function App() {
  return (
    <CountProvider>
      <div style={{ textAlign: 'center' }}>
        <Text />
        <Button />
      </div>
    </CountProvider>
  );
}

export default App;
