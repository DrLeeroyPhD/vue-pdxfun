Vue.component('modal', {
    template:
    `
        <div id="modal-container" class="closed">
          <div class="modal-overlay" id="modal-overlay" onclick="closeModal()"></div>
  
          <div class="modal" id="modal">
            <button class="close-button" id="close-button" onclick="closeModal()">X</button>
            <div class="modal-guts">
                <div class="modal-header">
                  <h1 style="font-size: 1.2em">We deliver throughout the Portland metro area</h1>
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
            Our premiere visionary item, the Unicorn Mountain Slide can be a bouncy waterless slide or simply hooked up to a standard
            garden hose to add water misting from the archway on down the slide! Comes with a built-in bubble machine - because it's magical!
            22.3' wide x 15.5' tall
         `,
         name: "wetdry",
         button: "Reserve Now!",
         link: "http://pdx-fun.genbook.com"
       },
       
       splash: {
         title: "Splash Pool",
         src: "assets/img/splash.jpg",
         description: `
            This 15' x 15' Splash Pool is an easy and almost instant party in the yard!... Or, pair it with any of our other inflatables to pump up the fun even further!
         `,
         name: "splash",
         button: "Reserve Now!",
         link: "http://pdx-fun.genbook.com"
       },
       
       disco: {
         title: "Interstellar Dance House",
         src: "assets/img/disco.jpg",
         description: `
            Built with height clearance for all ages, this bouncy Interstellar Dance House includes a bluetooth-enabled stereo
            system and beat-responsive LED disco ball that changes color when synced to your soundtrack of choice - just plug & play.
            19' wide x 15' tall before adding a Themed Topper of your choice! (available here) 

// *******************************************  LINK TO TOPPERS NEEDED HERE ^

         `,
         name: "disco",
         button: "Reserve Now!",
         link: "https://www.genbook.com/bookings/slot/reservation/30396544/2553277305"
       },
       toppers:{
           title: "Themed Toppers",
           src: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/44222_XXX_v2.tif&wid=480&cvt=jpeg",
           description:`
                <strong>Birthday Crown</strong> – make any day esepcially regal by adding it to either our Interstellar Dance House or PDX Party slide <br/><br/>
                <strong>Party POW</strong> – Bring the party started right with the programmable LED lights and super-fun height to the Interstellar Dance House or PDX Party slide - perfect for
                nighttime events!
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
            Designed by local Portland artists specifically for PDXFun.me, our super awesome Instagram-ready backdrops bring that extra
            pizazz to your party!
         `,
         name: "photo",
         button: "Reserve Now!",
         link: "http://pdx-fun.genbook.com"
       },
       
       deliver: {
         title: "See Where We Deliver",
         src: "assets/img/portland_map.jpg",
         description: "Just about anywhere in the Portland Metro area, and we're happy to discuss delivering a bit further, of course. (additional fees may apply)",
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