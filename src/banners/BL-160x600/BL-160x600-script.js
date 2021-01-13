
    // === Load ===============================
    tl
      .set("#bg", { scale: 2, transformOrigin: 'center', x: '-=80', y: '+=100', })
      .set("#Learn_more", {scale: .9, transformOrigin: 'center'})
      .to("#wrapper", { opacity: 1, duration: 0.1 }, 0)

      // === Frame 1 ===============================
      .from("#c1", loadanim, "_f1+=.25")
      .to("#bg", {transformOrigin: 'center', scale: 1.8, x: '+=30', y: '-=30', duration: .35, ease: 'ease-in-out'}, "_f1")

      .to("#c1", unloadanim, "_f1+=3.5")


      // === Frame 2 ===============================
      .from("#f2", loadanim, "_f2")
      .to("#bg", {transformOrigin: 'center', scale: 1.5, x: '+=50', y: '-=50', duration: .5, ease: 'ease-in-out'}, "_f2")

      .to("#f2", unloadanim, "_f2+=3")


      // === Frame_f3 ===============================
      .from("#c3", loadanim, "_f3")
      .to("#bg", {transformOrigin: 'center', scale: 1, x: '0', y: '0', duration: 3, ease: 'ease-in-out'}, "_f3")
      .fromTo("#shine1", {x: '-=40', }, {x: '+=60', opacity: 0, duration: 13, ease: 'ease-in-out'}, "_f1")
      .fromTo("#shine2", {x: '-=35'}, {x: '+=70',  opacity: .2, duration: 13, ease: 'ease-in-out'}, "_f1")
      .fromTo("#front-shadow",  {transformOrigin: '0% 15%', skewX: '+40'}, {skewX: '-40', duration: 13, ease: 'ease-in-out'}, "_f1")
      .fromTo("#back-shadow", {transformOrigin: '0% 78%', skewX: '+40'}, {skewX: '-40', duration: 13, ease: 'ease-in-out'}, "_f1")
      .fromTo("#back_light_ellipse", {x: '-=75'}, {x: '+=140',  opacity: .2, duration: 13, ease: 'ease-in-out'}, "_f1")

      .from("#cta", loadanim, "_f3+=.75")
      .to("#cta-glow", {x: '+=300', duration: .6, ease: 'ease-out'}, "_f3+=2")

