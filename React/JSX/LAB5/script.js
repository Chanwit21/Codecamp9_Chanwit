// โค้ดด้านล่างทำงานได้หรือไม่ เพราะอะไร


  const element = (
    <div>
      <span>My name is John.</span>
      <br>                            
      <span>I'm 27 years old.</span>
    </div>
  );

const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);

{/* ไม่ได้เพราะว่า ไม่มี / ปิดตรง tag br */}