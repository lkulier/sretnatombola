import "tabler-react/dist/Tabler.css";

import * as React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Faq from "./pages/faq/Faq";
import Home from "./pages/home/Home";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/faq"><Faq /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;