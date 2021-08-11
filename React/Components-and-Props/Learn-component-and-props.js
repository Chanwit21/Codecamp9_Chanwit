// function Greeting(props) {  //ขึ้นต้นเป็นพิมใหญ่เพราะจะได้รู้ว่าเป็น Component ไม่ใช่ Element Tag และต้อง return เป็น JSX  Props ที่รับเข้ามาเป็น Obj เสมอ ห้าม Re assignProps มันทำไม่ได้
//     // console.log(props)
//   return (
//     <div class="greeting">
//       <p>Hello {props.name}, My email is {props.user.email}</p>
//     </div>
//   );
// }

// const user = {
//     name: 'John',
//     email: 'john.d@gmail.com'
// }
// const element = (
//   <div>
//     <h1>Welcome My Friend</h1>
//     <Greeting name='Bomb' user={user}/>
//     <Greeting name='Ploy' user={{email: "ploy.ts@gmail.com"}} />
//     <Greeting name='Pare' user={{}} />
//     {/* <Greeting name="John" age='27'/> */}
//     {/* <Greeting name="Jack" />
//     <Greeting name="Jane" /> */}
//     {/* {Greeting({ name: "John"})}
//     {Greeting({ name: "Jack"})}
//     {Greeting({ name: "Jane"})} */}
//   </div>
// );

// const rootElement = document.getElementById('root')
// ReactDOM.render(element,rootElement)

function Comment(props) {
  const size = 100;
  return (
    <div className="Comment" style={{ textAlign: "center" }}>
      <UserInfo avatarUrl={props.avatarUrl} name={props.name} size={size} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
      {/* <CommentText text={props.text} />
      <CommentDate date={props.date} /> */}
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      {/* <Avatar avatarUrl={props.avatarUrl} name={props.name} size={props.size} /> */}
      <Avatar {...props} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}

function Avatar(props) {
  console.log(props.size);
  return (
    <img
      className="Avatar"
      src={props.avatarUrl}
      alt={props.name}
      style={{
        width: "200px",
        height: "200px",
        objectFit: "cover",
        objectPosition: "100% 50%",
        borderRadius: "100px",
      }}
    />
  );
}

// function CommentText(props) {
//   return (
//   )
// }

// function CommentDate(props) {
//   return (
//     <div className="Comment-date">{props.date}</div>
//   )
// }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Comment
    text="Chanwit Pansila"
    date="11/08/1998"
    avatarUrl="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.6435-9/118764821_3276406749117148_4903370848620501531_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFEGP2rZLMyN_-GHNKC2P-Vx7WjaIomzNXHtaNoiibM1fEr8KkRYiTTl7L5348isOBkxaz4bH5YeuWqF-4ZJdDm&_nc_ohc=Q1wdf0u12eUAX8h9xln&_nc_ht=scontent.fbkk2-4.fna&oh=a3b90f8cb0c6fc6b8dc2a5fde908dfc5&oe=612A7E7C"
    name="Bomb"
  />,
  rootElement
);
