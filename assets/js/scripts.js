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

/***** Modal *****/
var modal = document.getElementById("modal-container");
var closeButton = document.getElementById("close-button");
var openButton = document.querySelectorAll(".open-button");

