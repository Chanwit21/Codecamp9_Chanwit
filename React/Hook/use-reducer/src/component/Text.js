import React from 'react';
import { useCount } from '../context/CounterContext';

function Text() {
  const context = useCount();
  const {
    state: { count },
  } = context;
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default Text;
