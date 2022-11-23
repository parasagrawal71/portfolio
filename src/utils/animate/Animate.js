import anime from "animejs";

function scaleUp({ targets }) {
  return anime({
    targets,
    scale: [0.9, 1],
    delay(el, i) {
      return i * 100;
    },
    loop: false,
    direction: "alternate",
    easing: "easeInOutSine",
  });
}

export default { scaleUp };
