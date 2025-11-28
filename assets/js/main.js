/*==================== SHOW MENU (Mobile) ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navLinks = document.querySelectorAll('.nav__link');

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('nav__menu--open');
        changeIcon();
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('nav__menu--open');
    changeIcon();
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE MENU ICON ====================*/
function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
      navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
      navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the header--scroll class
    if(this.scrollY >= 50) header.classList.add('header--scroll'); 
    else header.classList.remove('header--scroll');
}
window.addEventListener('scroll', scrollHeader);

/*==================== TYPEWRITER EFFECT ====================*/
const typewriterElement = document.getElementById("typewriter");
const texts = [
    "Trusted Domestic Provider",
    "Reliable Domestic Solutions",
    "Your Home Help Partner",
    "Complete Home Care Services"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    if (typewriterElement) {
        typewriterElement.textContent = letter;
    }

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        // Pause before starting the next word
        setTimeout(type, 2000); 
    } else {
        // Typing speed
        setTimeout(type, 100); 
    }
})();

/*==================== CURRENT YEAR ====================*/
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
/* Make sure you have imported ScrollReveal in your HTML before this script */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Animations repeat on scroll up/down
});

// Banner / Hero
sr.reveal('.banner-content');
sr.reveal('.hero__content', {origin: 'left'});
sr.reveal('.hero__img-wrapper', {origin: 'right', delay: 600});

// About
sr.reveal('.about__content', {origin: 'left'});
sr.reveal('.skills__content', {interval: 200, origin: 'bottom'});

// Services
sr.reveal('.section__header');
sr.reveal('.service__card', {interval: 100, distance: '40px'});

// Testimonials
sr.reveal('.review-card', {interval: 100, origin: 'bottom', distance: '50px'});

// Contact
sr.reveal('.contact__content', {origin: 'left'});
sr.reveal('.contact__form-container', {origin: 'right'});
sr.reveal('.footer__content', {origin: 'bottom', delay: 200});