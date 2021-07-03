const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__link');

navToggle.addEventListener('click', () => {
    console.log("oi");
    console.log(document.querySelector('.nav-open'));
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});