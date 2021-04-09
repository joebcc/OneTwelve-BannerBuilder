
      tl
      .set("#BG", { scale: 1, transformOrigin: 'center', x: '+=0', y: '+=0', })
      .fromTo("#wrapper", { opacity: 0}, {opacity: 1, duration: 0.2 }, 0)
  
      // === Frame 1 ===============================
      .from("#f1", loadanim, "_f1+=.25")
      //.add(bg.tweenTo(.35).duration(.35), "<")
      .to("#BG", {transformOrigin: 'center', scale: 1.05, x: '+=20', y: '-=2', duration: .35, ease: 'ease-in-out'}, "_f1")

      .to("#f1", unloadanim, "_f1+=3.5")


      // === Frame 2 ===============================
      .from("#f2", loadanim, "_f2")
      .to("#BG", {transformOrigin: 'center', scale: 1.1, x: '+=40', y: '-=4', duration: .35, ease: 'ease-in-out'}, "_f2")
      //.add(bg.tweenTo(.7).duration(.35), "<")



      .to("#f2", unloadanim, "_f2+=3")


      // === Frame_f3 ===============================
      .from("#c3", loadanim, "_f3")
      .to("#BG", {transformOrigin: 'center', scale: 1.2, x: '+=60', y: '-=6', duration: 3, ease: 'ease-in-out'}, "_f3")
      //.add(bg.tweenTo(3).duration(2.5), "<")
      .fromTo("#shine1", {x: '-=0', }, {x: '+=50', opacity: 0, duration: 14, ease: 'ease-in-out'}, "_f1")
      .fromTo("#shine1_300x", {x: '-=0', y: '+=5' }, {x: '+=50', opacity: 0, duration: 14, ease: 'ease-in-out'}, "_f1")
      // .fromTo("#shine2", {x: '-=25'}, {x: '+=50',  opacity: .2, duration: 14, ease: 'ease-in-out'}, "_f1")
      .fromTo("#keyshadow",  {transformOrigin: '30% 47%', skewX: '+40'}, {skewX: '-20', duration: 14, ease: 'ease-in-out'}, "_f1")
      .fromTo("#bg-light", {x: '-=25'}, {x: '+=55',  opacity: 1, duration: 14, ease: 'ease-in-out'}, "_f1")

      .from("#cta", loadanim, "_f3+=.75")
      .to("#cta-glow", {x: '+=240', duration: .6, ease: 'ease-out'}, "_f3+=2")

