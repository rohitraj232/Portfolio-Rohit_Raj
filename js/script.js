var tl = gsap.timeline();

tl.from(".navbar-brand, .nav-item", {
  y: -80,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.2,
});

gsap.to(".hero-pic", {
  y: -10, // Move 5px up
  repeat: -1, // Repeat infinitely
  yoyo: true, // Yoyo back to original position
  ease: "power1.inOut", // Easing function
  duration: 1, // Duration of animation
});

// tl.from(".hero-details p", {
//   y: -200,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   ease: "bounce.out",
//   stagger: 0.5,
// });

tl.from(".icons-img", {
  x: 100,
  opacity: 0,
  duration: 1,
  //   delay: 0.5,
  rotation: 360,
  ease: "bounce.out",
  stagger: 0.1,
});

// gsap.from(".left-to-right-animation", {
//     x: -20,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
//   stagger: 0.1
// })

gsap.from(".page-2-about-me .more-about h2", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".page-2-about-me .more-about h2",
    scroller: "body",
    // markers: true,
    start: "top 90%",
  },
});

gsap.from(".about-me-box", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".about-me-box",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});

gsap.from(".page-3-technical-skills .more-about h2", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".page-3-technical-skills .more-about h2",
    scroller: "body",
    // markers: true,
    start: "top 90%",
  },
});

// gsap.from(".technical-skill-box", {
//     y: 20,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.4,
//     scrollTrigger: {
//         trigger: ".technical-skill-box",
//         scroller: "body",
//         // markers: true,
//         start: "top 80%"
//     }
// })

gsap.from(".technical-skill-box", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  delay: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".technical-skill-box",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
  onComplete: function () {
    // Second animation starts when first animation is complete
    gsap.from(".left-to-right-animation", {
      x: -20,
      opacity: 0,
      duration: 1,
      // markers: true,
      stagger: 0.1,
    });
  },
});

gsap.from(".page-4-experience .experience-header h2", {
  y: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".page-4-experience .experience-header h2",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});

gsap.from(".experience-box-1", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".experience-box-1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});

gsap.from(".experience-box-2", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".experience-box-2",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});

gsap.from(".page-5-projects .projects-header h2", {
  y: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".page-5-projects .projects-header h2",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});

gsap.from(".project-box", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".project-box",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});

gsap.from(".page-6-contact-me .contact-header h2", {
  y: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".page-6-contact-me .contact-header h2",
    scroller: "body",
    //   markers: true,
    start: "top 80%",
  },
});

gsap.to(".contact-img", {
  y: -5,
  y: 5,
  repeat: -1, // Repeat infinitely
  yoyo: true, // Yoyo back to original position
  ease: "elastic.out(1, 0.3)", // Easing function
  duration: 1, // Duration of animation
});
