import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import News from "./components/News";
import PopUp from "./components/PopUp";
import NewsPublisher from "./components/NewsPublisher";
import NewsCreator from "./components/NewsCreator";

function App() {
  const [popUp, setPopUp] = useState(false);

  const popUpHandler = () => {
    setPopUp((prev) => !prev);
  };

  return (
    <Router>
      <Header popUpHandler={popUpHandler} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/publish">
          <NewsPublisher />
        </Route>
        <Route exact path="/create">
          <NewsCreator />
        </Route>
      </Switch>
      <PopUp isOpen={popUp} handler={popUpHandler} />
    </Router>
  );
}

export default App;
