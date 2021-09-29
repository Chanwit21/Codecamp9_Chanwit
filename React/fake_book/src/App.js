import { Container } from '@mui/material';
import './App.css';
import NavBar from './component/NavBar';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Container maxWidth='sm' sx={{ display: 'flex', justifyContent: 'center' }}>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route exact path='/' component={HomePage} />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
