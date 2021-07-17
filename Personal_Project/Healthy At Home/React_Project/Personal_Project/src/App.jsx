import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import TrainerPage from "./Page/TrainerPage";
import './Global.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutpage' component={AboutPage} />
          <Route path='/trainerpage' component={TrainerPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
