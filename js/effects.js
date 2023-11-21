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
// Fade-in while scrolling
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
// Cross-fade images
//===========================================================================
function swapImage(elemName, imgName) {
  // Add new image behind current image
  var image = document.querySelector("." + elemName);
  let newImage = document.createElement("img");
  newImage.classList.add(elemName, "invisible");
  image.parentElement.insertBefore(newImage, image.nextSibling);

  /* Cross-fade once new image loads */
  newImage.onload = () => {
    image.classList.add("transition", "invisible");
    newImage.classList.add("transition")
    newImage.classList.remove("invisible");
    image.addEventListener("transitionend", () => { image.remove(); }, { once: true });
  }

  /* Add image source -> triggers onload */
  newImage.src = imgName
}