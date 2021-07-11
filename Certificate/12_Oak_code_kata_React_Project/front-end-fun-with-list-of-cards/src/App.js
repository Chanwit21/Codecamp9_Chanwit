import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadrList from './CardList/CadrList';

function App() {
  return (
    <div>
      <CadrList />
    </div>
  );
}

export default App;
