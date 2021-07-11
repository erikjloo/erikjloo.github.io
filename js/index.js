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
var image = document.querySelector(".intro__image");
var imageArray = ["./images/backgrounds/panorama1.jpg", 
                  "./images/backgrounds/panorama2.jpg",
                  "./images/backgrounds/panorama3.jpg",
                  "./images/backgrounds/panorama4.jpg",
                  "./images/backgrounds/panorama5.jpg"]

var imageIndex = 0;

// function swapImage() {

//     var newImage = imageArray[imageIndex];
//     image.animate({opacity: 0}, function() { imageSwapTidyUp(newImage) });
//     // imageContainer.setAttribute("background-image", 'url(' + newImage + ')');
//     // imageContainer.data('index', imageIndex);
//     image.setAttribute("src", newImage);
//     imageIndex++;
//     if (imageIndex >= imageArray.length) {
//         imageIndex = 0;
//     }
// }
// function imageSwapTidyUp(newImage) {
//     // Change img src to new image
//     image.prop('src', newImage);
//     // Make img opaque
//     image.animate({ opacity: 1 }, 100);
// }

// setInterval(swapImage, 3000);

// (function() {
//     "use strict";

//     function swapImage(newIndex, preload) {
//         var newImage;

//         if (!image.is(':animated')) {
//             newImage = imageArray[newIndex];
//             // Set background-image to new image
//             image.setAttribute("src", imageArray[newIndex]);

//             // If this is a preload, we should 
//             if (!preload) {
//                 //Set data-index to the new index value
//                 imageContainer.data('index', newIndex);

//                 // Fade old image
//                 imageContainer.find('img').animate({ opacity: 0 }, function () {
//                     //** Callback upon fade animation completed **/
//                     imageSwapTidyUp(newImage);
//                 });
//             }
//         }
//     }
