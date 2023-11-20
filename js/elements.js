// class Header extends HTMLElement {
//   constructor() { super(); }

//   connectedCallback() {
//     this.innerHTML = 
//     `<header>
//       <button class="nav-toggle" aria-label="toggle navigation">
//       <span class="burger"></span>
//         </button>
//         <nav class="nav">
//         <ul class="nav__list">
//           <li class="nav__item"><a href="index.html" class="nav__link">Home</a></li>
//           <li class="nav__item"><a href="about.html" class="nav__link">About</a></li>
//           <li class="nav__item"><a href="index.html#projects" class="nav__link">Portfolio</a></li>
//           <li class="nav__item"><a href="gradients.html" class="nav__link">Colours</a></li>
//           <li class="nav__item"><a href="resume/GiesenLoo_CVEN21.pdf" class="nav__link">CV</a></li>
//         </ul>
//       </nav>
//     </header>`;
//   }
// }
// customElements.define('header-component', Header);

document.getElementById("header").innerHTML = 
  `<header>
    <button class="nav-toggle" aria-label="toggle navigation">
      <span class="burger"></span>
    </button>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="index.html" class="nav__link">Home</a></li>
        <li class="nav__item"><a href="about.html" class="nav__link">About</a></li>
        <li class="nav__item"><a href="index.html#projects" class="nav__link">Portfolio</a></li>
        <li class="nav__item"><a href="gradients.html" class="nav__link">Colours</a></li>
        <li class="nav__item"><a href="resume/GiesenLoo_CVEN21.pdf" class="nav__link">CV</a></li>
      </ul>
    </nav>
  </header>`;

document.getElementById("social").innerHTML =
  `<ul class="social">
    <li><a class="social__link" href="mailto:erik.giesenloo@gmail.com"><i class="fab fa-envelope"></i></a></li>
    <li><a class="social__link" href="https://www.linkedin.com/in/erik-giesen-loo/"><i class="fab fa-linkedin"></i></a></li>
    <li><a class="social__link" href="https://github.com/erikjloo"><i class="fab fa-github"></i></a></li>
  </ul>`;

document.getElementById("footer").innerHTML = 
  `<footer class="footer">
    <a href="mailto:erik.giesenloo@gmail.com" class="social__link">erik.giesenloo@gmail.com</a>
    <ul class="social__list">
      <li><a class="social__link" href="mailto:erik.giesenloo@gmail.com"><i class="fab fa-envelope"></i></a></li>
      <li><a class="social__link" href="https://www.linkedin.com/in/erik-giesen-loo/"><i class="fab fa-linkedin"></i></a></li>
      <li><a class="social__link" href="https://github.com/erikjloo"><i class="fab fa-github"></i></a></li>
    </ul>
  </footer>`;