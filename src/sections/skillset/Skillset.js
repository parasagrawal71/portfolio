import React from "react";

// IMPORT OTHERS HERE //
import "./Skillset.scss";
import {
  lines,
  html5,
  css3,
  javascript,
  react,
  reactNative,
  redux,
  vuejs,
  nodejs,
  python,
  mongodb,
  git,
  linux,
  aws,
  api,
} from "assets/Images";

const Skillset = () => {
  return (
    <main className="skillset" id="skillset">
      <header className="skillset-header">
        <div>SKILLSET</div>
        <img src={lines} alt="lines" />
      </header>

      <section className="skillset-skills">
        <div className="skillset-skill">
          <img src={html5} alt="html5" />
          <div>HTML</div>
        </div>

        <div className="skillset-skill">
          <img src={css3} alt="css3" />
          <div>CSS</div>
        </div>

        <div className="skillset-skill">
          <img src={javascript} alt="javascript" />
          <div>Javascript</div>
        </div>

        <div className="skillset-skill">
          <img src={react} alt="react" />
          <div>React</div>
        </div>

        <div className="skillset-skill">
          <img src={reactNative} alt="reactNative" />
          <div>React Native</div>
        </div>

        <div className="skillset-skill">
          <img src={redux} alt="redux" />
          <div>Redux</div>
        </div>

        <div className="skillset-skill">
          <img src={vuejs} alt="vuejs" />
          <div>Vue</div>
        </div>

        <div className="skillset-skill">
          <img src={nodejs} alt="nodejs" />
          <div>Node JS</div>
        </div>

        <div className="skillset-skill">
          <img src={python} alt="python" />
          <div>Python</div>
        </div>

        <div className="skillset-skill">
          <img src={mongodb} alt="mongodb" />
          <div>MongoDB</div>
        </div>

        <div className="skillset-skill">
          <img src={git} alt="git" />
          <div>Git</div>
        </div>

        <div className="skillset-skill">
          <img src={linux} alt="linux" />
          <div>Linux</div>
        </div>

        <div className="skillset-skill">
          <img src={aws} alt="aws" className="awsIcon" />
          <div>AWS</div>
        </div>

        <div className="skillset-skill">
          <img src={api} alt="api" />
          <div>API</div>
        </div>
      </section>
    </main>
  );
};

export default Skillset;
