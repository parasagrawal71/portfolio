export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearInterval(timer);
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const handleResize = () => {
  const threshold = 600;
  const initialDiff = window.innerWidth > threshold ? 1 : -1;

  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const currentDiff = width - threshold;
    if (currentDiff * initialDiff < 0) {
      // eslint-disable-next-line no-restricted-globals, no-undef
      location.reload();
    }
  });
};

export function customTypingEffect(wordsList, id, speed = 200) {
  let charPos = 0;
  let wordPos = 0;
  let type = "inc";
  const wordLen = wordsList.length;
  const demoEle = document.getElementById(id);

  return function typeWriter() {
    if (!demoEle) {
      return;
    }
    const txt = wordsList[wordPos];
    const txtLen = txt ? txt.length : 0;
    // console.log(`wordPos, charPos: `, wordPos, charPos);
    if (type === "inc") {
      if (charPos < txtLen) {
        demoEle.innerHTML += txt.charAt(charPos);
        charPos += 1;
      } else {
        type = "dec";
      }
    } else if (type === "dec") {
      if (charPos > -1) {
        demoEle.innerHTML = txt.substr(0, charPos);
        charPos -= 1;
      } else {
        type = "inc";
        wordPos = (wordPos + 1) % wordLen;
      }
    }
    setTimeout(typeWriter, speed);
  };
}

export function scrollToTop({ isSmooth = true }) {
  const app = document.getElementById("app");
  app.scrollTo({ top: 0, behavior: isSmooth ? "smooth" : "auto" });
}
