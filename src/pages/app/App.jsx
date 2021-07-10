import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE //
import { fullName } from "config";
import history from "routes/history";
import Routes from "routes/Routes";
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <Router history={history}>
        <Helmet>
          <title>{fullName}</title>
        </Helmet>

        <Routes />
      </Router>
    </main>
  );
};

export default App;
