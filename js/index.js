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