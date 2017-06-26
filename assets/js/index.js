Vue.component('delivery-modal', {
    template:
    `
        <div id="delivery-modal-container" class="closed">
          <div class="modal-overlay" id="modal-overlay" onclick="closeDeliveryModal()"></div>
  
          <div class="modal" id="modal">
            <button class="close-button" id="close-button" onclick="closeDeliveryModal()">X</button>
            <div class="modal-guts">
                <div class="modal-header">
                  <h1 style="font-size: 1.2em">We deliver throughout the Portland metro area</h1>
                </div>
                <hr>
                <div class="modal-content centered">
                    <a href="assets/img/portland_map.jpg" target="_blank"><img src="assets/img/portland_map.jpg" class="modal-image" /></a>
                    <p class="small">*scroll for more information</p>
                    <p>Drop Off In the Metro Area included in your rental!</p>
                    <p>Deliveries are additional outside of the Portland Metro area, please speak to customer service about your needs.</p>
                    <p>
                        Setup and Tear Down Charges may apply when we must cart items over challenging terrain or over large distances, 
                        please speak to customer service to determine final pricing after reserving your items through the website.
                    </p>
                </div>
                <div class="modal-footer">
                    
                </div>
              
            </div>
          </div>
        </div>
    `
});

Vue.component('email-modal', {
    template:
    `
        <div id="email-form-modal-container" class="closed">
          <div class="modal-overlay" id="modal-overlay" onclick="closeEmailModal()"></div>
  
          <div class="modal" id="modal">
            <button class="close-button" id="close-button" onclick="closeEmailModal()">X</button>
            <div class="modal-guts">
                <div class="modal-header">
                  <h1 style="font-size: 1.2em">Contact Us!</h1>
                </div>
                <hr>
                <div class="modal-content centered">
                    <form class="modal-email-form" action="mailto:Kathryn.@pdxfun.me" method="post" enctype="text/plain">
                      <input type="email" name="" placeholder="Enter Your Email Address" class="address" />
                      <input type="text" name="" placeholder="Subject" class="subject" />
                      <textarea name="message" rows="10" cols="30" placeholder="Message" class="message"></textarea>
                      <input type="submit" value="Invite Me!" class="submit"/>
                    </form>
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
       unicorn: {
         title: "Unicorn Bubble Slide",
         src: "assets/img/unicorn_bubble_slide.jpg",
         description: `
            Our premiere visionary item, the Unicorn Mountain Slide can be a bouncy waterless slide or simply hooked up to a standard
            garden hose to add water misting from the archway on down the slide! Comes with a built-in bubble machine - because it's magical!
         `,
         size: `
            <em>Size:</em> 22.3' wide x 15.5' tall
         `,
         name: "unicorn",
         button: "Reserve Now!",
         link: "https://www.genbook.com/bookings/slot/reservation/30396544/2553778441"
       },
       
        mondo: {
            title: "PDX Mondo Slide",
            src: "assets/img/pdx_mondo_slide.jpg",
            description: `
                Great for higher volume parties, or night time events, this massive slide has
                programmable detachable LED lights and can be use wet or dry; a standard garden hose adds water misting
                from each of the archways. Pair with our 15 by 15 foot pool to create more splashdown effect!
            `,
            name: "mondo",
            button: "Coming Soon!",
            classes: "coming",
            /*
            link: "https://www.genbook.com/bookings/slot/reservation/30396544/2553792288"
            */
       },
       
       disco: {
         title: "Interstellar Dance House",
         src: "assets/img/interstellar_dance_house.jpg",
         description: `
            Built with height clearance for all ages, this bouncy Interstellar Dance House includes a bluetooth-enabled stereo
            system and beat-responsive LED disco ball that changes color when synced to your soundtrack of choice - just plug & play.
            `,
         size: `
            <em>Size:</em> 19' wide x 15' tall before adding a Power Up of your choice! <a href="https://www.genbook.com/bookings/slot/reservation/30396544?&category=2553812765" target="_blank">Available here!</a>
         `,
         name: "disco",
         button: "Reserve Now!",
         link: "https://www.genbook.com/bookings/slot/reservation/30396544/2553277305"
       },
       // Toppers hidden until image is available
       /*
       toppers:{
           title: "Themed Toppers",
           src: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/44222_XXX_v2.tif&wid=480&cvt=jpeg",
           description:`
                <strong>Birthday Crown</strong> – make any day especially regal by adding this crown to either our Interstellar Dance House or PDX Party slide <br/><br/>
                <strong>Party POW</strong> – Bring the party started right with the programmable LED lights and super-fun height to the Interstellar Dance House or PDX Party slide - perfect for
                nighttime events!
            `,
           name: "toppers",
           button: "Coming Soon!",
           link: "http://pdx-fun.genbook.com"
       },
       */
       
       splash: {
         title: "Splash Pool",
         src: "assets/img/splash_pool.jpg",
         description: `
            This 15' x 15' Splash Pool is an easy and almost instant party in the yard!... Or, pair it with any of our other inflatables to pump up the fun even further!
         `,
         name: "splash",
         button: "Coming Soon!",
         classes: "coming",
         /*
         link: "https://www.genbook.com/bookings/slot/reservation/30396544/2553355350"
         */
       },
       
       power: {
         title: "Power Ups",
         src: "assets/img/power-up.jpg",
         description: `
            All rentals come with a blower unit and cords for respective display and sound elements.<br>
            When booking, <strong>please</strong> note event site's distance from a standard (120v) plug.<br>
            We will discuss your layout by phone to help ensure everything needed for your event is included!
         `,
         name: "add",
         button: "Reserve Now!",
         link: "https://www.genbook.com/bookings/slot/reservation/30396544?&category=2553830427"
       },
       
       photo: {
         title: "Photo Ops",
         src: "assets/img/photo-ops.jpg",
         description: `
            Designed by local Portland artists specifically for PDXFun.me, our super awesome Instagram-ready backdrops bring that extra
            pizazz to your party!
         `,
         name: "photo",
         button: "Coming Soon!",
         classes: "coming",
         /*
         link: "http://pdx-fun.genbook.com"
         */
       },
       
       deliver: {
         title: "See Where We Deliver",
         src: "assets/img/portland_map_cover.jpg",
         description: "Just about anywhere in the Portland Metro area, and we're happy to discuss delivering a bit further, of course. (additional fees may apply)",
         name: "deliver",
         button: "Check it Out!",
         function: "openDeliveryModal()"
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