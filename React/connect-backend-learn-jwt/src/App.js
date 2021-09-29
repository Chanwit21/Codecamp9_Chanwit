import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import TodoListContainer from './component/Todo/TodoListContainer';

function App() {
  // localStorage.setItem('message', 'welcome local Storage');
  // console.log(localStorage.getItem('message'));
  // localStorage.removeItem('message');
  return (
    <div>
      {/* <BrowserRouter>
        <ul className='nav justify-content-between'>
          <div className='d-flex'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/register'>
                Register
              </NavLink>
            </li>
          </div>
          <li className='nav-item'>
            <NavLink className='nav-link p-0' to='/register'>
              <div className='btn btn-danger'>Log out</div>
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/' component={Login} />
        </Switch>
      </BrowserRouter> */}
      {/* 
      <Login />
      <Register /> */}
      <TodoListContainer />
    </div>
  );
}

export default App;
