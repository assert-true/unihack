// Menu animation
let inTimeline = anime.timeline({
  autoplay: false,
  complete: function(anim) {
    if (anim.direction === "reverse") {
      document.getElementById("Overlay").style.display = "none";
    }
    anim.reverse();
  }
});

inTimeline
  .add({
    targets: ".MenuOverlay",
    opacity: [0, 1],
    duration: 200,
    begin: () => {
      document.getElementById("Overlay").style.display = "block";
    },
    easing: "linear"
  })
  .add({
    targets: [".MenuOverlay-Item", ".LanguageSwitcher"],
    opacity: [0, 1],
    translateY: [-20, 0],
    delay: anime.stagger(100),
    ease: "inOutElastic"
  });

document.getElementById("hamburger-toggle").addEventListener(
  "click",
  function(e) {
    inTimeline.play();
    if (inTimeline.began) {
      inTimeline.reverse();
    }
  },
  false
);
