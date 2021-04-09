tl
      .add("_f1", .5)
      .add("_f2", 3)
      .add("_f3", 5)
      .from("#c1", loadanim, "_f1")
      
      .to("#c1", unloadanim, "_f2")


      // // === Frame 2 ===============================
      .from("#c2", loadanim, "_f2")

      .to("#c2", unloadanim, "_f3")


      // // === Frame_f3 ===============================
      .from("#c3", loadanim, "_f3")

      .from("#cta-mask", {scaleX: 0, tranformOrigin: 'left center', duration: .5, ease: 'ease-in-out'}, "_f3+=.75")


