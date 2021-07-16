import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutpage' component={AboutPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
