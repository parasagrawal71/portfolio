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

function jumpUp({ targets }) {
  return anime({
    targets,
    translateY: -5,
    delay: anime.stagger(0),
    loop: 2,
    direction: "alternate",
    easing: "easeInOutSine",
    duration: 200,
  });
}

export default { scaleUp, jumpUp };
