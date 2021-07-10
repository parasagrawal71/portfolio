import React from "react";
import { Switch, Route } from "react-router-dom";

// IMPORT ALL PAGES HERE //
import MainPage from "pages/main/Main";

// IMPORT OTHERS HERE //

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
};

export default Routes;
