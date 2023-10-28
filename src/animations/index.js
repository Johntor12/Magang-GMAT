import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 1,
    css: {
      overflowY: "hidden",
    },
  })
    .from(".texts-container", {
      duration: 0.5,
      opacity: 0,
    })
    .to(".texts-container", {
      duration: 2,
      opacity: 1,
      rotation: 360,
    })
    .from(".texts-container span", {
      duration: 1.5,
      opacity: 0,
      y: 70,
      skewY: 20,
      stagger: 0.25,
      onComplete: () => {
        setInterval(() => {
          gsap.set("body", {
            overflowY: "visible",
            overflowX: "hidden",
          });
        }, [1000]);
        tl.kill();
      },
    });
};
