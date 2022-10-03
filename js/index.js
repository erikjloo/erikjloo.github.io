// import { readdirSync } from 'fs';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const faders = document.querySelectorAll('.fade-in');

window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    document.body.classList.add('nav-close');
  else
    document.body.classList.remove('nav-close');
};

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-close');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.add('nav-close');
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

function swapImage() {

  image = document.querySelector(".intro__image");
  
  // We add a new image behind our current image
  let newImage = new Image();
  newImage.src = imageArray[imageIndex];
  newImage.className = "intro__image";
  imageContainer.insertBefore(newImage, image.nextSibling);

  // Transition end is only detected if a class is added
  image.classList.add("intro__image__fade-out");
  newImage.classList.add("intro__image__fade-in");
  image.addEventListener('transitionend', () => { image.remove(); }, {once: true});

  imageIndex++;
  imageIndex %= imageArray.length;
  // if (imageIndex >= imageArray.length) {
  //   imageIndex = 0;
  // }
}

setInterval(swapImage, 200);
