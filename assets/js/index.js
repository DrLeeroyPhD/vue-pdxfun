Vue.component('navigation', {
  template: 
  `
    <nav class="nav">
        <a href="#home" class="brand-img nav-left">
          <img src="assets/img/pdxfun_logo.png" />
        </a>
        <div class="nav-right">
          <a href="#inventory" class="nav-item">Inventory</a>
          <a href="#about" class="nav-item">About</a>
          <a href="#reviews" class="nav-item">Reviews</a>
        </div>
      </nav>
  `
});

Vue.component('hero', {
  template:
  `
    <section class="hero">
    
        <div class="homepage-hero-module">
          <div class="video-container">
            <div class="filter"></div>
            <video autoplay loop class="fillWidth" poster="assets/img/Coverr-flowers.mp4">
              <source src="assets/img/Coverr-flowers.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              <source src="assets/img/Coverr-flowers.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
          </div>
        </div>
    
      <div class="hero-content parallax" data-rellax-speed="3">
        <h1 class="title">
          Pump Up The Fun!
        </h1>
        <h3 class="subtitle">
          Sign up for Inventory Alerts, we are expanding in real time!
        </h3>
        <form class="cta">
          <input type="email" name="" placeholder="Enter Your Email Address" class="cta-email" />
          <input type="submit" value="Invite Me!" class="cta-submit is-primary"/>
        </form>
      </div>
    </section>
  `
});

Vue.component('modal', {
    template:
    `
        <div id="modal-container" class="closed">
          <div class="modal-overlay" id="modal-overlay" onclick="closeModal()"></div>
  
          <div class="modal" id="modal">
            <button class="close-button" id="close-button" onclick="closeModal()">X</button>
            <div class="modal-guts">
                <div class="modal-header">
                  <h1>Modal Example</h1>
                </div>
                <hr>
                <div class="modal-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt semper ultricies.
                        Duis luctus, ligula id gravida finibus, metus mi laoreet erat, nec bibendum dolor orci vitae nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
                <div class="modal-footer">
                    
                </div>
              
            </div>
          </div>
        </div>
    `
});


new Vue({
   el: "#app",
   data: {
     inventory: {
       wetdry: {
         title: "Slides Wet/Dry",
         src: "assets/img/wetdry.jpg",
         description: "",
         name: "wetdry"
       },
       
       splash: {
         title: "Splash Pool",
         src: "assets/img/splash.jpg",
         description: "",
         name: "splash"
       },
       
       disco: {
         title: "Disco Bounce House",
         src: "assets/img/disco.jpg",
         description: "",
         name: "disco"
       },
       
       add: {
         title: "Add-Ons",
         src: "assets/img/pump.jpg",
         description: "",
         name: "add"
       },
       
       photo: {
         title: "Photo Ops",
         src: "assets/img/photoop.jpg",
         name: "photo"
       },
       
       deliver: {
         title: "See Where We Deliver",
         src: "assets/img/portland_map.jpg",
         description: "We can deliver further for an additional fee.",
         name: "deliver"
       }
     },
     reviews: {
         michael: {
             name: "Michael Robson",
             src: "assets/img/review1.jpg",
             review: "Look at those inflatables, I mean, need I say more?"
         },
         pete: {
             name: "Pete Ford",
             src: "assets/img/review2.jpg",
             review: "Kathryn's inflatables literally saved my life. I travelled by plane with one in my backpack, and when the plane spontaneously combusted, Kathryn's blow-up unicorn kept me afloat. Delta lost a customer that day and Kathryn gained one for life."
         },
         angelica: {
             name: "Angelica Finning",
             src: "assets/img/review3.jpg",
             review: "I can't decide which is better, the inflatables Kathryn provides or her and her family's great smiles!!!"
         }
     }
   }
});