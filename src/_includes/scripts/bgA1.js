
    // === Load ===============================
    const light = ["#lightshape", "#bg"];
    tl
      .add("_bg", 1)
      .add("_circs-start", 1.5)
      .add("_lines-fade", 7)
      .add("_circs-fade", 5.5)

      .set("#lightbeam-4o *", {scale:1})
      .set("#lightbeam-5o *", {scale:1})
      .set("#lightbeam-7o *", {scale:1})
      .set("#lightbeam-9o *", {scale:1})
      .set("#lightbeam-main-circR *", {scale:2})

      .to("#wrapper", { opacity: 1, duration: 0.1 }, 0)

      .from("#screenglow", {opacity: 0, duration: 1, ease: "ease-in-out"})

      // === Frame 1 ===============================
      .from("#lightshape", {
        opacity: 0,
        ease: 'ease-in',
        duration: 3
      }, "_bg")

      .to("#bg", {
        opacity: 0.3,
        ease: 'ease-in',
        duration: 4
      }, "_bg")
      


      .from("#lightspots", {opacity: 0, duration: .25, ease: "ease-in-out"}, "_circs-start")


      // Start main-circ
      .to("#lightbeam-main-circR *", {
        motionPath: {
          path: "#main-circ",
          align: "#main-circ",
          alignOrigin: [0.5, 0.5],
          autoRotate: 178,
          start: .65,
          end: 1,
      },
      transformOrigin: 'center center',
      scale: 3.3,
      ease: 'ease-in-out',
      duration: 2.5}
      ,"_circs-start")

      // Start sm-circ
      .to("#lightbeam-sm-circ *", {
        motionPath: {
          path: "#right-sm-circ",
          align: "#right-sm-circ",
          alignOrigin: [0.5, 0.5],
          autoRotate: 178,
          start: .1,
          end: 1,
      },
      transformOrigin: 'center center',
      scale: 3.3,
      ease: 'ease-in-out',
      duration: 1.5}
      ,"_circs-start+=.7")



      // Start 3o
      .from("#lightbeam-4o *", {opacity: 0},"_circs-start+=.1")
      .to("#lightbeam-4o *", {
        motionPath: {
          path: "#straight-4o",
          align: "#straight-4o",
          alignOrigin: [0.1, 0.5],
          autoRotate: 180,
          start: .9,
          end:.4,
        },
      scale: 3,
      ease: 'ease-in-out',
      duration: 4}
      ,"<")


      // Start 5o
      .from("#lightbeam-5o *", {opacity: 0},"_circs-start+=.3")
      .to("#lightbeam-5o *", {
        scale: 3,
        motionPath: {
          path: "#straight-5o",
          align: "#straight-5o",
          alignOrigin: [0.1, 0.5],
          autoRotate: 180,
          start: .75,
          end:.25,
      },
      scale: 3,
      ease: 'ease-in-out',
      duration: 4}
      ,"<")

      .from("#lightbeam-7o *", {opacity: 0},"_circs-start+=.45")
      .to("#lightbeam-7o *", {
        motionPath: {
          path: "#straight-7o",
          align: "#straight-7o",
          alignOrigin: [0.1, 0.5],
          autoRotate: 180,
          start: .4,
          end:.8,
      },
      scale: 3,
      ease: 'ease-in-out',
      duration: 4}
      ,"<")

      
      .from("#lightbeam-9o *", {opacity: 0},"_circs-start+=.6")
      .to("#lightbeam-9o *", {
        motionPath: {
          path: "#straight-9o",
          align: "#straight-9o",
          alignOrigin: [0.1, 0.5],
          start: .7,
          autoRotate: 180,
          end:.3,
        },
        scale: 3,
        ease: 'ease-in-out',
        duration: 4
      },"<")


      .from("#lightbeam-10o *", {opacity: 0},"_circs-start+=1.2")
      .to("#lightbeam-10o *", {
        motionPath: {
          path: "#straight-10o",
          align: "#straight-10o",
          alignOrigin: [0.1, 0.5],
          start: .7,
          autoRotate: 180,
          end:.05,
        },
        scale: 3,
        ease: 'ease-in-out',
        duration: 4
      },"<")


      .to("#lightbeam-sm-circ", {opacity: 0},"_circs-start+=1.7")
      .to("#lightbeam-5o", {opacity: 0},"_circs-start+=3.8")
      .to("#lightbeam-7o", {opacity: 0},"_circs-start+=4")
      .to("#lightbeam-9o", {opacity: 0, duration: 1, ease: 'ease-in-out'},"_circs-start+=3.5")


      .from("#lighting", {opacity: 0, duration: 1, ease: "ease-in-out"}, "_circs-fade-=1.5")
