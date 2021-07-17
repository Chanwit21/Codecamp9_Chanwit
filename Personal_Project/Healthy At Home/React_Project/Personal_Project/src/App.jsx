import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import TrainerPage from "./Page/TrainerPage";
import './Global.css'
import ServicePage from "./Page/ServicePage";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/RegisterPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutpage' component={AboutPage} />
          <Route path='/trainerpage' component={TrainerPage}/>
          <Route path='/servicepage' component={ServicePage} />
          <Route path='/loginpage' component={LoginPage} />
          <Route path='/registerpage' component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
