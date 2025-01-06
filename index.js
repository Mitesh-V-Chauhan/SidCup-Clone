var crsr = document.querySelector("#cursor");
var crsrBlr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrBlr.style.left = dets.x -125 + "px";
    crsrBlr.style.top = dets.y - 125 + "px";
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px", 
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1, 
    }

})

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -7 0%",
        scrub: 2
    }
})