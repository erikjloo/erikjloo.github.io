document.getElementById("header").innerHTML = 
  `<header>
    <button class="nav-toggle"><span class="burger"></span></button>
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

document.getElementById("footer").innerHTML = 
  `<footer class="footer">
    <ul class="footer__list">
      <li><a class="social__link" href="mailto:erik.giesenloo@gmail.com"><i class="fab fa-envelope"></i></a></li>
      <li><a class="social__link" href="https://www.linkedin.com/in/erik-giesen-loo/"><i class="fab fa-linkedin"></i></a></li>
      <li><a class="social__link" href="https://github.com/erikjloo"><i class="fab fa-github"></i></a></li>
    </ul>
  </footer>`;

document.getElementById("social").innerHTML =
  `<ul class="social">
    <li><a class="social__link" href="mailto:erik.giesenloo@gmail.com"><i class="fab fa-envelope"></i></a></li>
    <li><a class="social__link" href="https://www.linkedin.com/in/erik-giesen-loo/"><i class="fab fa-linkedin"></i></a></li>
    <li><a class="social__link" href="https://github.com/erikjloo"><i class="fab fa-github"></i></a></li>
  </ul>`;

// class Social extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.innerHTML =
//       `<ul class="social">
//         <li><a class="social__link" href="mailto:erik.giesenloo@gmail.com"><i class="fab fa-envelope"></i></a></li>
//         <li><a class="social__link" href="https://www.linkedin.com/in/erik-giesen-loo/"><i class="fab fa-linkedin"></i></a></li>
//         <li><a class="social__link" href="https://github.com/erikjloo"><i class="fab fa-github"></i></a></li>
//       </ul>`;
//   }
// }
// customElements.define('my-social', Social);

class Scoocher extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    
    // this.leftButton = document.createElement("button")
    // this.leftButton.classList.add("scoocher__button")
    // this.rightButton = document.createElement("button")

    this.innerHTML = 
      `<div class="scoocher">
        <button class="scoocher__button" onclick="decrement()"> - </button>
        <input id="pickerCount" type="text" class="scoocher__text" value="4" onchange="setPickerCount()">
          <button class="scoocher__button" onclick="increment()"> + </button>
      </div>`;
  }

  // decrement() {
  //   console.log("decrement");
  // }

  // increment() {
  //   console.log("increment")
  // }
}

customElements.define('my-scoocher', Scoocher);

{/* <a href="mailto:erik.giesenloo@gmail.com" class="social__link">erik.giesenloo@gmail.com</a> */}