//===========================================================================
// header functions
//===========================================================================
window.onscroll = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    document.body.classList.add('nav-close');
  else
    document.body.classList.remove('nav-close');
};

document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.body.classList.toggle('nav-close');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.add('nav-close');
  })
});

//===========================================================================
// Fade-in
//===========================================================================
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');   // Fade-in
    appearOnScroll.unobserve(entry.target); // Stop checking for fade-in
  })
}, { threshold: 0, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.fade-in').forEach(fader => {
  appearOnScroll.observe(fader);
})

//===========================================================================
// swapImage
//===========================================================================
function swapImage(elemName, imgName) {
  var image = document.querySelector("." + elemName);
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
    image.addEventListener("transitionend", () => { image.remove(); }, { once: true });
  }

  /* Add the image source -> triggers onload */
  newImage.src = imgName
}