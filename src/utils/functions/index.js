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
