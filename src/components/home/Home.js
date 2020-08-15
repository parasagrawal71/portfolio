import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE //
import "./Home.scss";

const Home = () => {
  return (
    <main className="home-container" id="home">
      <section className="home">
        <section className="home--left">
          <div className="home-hi">Hi there, I&#39;m</div>
          <div className="home-name">Paras Agrawal</div>
          <div className="home-designation">Full Stack Developer</div>
        </section>
      </section>
    </main>
  );
};

export default Home;
