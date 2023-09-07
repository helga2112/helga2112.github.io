const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
this.videoSource = video.querySelector('source')
this.mobileSource = this.videoSource.getAttribute('mobile_video') 
this.videoSource.setAttribute('src', this.mobileSource);
const text = intro.querySelector('h1')

const section = document.querySelector('section')
const end = section.querySelector('h1')

const controller = new ScrollMagic.Controller()

// scenes
const scene = new ScrollMagic.Scene({
    duration: 3400,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller)

// video animation
let accelAmount = 0.2  // like easing
let scrollPosition = 0
let delay = 0

console.log('duration', video.duration);
console.log('mediakeys',video.mediaKeys)
console.log('playbackRate',video.playbackRate)
console.log('totalVideoFrames',video.getVideoPlaybackQuality())

var rounded = function(number){
    return +number.toFixed(2);
}

/* scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000
    video.currentTime = scrollPosition
}) */

console.log('>>> video', video.duration)

/* setInterval(()=>{
    console.log('>>> video', video.duration)
    delay += (scrollPosition - delay) * accelAmount
    video.currentTime = delay
}, 33.3) */


// 1 sec = 1000 millisec 
// video framerate = 30
// 1000 / 30 = 33.3