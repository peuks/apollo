import "./styles/main.scss";
import LocomotiveScroll from "locomotive-scroll";

const init = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    touchMultiplier: 2,
    lerp: 0.1,
    smartphone: {
      smooth: true,
      multiplier: 0.5,
    },
    multiplier: 0.85,
  });
};
init();
