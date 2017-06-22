/***** Init Rellax Parallax *****/
var rellax = new Rellax('.parallax');

/***** Init Smooth Scrolling *****/
smoothScroll.init({
    offset: 80,
    easing: 'easeInOutCubic'
    
});

/***** Init Scroll Reveal *****/
window.sr = ScrollReveal();

/***** Scroll Reveal Animations *****/
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
sr.reveal('.slow-slide', {
    origin: 'bottom',
    distance: '10px',
    duration: '1000',
    opacity: '0',
    scale: '0.8'
});
sr.reveal('.spin', {
    rotate: { x: 180, y: 180, z: 0 },
    duration: '800'
});
sr.reveal('.inflate', {
    origin: 'bottom',
    distance: '0px',
    duration: '1000',
    opacity: '0.5',
    scale: '0',
    easing: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)'
});


/***** Disable Scrolling During Modal *****/
var body = document.querySelector("body");
var deliveryModal = document.getElementById("delivery-modal-container");
var emailModal = document.getElementById("email-form-modal-container");

function openDeliveryModal(){
    // Finds Viewport Width to see if img/modal will fit (temp fix)
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(w <= 700){
        // If doesn't fit, it opens the image in a new tab
        var win = window.open("assets/img/portland_map.jpg", '_blank');
        win.focus();
    } else{
        body.className += " no-scroll";
        deliveryModal.classList.remove("closed");
    }
}

function closeDeliveryModal(){
    body.classList.remove("no-scroll");
    deliveryModal.className += " closed";
}

function openEmailModal(){
    body.className += " no-scroll";
    emailModal.classList.remove("closed");
}

function closeEmailModal(){
    body.classList.remove("no-scroll");
    emailModal.className += " closed";
}

/***** Copyright Year *****/
var dt = new Date();
var copy = document.getElementById('copy');
copy.innerHTML = dt.getFullYear();

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

