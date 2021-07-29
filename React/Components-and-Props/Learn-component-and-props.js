function Greeting(props) {  //ขึ้นต้นเป็นพิมใหญ่เพราะจะได้รู้ว่าเป็น Component ไม่ใช่ Element Tag และต้อง return เป็น JSX  Props ที่รับเข้ามาเป็น Obj เสมอ ห้าม Re assignProps มันทำไม่ได้
    // console.log(props)
  return (
    <div class="greeting">
      <p>Hello {props.name}, My email is {props.user.email}</p>
    </div>
  );
}

const user = {
    name: 'John',
    email: 'john.d@gmail.com'
}
const element = (
  <div>
    <h1>Welcome My Friend</h1>
    <Greeting name='Bomb' user={user}/>
    <Greeting name='Ploy' user={{email: "ploy.ts@gmail.com"}} />
    <Greeting name='Pare' user={{}} />
    {/* <Greeting name="John" age='27'/> */}
    {/* <Greeting name="Jack" />
    <Greeting name="Jane" /> */}
    {/* {Greeting({ name: "John"})}
    {Greeting({ name: "Jack"})}
    {Greeting({ name: "Jane"})} */}
  </div>
);

const rootElement = document.getElementById('root')
ReactDOM.render(element,rootElement)
