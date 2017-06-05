Vue.component('navigation', {
  template: 
  `
    <nav class="nav" id="home">
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
      <div class="hero-content parallax" data-rellax-speed="-6">
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


new Vue({
   el: "#app",
   data: {
     inventory: {
       wetdry: {
         title: "Slides Wet/Dry",
         src: "assets/img/wetdry.jpg",
         description: ""
       },
       
       splash: {
         title: "Splash Pool",
         src: "assets/img/splash.jpg",
         description: ""
       },
       
       disco: {
         title: "Disco Bounce House",
         src: "assets/img/disco.jpg",
         description: ""
       },
       
       add: {
         title: "Add-Ons",
         src: "assets/img/pump.jpg",
         description: ""
       },
       
       photo: {
         title: "Photo Ops",
         src: "assets/img/photoop.jpg",
         description: ""
       },
       
       deliver: {
         title: "See Where We Deliver",
         src: "assets/img/portland_map.jpg",
         description: "We can deliver further for an additional fee."
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