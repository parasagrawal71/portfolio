import React from "react";
import { Transition } from "react-spring/renderprops";

const CharTransition = ({ charArray }) => {
  return (
    <Transition
      items={charArray}
      keys={(item, index) => index}
      from={{ transform: "translate3d(0,-50px,0)" }}
      enter={{ transform: "translate3d(0,0px,0)" }}
      leave={{ transform: "translate3d(0,-40px,0)" }}
    >
      {(item) => (props) => <div style={props}>{item}</div>}
    </Transition>
  );
};

export default CharTransition;
