function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <h1>React Playground Local</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
