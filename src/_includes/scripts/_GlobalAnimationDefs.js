
  const tl = gsap.timeline();

  const
    //? Animation variable definitions
    loadanim = {
      y: "+=50",
      opacity: 0,
      duration: 0.25,
      ease: "ease-out",
    },
    moveup = {
      y: "-=35",
      opacity: "-=.5",
      duration: 0.5,
      ease: "ease-out",
    },
    unloadanim = {
      y: "-=50",
      opacity: 0,
      duration: 0.25,
      ease: "ease-out",
    },
    fadeto0 = {
      opacity: 0,
      duration: 0.3,
      ease: "ease-out",
    },
    fadeto1 = {
      opacity: 1,
      duration: 0.3,
      ease: "ease-out",
    };
