import React, { useState } from 'react';
import { useCount } from '../context/CounterContext';

function Button() {
  const context = useCount();
  const { dispatch } = context;
  const [step, setStep] = useState(0);

  return (
    <>
      <input type="number" onChange={e => setStep(+e.target.value)} />
      <button
        onClick={() => dispatch({ type: 'STEP', payload: { step: step } })}
      >
        Step
      </button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </>
  );
}

export default Button;
