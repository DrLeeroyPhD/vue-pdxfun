Vue.component('navigation', {
  template: 
  `
    <nav class="nav">
        <a data-scroll href="#home" class="brand-img nav-left">
          <img src="assets/img/pdxfun_logo.png" />
        </a>
        <div class="nav-right">
          <a data-scroll href="#inventory" class="nav-item">Inventory</a>
          <a data-scroll href="#about" class="nav-item">About</a>
          <a data-scroll href="#reviews" class="nav-item">Reviews</a>
        </div>
      </nav>
  `
});

Vue.component('hero', {
  template:
  `
    <section class="hero">
    
        <div class="homepage-hero-module parallax" data-rellax-speed="3">
          <div class="video-container">
            <div class="filter"></div>
            <video autoplay loop class="fillWidth" poster="assets/img/Coverr-flowers.mp4">
              <source src="assets/img/Coverr-flowers.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              <source src="assets/img/Coverr-flowers.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
          </div>
        </div>
    
      <div class="hero-content parallax" data-rellax-speed="-2">
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
         description: `
            Our first visionary item, can be used as a dry slide or hooked up to a standard
            garden hose to add water misting to the archway! Comes with a built in bubble machine, because it’s magical.
            22.3 feet wide by 15.5 feet tall
         `,
         name: "wetdry",
         button: "Reserve Now!"
       },
       
       splash: {
         title: "Splash Pool",
         src: "assets/img/splash.jpg",
         description: `
            This 15 by 15 pool wading pool creates an easy, and instant, backyard party!.... or pair it with our bounce
            house, or a slide, to plus up the fun!
         `,
         name: "splash",
         button: "Reserve Now!"
       },
       
       disco: {
         title: "Disco Bounce House",
         src: "assets/img/disco.jpg",
         description: `
            Built with height clearance for all ages, this bounce house includes a blue tooth speaker
            system and responsive LED disco ball, that reacts to your soundtrack of choice, just plug and play.
            19 Feet Wide by 15 feet tall, without Theme Topper (rented separately)
         `,
         name: "disco",
         button: "Reserve Now!"
       },
       
       add: {
         title: "Add-Ons",
         src: "assets/img/pump.jpg",
         description: `
            All rentals come with a blower unit and cords for respective display and sound elements. Please note how far
            you are from a standard (120v) plug on the rental form, and we will discuss your layout by phone to ensure we
            include everything needed for your rental such as Quiet Generators, Electrical Cord, or a Super long garden hose.
         `,
         name: "add",
         button: "Reserve Now!"
       },
       
       photo: {
         title: "Photo Ops",
         src: "assets/img/photoop.jpg",
         description: `
            Created by our talented local artist friends, our super cute Instagram ready backdrops bring extra
            sparkle to your uniquely Portlandesque event.
         `,
         name: "photo",
         button: "Reserve Now!"
       },
       
       deliver: {
         title: "See Where We Deliver",
         src: "assets/img/portland_map.jpg",
         description: "We can deliver further for an additional fee.",
         name: "deliver",
         button: "Check it Out!"
       }
     },
     reviews: {
         danni: {
             name: "Danni",
             src: "assets/img/review1.jpg",
             review: "If anyone can rock a Portland-esque custom inflatables business, it's Kathryn. I believe in this vision!"
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