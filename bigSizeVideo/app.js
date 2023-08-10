const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')

const section = document.querySelector('section')
const end = section.querySelector('h1')

const controller = new ScrollMagic.Controller()

// scenes
const scene = new ScrollMagic.Scene({
    duration: 2500,
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

console.log('duration', video.duration);
console.log('mediakeys',video.mediaKeys)
console.log('playbackRate',video.playbackRate)
console.log('totalVideoFrames',video.getVideoPlaybackQuality())

var rounded = function(number){
    return +number.toFixed(2);
}

scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000
})

console.log('>>> video', video.duration)

setInterval(()=>{
    delay += (scrollPosition - delay) * accelAmount
    video.currentTime = delay
}, 33.3)


// 1 sec = 1000 millisec 
// video framerate = 30
// 1000 / 30 = 33.3