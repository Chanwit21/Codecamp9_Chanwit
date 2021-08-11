const friendList = ["Jay", "Bam", "Boy"];
const rootElement = document.querySelector("#root");
const element = (
  <div>
    <h1>Hello My Friend</h1>
    <p>Friend List</p>
    <ul>
      {friendList.map((item) => (
        <li>{item}</li>
      ))}
      {/* <li>Jay</li>
            <li>Bam</li>
            <li>Boy</li>  */}
    </ul>
  </div>
);
ReactDOM.render(element, rootElement);
