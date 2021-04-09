
    // === Load ===============================
    tl
      .add("_bg", .1)
      .add("_lines-fade", 3)
      .add("_circs-start", 1)
      .add("_circs-fade", 3.5)
      .to("#wrapper", { opacity: 1, duration: 0.1 }, 0)


      // === Frame 1 ===============================
      // .from("#c1", loadanim, "_f1+=.25")
      .to("#shape-lines", {
        webkitMaskImage: 'radial-gradient(100% 100% at 57% 50%, rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,0))',
        ease: 'ease-in',
        duration: 8
      }, "_bg")
      .to("#shape-lines", {
        webkitMaskImage: 'radial-gradient(100% 100% at 57% 50%, rgba(0,0,0,1), rgba(0,0,0,1))',
        ease: 'ease-out',
        duration: 1
      }, "_bg+=8")

      
      .to("#shape-circ", {
        webkitMaskImage: 'radial-gradient(100% 100% at 48% 50%, rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,0))',
        ease: 'ease-in',
        duration: 7
        }, "_circs-start")
      .to("#shape-circ", {
        webkitMaskImage: 'radial-gradient(100% 100% at 48% 50%, rgba(0,0,0,1), rgba(0,0,0,1))',
        ease: 'ease-out',
        duration: 1
      }, "_bg+=8")


      // .to("#bgmask ", {
      //   // webkitMaskImage: 'radial-gradient(100% 65% at 48% 60%, rgba(0,0,0,1), rgba(0,0,0,0))',
      //   // webkitMaskImage: 'radial-gradient(100% 65% at 48% 60%, rgba(0,0,0,1), rgba(0,0,0,0))',
      //   attr: {
      //     x: 0,
      //     y:0,
      //     width: 1110,
      //     height: 698,
      //   },
      //   ease: 'ease-in-out',
      //   duration: 9
      // }, "_bg")



      .from("#lightspots", {opacity: 0, duration: 1}, "_bg")

      .set("#lightbeam-3o *", {scale:.1})
      .set("#lightbeam-4o *", {scale:.1})
      .set("#lightbeam-5o *", {scale:.1})
      .set("#lightbeam-7o *", {scale:.1})
      .set("#lightbeam-10o *", {scale:.1})
      .set("#lightbeam-9o *", {scale:.1})

      // Start 2o
      // .to("#lightbeam-2o *", {
      //   motionPath: {
      //     path: "#straight-2o",
      //     align: "#straight-2o",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: .1,
      //     end:.8,
      // },
      // ease: 'ease-in-out',
      // duration: 4}
      // ,"_bg")
      // .to("#lightbeam-2o", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_lines-fade")
      // End 2o


      // Start 3o
      // .from("#lightbeam-3o", {opacity:0}, "_circs-start+=1")

      // .to("#lightbeam-3o *", {
      //   motionPath: {
      //     path: "#right-3o",
      //     align: "#right-3o",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: 1,
      //     end:.3,
      //     scale: .3,
      // },
      // ease: 'ease-in-out',
      // duration: 2}
      // ,"_circs-start+=1")
      // .to("#lightbeam-3o", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_lines-fade")
      // // End 3o


      // // Start 4o
      // .to("#lightbeam-4o *", {
      //   motionPath: {
      //     path: "#straight-4o",
      //     align: "#straight-4o",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: 1,
      //     end:.3,
      //     scale: .3,
      // },
      // ease: 'ease-in-out',
      // duration: 4}
      // ,"_circs-start+=.5")
      // .to("#lightbeam-4o", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_lines-fade")
      // // End 4o

      // // Start 5o
      // .set("#lightbeam-5o *", {scale:.1})
      // .to("#lightbeam-5o *", {
      //   scale: 1,
      //   motionPath: {
      //     path: "#straight-5o",
      //     align: "#straight-5o",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: .65,
      //     end:.25,
      // },
      // ease: 'ease-in-out',
      // duration: 4}
      // ,"_bg")
      // .to("#lightbeam-5o", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_lines-fade")
      // // End 5o

      // .to("#lightbeam-7o *", {
      //   motionPath: {
      //     path: "#straight-7o",
      //     align: "#straight-7o",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: .25,
      //     end:.8,
      // },
      // ease: 'ease-in-out',
      // duration: 4}
      // ,"_bg")
      // .to("#lightbeam-7o", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_lines-fade")

      
      // .to("#lightbeam-9o *", {
      //   motionPath: {
      //     path: "#straight-9o",
      //     align: "#straight-9o",
      //     alignOrigin: [0.1, 0.5],
      //     start: .83,
      //     autoRotate: 180,
      //     end:.3,
      //   },
      //   ease: 'ease-in-out',
      //   duration: 4
      // },"_bg")
      // .to("#lightbeam-9o", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_lines-fade")


      // // Start 10o
      // .to("#lightbeam-10o *", {
      //   motionPath: {
      //     path: "#straight-10o",
      //     align: "#straight-10o",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: .8,
      //     end:.3,
      // },
      // ease: 'ease-in-out',
      // duration: 4}
      // ,"_bg")
      // .to("#lightbeam-10o", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_lines-fade")
      // // End 10o


      // // Start main-circ
      // .from("#lightbeam-main-circR", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_circs-start")
      // .to("#lightbeam-main-circR *", {
      //   motionPath: {
      //     path: "#main-circ",
      //     align: "#main-circ",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: .6,
      //     end: 1,
      // },
      // ease: 'ease-in-out',
      // duration: 3.5}
      // ,"_circs-start")
      // .to("#lightbeam-main-circR", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_circs-fade+=.5")
      // // End main-circ

      // // Start main-circ
      // .from("#lightbeam-main-circL", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: .5}
      // ,"_circs-start")
      // .to("#lightbeam-main-circL *", {
      //   motionPath: {
      //     path: "#main-circ",
      //     align: "#main-circ",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: .45,
      //     end:0.15,
      // },
      // ease: 'ease-in-out',
      // duration: 3.5}
      // ,"_circs-start")
      // .to("#lightbeam-main-circL", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_circs-fade")
      // // End main-circ

      // // Start sm-circ
      // .from("#lightbeam-sm-circ", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: .5}
      // ,"_circs-start")
      // .to("#lightbeam-sm-circ *", {
      //   motionPath: {
      //     path: "#right-sm-circ",
      //     align: "#right-sm-circ",
      //     alignOrigin: [0.1, 0.5],
      //     autoRotate: 180,
      //     start: .1,
      //     end:.9,
      // },
      // ease: 'ease-in-out',
      // duration: 4}
      // ,"_circs-start")
      // .to("#lightbeam-sm-circ", {
      //   opacity: 0,
      //   ease: 'ease-in-out',
      //   duration: 1}
      // ,"_circs-fade")
      // // End sm-circ

      