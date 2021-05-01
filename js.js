gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline();

t1.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})

t1.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")

t1.from('.hero-design', {
    opacity: 0,
    y: 50,
    ease: Power4.easeOut,
    duration: 1

}, "-=2")

gsap.from('.square-anim', {
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7)

})

gsap.from('.transition2', {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from('.transition3', {
    scrollTrigger: {
        trigger: '.transition3',
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
})

ScrollTrigger.create({
    start: 'top -15%',
    end: 99999,
    toggleClass: {
        className: 'button1--scrolled', targets: '.button1'
    }
});

ScrollTrigger.create({
    start: '.transition2',
    toggleClass: {
        className: 'transitionbtn--scrolled1', targets: '.transitionbtn'
    }
});




