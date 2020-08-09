import React from "react";
import { connect } from "react-redux";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE //
import "./App.css";

const App = () => {
  return (
    <main>
      <div>Portfolio</div>
    </main>
  );
};

const mapStateToProps = (store) => {
  return { toastState: store };
};

export default connect(mapStateToProps)(App);
