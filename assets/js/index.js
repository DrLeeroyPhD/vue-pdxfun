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
            <video autoplay loop class="fillWidth" poster="assets/img/Coverr-flowers.jpg">
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
                  <h1>Where We Deliver</h1>
                </div>
                <hr>
                <div class="modal-content centered">
                    <img src="assets/img/portland_map.jpg" class="modal-image" />
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
         button: "Reserve Now!",
         link: "http://pdx-fun.genbook.com"
       },
       
       splash: {
         title: "Splash Pool",
         src: "assets/img/splash.jpg",
         description: `
            This 15' x 15' pool wading pool creates an easy, and instant, backyard party!.... or pair it with our bounce
            house, or a slide, to plus up the fun!
         `,
         name: "splash",
         button: "Reserve Now!",
         link: "http://pdx-fun.genbook.com"
       },
       
       disco: {
         title: "Disco Bounce House",
         src: "assets/img/disco.jpg",
         description: `
            Built with height clearance for all ages, this bounce house includes a bluetooth-enabled stereo
            system and beat-responsive LED disco ball that changes color when synced to your soundtrack of choice - just plug & play.
            19' x 15' before adding a Themed Topper (available here) 

         `,
         name: "disco",
         button: "Reserve Now!",
         link: "http://pdx-fun.genbook.com"
       },
       toppers:{
           title: "Themed Toppers",
           src: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/44222_XXX_v2.tif&wid=480&cvt=jpeg",
           description:`
                <strong>Birthday Crown</strong> – adds super fun height and birthday theme to our Disco Ball or PDX Party slide <br/><br/>
                <strong>Party POW</strong> – adds flashing lights and height to your rental of Disco Ball or PDX Party slide, great for
                nighttime events.
            `,
           name: "toppers",
           button: "Coming Soon!",
           link: "http://pdx-fun.genbook.com"
       },
       add: {
         title: "Add-Ons",
         src: "assets/img/pump.jpg",
         description: `
            All rentals come with a blower unit and cords for associated display and sound elements. Please consider your event's distance from a standard (120v) plug. 
            <strong>Be sure</strong> to include it on the Rental Form <a href="assets/docs/final_release_waiver.docx" target="_blank">HERE</a> so we can more accurately plan your layout, and ensure 
            that everything you need is included. (eg. Quiet Generators, Electrical Cord, or an extra-long water hose, etc.)
         `,
         name: "add",
         button: "Reserve Now!",
         link: "http://pdx-fun.genbook.com"
       },
       
       photo: {
         title: "Photo Ops",
         src: "assets/img/photoop.jpg",
         description: `
            Created by our talented local artist friends, our super cute Instagram ready backdrops bring extra
            sparkle to your uniquely Portlandesque event.
         `,
         name: "photo",
         button: "Reserve Now!",
         link: "http://pdx-fun.genbook.com"
       },
       
       deliver: {
         title: "See Where We Deliver",
         src: "assets/img/portland_map.jpg",
         description: "We can deliver further for an additional fee.",
         name: "deliver",
         button: "Check it Out!",
         function: "openModal()"
       }
     },
     reviews: {
         danni: {
             name: "Danni",
             src: "assets/img/review1.jpg",
             review: "If anyone can rock a truly Portland-style party inflatables team, it's Kathryn. I believe in this vision of fun; they're the tops!"
         },
         awesome: {
             name: "Awesomesauce McGee",
             src: "assets/img/review2.jpg",
             review: "An open part for kids to splash and play in and there's a slide! That's an awesome mash-up of bouncy house and water park!"
         },
         unicorn: {
             name: "The Unicorn Princess",
             src: "assets/img/review3.jpg",
             review: "Unicorns are just the best! They are magic, so bubbles make sense. Lots of bubbles!"
         },
         lord: {
             name: "Lady Dancypants",
             src: "assets/img/review4.jpg",
             review: "(translated from Latin) I'm almost old enough to go on these, and I do love dance parties!"
         }
     }
   }
});