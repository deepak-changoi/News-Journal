import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);

  document.body.style.backgroundColor = "#212529";
  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <News
              setProgress={setProgress}
              pageSize={40}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              pageSize={40}
              country="in"
              category="business"
            />
          </Route>

          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              pageSize={40}
              country="in"
              category="entertainment"
            />
          </Route>

          <Route exact path="/health">
            <News
              setProgress={setProgress}
              pageSize={40}
              country="in"
              category="health"
            />
          </Route>

          <Route exact path="/science">
            <News
              setProgress={setProgress}
              pageSize={40}
              country="in"
              category="science"
            />
          </Route>

          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              pageSize={40}
              country="in"
              category="sports"
            />
          </Route>

          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              pageSize={40}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
