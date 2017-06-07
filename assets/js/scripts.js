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

/***** Copyright Year *****/
var dt = new Date();
var copy = document.getElementById('copy');
copy.innerHTML = dt.getFullYear();