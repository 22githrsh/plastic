function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
//   multiplier:`-1` 
  
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()
gsap.to(".page1 h1",{
    scrollTrigger:{
      trigger:".page1",
      scroller:"#main",
      start:"0% top",
      scrub:0.06,
    //   end:"50% 0%",  
    //   markers:true
    },
    top:"100%",
    ease:Power1
  })

gsap.from(".page2 h1",{
    scrollTrigger:{
      trigger:".page2",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page3 h1",{
    scrollTrigger:{
      trigger:".page3",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page4 h1",{
    scrollTrigger:{
      trigger:".page4",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page5 h1",{
    scrollTrigger:{
      trigger:".page5",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page6 h1",{
    scrollTrigger:{
      trigger:".page6",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page7 h1",{
    scrollTrigger:{
      trigger:".page7",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page8 h1",{
    scrollTrigger:{
      trigger:".page8",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page9 h1",{
    scrollTrigger:{
      trigger:".page9",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page10 h1",{
    scrollTrigger:{
      trigger:".page10",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page11 h1",{
    scrollTrigger:{
      trigger:".page11",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page12 h1",{
    scrollTrigger:{
      trigger:".page12",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page13 h1",{
    scrollTrigger:{
      trigger:".page13",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page14 h1",{
    scrollTrigger:{
      trigger:".page14",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page15 h1",{
    scrollTrigger:{
      trigger:".page15",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page16 h1",{
    scrollTrigger:{
      trigger:".page16",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page17 h1",{
    scrollTrigger:{
      trigger:".page17",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page18 h1",{
    scrollTrigger:{
      trigger:".page18",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
  gsap.from(".page19 h1",{
    scrollTrigger:{
      trigger:".page19",
      scroller:"#main",
      start:"-40% top",
      scrub:0.06,
    //   end:"50% 0%",
    //   markers:true
    },
    top:"-30%",
    ease:Power1
  })
//   gsap.from(".page3 h1",{
//     scrollTrigger:{
//       trigger:".page3",
//       scroller:"#main",
//       start:"-50% top",
//       scrub:2,
      markers:true
//     },
//     top:"-10%"
//   })
//   gsap.from(".page4 h1",{
//     scrollTrigger:{
//       trigger:".page4",
//       scroller:"#main",
//       start:"-50% top",
//       scrub:2,
      markers:true
//     },
//     top:"-40%"
//   })
//   gsap.from(".page5 h1",{
//     scrollTrigger:{
//       trigger:".page5",
//       scroller:"#main",
//       start:"-50% top",
//       scrub:2,
      markers:true
//     },
//     top:"-40%"
//   })
