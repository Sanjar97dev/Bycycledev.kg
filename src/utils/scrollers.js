//scrollers.js
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {

    scroller.setAttribute("data-animated", true);


    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    const scrollerContentWidth = scrollerContent.reduce(
      (acc, cur) => acc + cur.offsetWidth,
      0
    );

    scrollerInner.style.width = `${scrollerContentWidth}px`;
  });
}
