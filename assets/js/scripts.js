/***** Init Rellax Parallax *****/
var rellax = new Rellax('.parallax');

/***** Scroll Reveal Animations *****/
window.sr = ScrollReveal();
sr.reveal('.left-slide', {
    origin: 'left',
    distance: '20%'
});
sr.reveal('.bottom-slide', {
    origin: 'bottom',
    distance: '20%'
});
sr.reveal('.top-slide', {
    origin: 'top',
    distance: '20%'
});

/***** Disable Scrolling During Modal *****/
var body = document.querySelector("body");
var modal = document.getElementById("modal-container");

function openModal(){
    body.className += " no-scroll";
    modal.classList.remove("closed");
}

function closeModal(){
    body.classList.remove("no-scroll");
    modal.className += " closed";
}

/***** Copyright Year *****/
var dt = new Date();
var copy = document.getElementById('copy');
copy.innerHTML = dt.getFullYear();
