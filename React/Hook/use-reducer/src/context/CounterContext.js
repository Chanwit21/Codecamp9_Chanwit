import { createContext, useContext, useReducer } from 'react';

const CountContext = createContext();

const INITIAL_STATE = { count: 0 };
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return state.count > 0 ? { ...state, count: state.count - 1 } : state;
    case 'STEP':
      return { ...state, count: state.count + action.payload.step };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

function CountProvider(props) {
  const [state, dispatch] = useReducer(countReducer, INITIAL_STATE);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CountContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountContext);
  // เขียนดักในกรณีที่ เรียกใช้ useCount นอก Scope ของ Provider
  if (!context) throw new Error('useCount must be use within countProvider');
  return context;
}

export { CountProvider, useCount };
