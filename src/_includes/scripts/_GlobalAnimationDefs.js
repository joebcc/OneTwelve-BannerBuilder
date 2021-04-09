
  const tl = gsap.timeline();
  // GSDevTools.create();
  gsap.registerPlugin(MotionPathPlugin);
  // gsap.registerPlugin(CustomEase);
  

    CustomEase.create("flicker", "M0,0 C0.056,0.172 0.116,0.786 0.116,0.786 0.116,0.786 0.29,0.718 0.29,0.718 0.29,0.718 0.356,0.044 0.356,0.044 0.356,0.044 0.416,0.872 0.416,0.872 0.416,0.872 0.464,0.89 0.464,0.89 0.464,0.89 0.516,0.108 0.516,0.108 0.516,0.108 0.522,0.922 0.522,0.922 0.522,0.922 0.576,0.944 0.576,0.944 0.576,0.944 0.718,0.022 0.718,0.022 0.718,0.022 0.794,0.954 0.794,0.954 0.794,0.954 0.971,1 1,1 ");

    CustomEase.create("flicker2", "M0,0 C0.056,0.172 0.116,0.786 0.116,0.786 0.116,0.786 0.29,0.718 0.29,0.718 0.29,0.718 0.356,0.044 0.356,0.044 0.356,0.044 0.416,0.872 0.416,0.872 0.416,0.872 0.576,0.944 0.576,0.944 0.576,0.944 0.718,0.022 0.718,0.022 0.718,0.022 0.794,0.954 0.794,0.954 0.794,0.954 0.971,1 1,1 ")
  const
    //? Animation variable definitions
    loadanim = {
      opacity: 0,
      duration: 0.5,
      ease: "ease-out",
    },
    flickerloadanim = {
      opacity: 0,
      duration: 0.5,
      ease: "flicker",
    },
    moveup = {
      y: "-=35",
      opacity: "-=.5",
      duration: 0.5,
      ease: "ease-out",
    },
    unloadanim = {
      opacity: 0,
      duration: 0.5,
      ease: "ease-in",
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