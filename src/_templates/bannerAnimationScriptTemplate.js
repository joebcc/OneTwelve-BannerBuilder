
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

      .from("#cta", loadanim, "_f3+=.75")
      .to("#cta-glow", {x: '+=300', duration: .6, ease: 'ease-out'}, "_f3+=2")

