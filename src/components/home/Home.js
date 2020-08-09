import React from "react";

// IMPORT OTHERS HERE //
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <section className="home--left">
        <div className="home-hi">Hi, I&#39;m</div>
        <div className="home-name">Paras Agrawal</div>
        <div className="home-designation">Full Stack Developer</div>
      </section>
      <section className="home--right">
        <pre>
          {`const name = {

  first: "Paras",

  last: "Agrawal",

  printFullName: function () {
    console.log(this.first + " " + this.last);
  },

};

name.printFullName();`}
        </pre>
      </section>
    </main>
  );
};

export default Home;
