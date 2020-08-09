import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Home from "components/home/Home";

// IMPORT OTHERS HERE //
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Home />
    </main>
  );
};

export default App;
