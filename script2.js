// var tl=gsap.timeline()

// gsap.from("nav img",{
// y:-100,
// duration:1,
// delay:0.3,
// rotate:90
// })
// gsap.from(".midnav h4",{
//     y:-100,
//     duration:0.3,
//     delay:0.3,
//     rotate:90,
//     stagger:2
// })
//     gsap.from(".lastnav",{
//         y:-100,
//         duration:1,
//         delay:0.3,
//         rotate:90
// })
// gsap.to("p",{
//     y:50,
//     duration:1,
//     delay:0.5,
//     yoyo:true,
//     repeat:-1
// })
// gsap.from(".img1",{
//     x:-200,
//     duration:2,
//     delay:1,
//     opacity:-1,
//     rotate:360
// })
// gsap.from(".img2",{
//     x:-200,
//     duration:2,
//     delay:1,
//     opacity:-1,
//     rotate:360
// })
// gsap.from(".img0",{
//     y:-200,
//     duration:2,
//     delay:1,
//     opacity:-1,
//     rotate:360
// })
var tl=gsap.timeline()
tl.from("nav img,.midnav h4,.lastnav h4,button",{
   y:-100,
   duration:1,
   rotation:90,
   stagger:1
})
gsap.from(".img1",{
   x:-200,
duration:1,
scale:-1,
opacity:0,
delay:2
})
gsap.from(".img2",{
    y:-200,
 duration:1,
 scale:-1,
 opacity:0,
 delay:3
 })
 gsap.from(".img0",{
    x:200,
 duration:1,
 scale:-1,
 opacity:0,
 delay:4
 })
gsap.from("p",{
y:50,
yoyo:true,
repeat:-1
})



