import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  //  ใช้ในการ Reirect ไปหน้าที่ต้องการโดยใช้ Methode push แต่ต้องใช้ภายใต้ BrowserRouter
  const history = useHistory();

  const handleSubmitLogin = e => {
    e.preventDefault();
    // Login for authenticated
    // date : point => 200

    // Case SuccessLogin redirect To Home
    // history.push('/');

    // ถ้ามีข้อมูลส่งกลับมาแล้วต้องการเอาไปใช้ต้อให้ใส่เป็น Object แล้ว path ที่ส่งไปจะเอาข้อมูลไปใช้ได้
    history.push({
      pathname: '/',
      search: '?name=john',
      state: { point: 200 },
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmitLogin}>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
