const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')

const section = document.querySelector('section')
const end = section.querySelector('h1')

const controller = new ScrollMagic.Controller()

// scenes
const scene = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller)

// video animation
let accelAmount = 0.1  // like easing
let scrollPosition = 0
let delay = 0

console.log(video.currentTime);
console.log(video.preload)


/* scene.on('update', e => {
    scrollPosition = e.scrollPos / 1500
    video.currentTime = scrollPosition
}) */


scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000
})

setInterval(()=>{
    delay += (scrollPosition - delay) * accelAmount
    video.currentTime = delay
    console.log("delay", delay.toFixed(2), "scrollPosition",scrollPosition.toFixed(2))
}, 33)
