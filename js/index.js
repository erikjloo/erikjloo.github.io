// import { readdirSync } from 'fs';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const faders = document.querySelectorAll('.fade-in');

navToggle.addEventListener('click', () => {
    // Print F12 - go to console
    // console.log("I am working");
    // console.log(document.querySelector('.nav-open'));
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

//===========================================================================
// Fade-in
//===========================================================================

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { 
            return; 
        } else {
            entry.target.classList.add('appear');   // Fade-in
            appearOnScroll.unobserve(entry.target); // Stop checking for fade-in
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

//===========================================================================
// Switch background images
//===========================================================================

var imageContainer = document.querySelector(".intro__image__container")
var imageArray = ["./images/backgrounds/panorama2.jpg", 
                  "./images/backgrounds/panorama3.jpg",
                  "./images/backgrounds/panorama4.jpg",
                  "./images/backgrounds/panorama5.jpg",
                  "./images/backgrounds/panorama6.jpg"]
var imageIndex = 0;

function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
var transitionEnd = whichTransitionEvent();
function swapImage() {

    image = document.querySelector(".intro__image");
    
    // We add a new image behind our current image
    var newImage = new Image();
    newImage.src = imageArray[imageIndex];
    newImage.className = "intro__image";
    imageContainer.insertBefore(newImage, image.nextSibling);

    // Transition end is only detected if a class is added
    image.classList.add("intro__image__fade-out");
    // Synchronous transitions can only happen if animate is used
    newImage.animate( { opacity: 1 }, 2000);
    // Add event listener works much better than setTimeout
    image.addEventListener(transitionEnd, removeImage);

    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
function removeImage(event) { 
    image.removeEventListener(transitionEnd, removeImage);
    imageContainer.removeChild(image); 
}
setInterval(swapImage, 20000);
