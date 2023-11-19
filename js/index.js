const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const faders = document.querySelectorAll('.fade-in');

//===========================================================================
// nav-bar functions
//===========================================================================

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

var imageArray = ["./images/backgrounds/panorama0.jpg", 
                  "./images/backgrounds/panorama1.jpg",
                  "./images/backgrounds/panorama2.jpg",
                  "./images/backgrounds/panorama3.jpg",
                  "./images/backgrounds/panorama4.jpg",
                  "./images/backgrounds/panorama5.jpg",
                  ]
var imageIndex = 0;
                  
function swapIntroImage() {
  imageIndex++;
  imageIndex %= imageArray.length;
  swapImage("intro__image", imageArray[imageIndex])
}
setInterval(swapIntroImage, 12000);

function swapImage(elemName, imgName) { 
  // /* Get the current image container */
  // let container = document.querySelector(".intro__image__container");
  // let parent = container.parentElement;

  // /* Add new image container behind current image container  */
  // let newContainer = document.createElement("div");
  // newContainer.classList.add(".intro__image__container", "absolute", "fade-out");
  // parent.insertBefore(newContainer, container);

  // /* Create new image and add it to new image container */
  // let newImage = new Image();
  // newImage.classList.add("intro__image");
  // newContainer.append(newImage);

  // /* Perform cross-fade once new image loads */
  // newImage.onload = () => {

  //   /* Cross fade image containers */
  //   container.classList.add("fade-out");
  //   newContainer.classList.remove("fade-out");

  //   container.addEventListener("transitionend", () => {
  //     /* Remove old image */
  //     container.remove();
  //     /* make new image relative */
  //     newContainer.classList.remove("absolute");
  //   }, { once: true });
  // }
  
  // var imageContainer = document.querySelector(".intro__image__container")
  var image = document.querySelector("." + elemName);
  console.log("." + elemName)
  var container = image.parentElement;

  // We add a new image behind our current image
  let newImage = new Image();
  newImage.classList.add(elemName, "fade-out");
  container.insertBefore(newImage, image.nextSibling);

  /* Perform cross-fade once new image loads */
  newImage.onload = () => {  
    /* Cross fade images */
    image.classList.add("transition", "fade-out");
    newImage.classList.add("transition")
    newImage.classList.remove("fade-out");
    image.addEventListener("transitionend", () => { image.remove(); }, {once: true});
  }

  /* Add the image source -> triggers onload */
  newImage.src = imgName
}
