// โค้ดในบรรทัดที่มี * ให้ผลลัพธ์เป็นอะไรและเพราะอะไร

function Car(props) {
  console.log(props.brand); // *                  //log Honda
  console.log(props.price); // **                 //log 1000000
  console.log(props.color); // ***                //log undefined
  return <div>Car</div>;u
}
const rootElement = document.querySelector("#root");
ReactDOM.render(<Car brand="Honda" price="1000000" />, rootElement);
