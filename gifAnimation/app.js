const intro = document.querySelector('.intro')
const car = intro.querySelector('img')
this.videoSource = car.querySelector('source')
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

// car animation
let accelAmount = 0.2  // like easing
let scrollPosition = 0
let delay = 0

console.log('duration', car.duration);
console.log('mediakeys',car.mediaKeys)
console.log('playbackRate',car.playbackRate)
console.log('totalVideoFrames',car.getVideoPlaybackQuality())

var rounded = function(number){
    return +number.toFixed(2);
}

/* scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000
    car.currentTime = scrollPosition
}) */

console.log('>>> car', car.duration)

/* setInterval(()=>{
    console.log('>>> car', car.duration)
    delay += (scrollPosition - delay) * accelAmount
    car.currentTime = delay
}, 33.3) */


// 1 sec = 1000 millisec 
// car framerate = 30
// 1000 / 30 = 33.3