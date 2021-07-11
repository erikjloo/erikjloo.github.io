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