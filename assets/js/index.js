Vue.component('navigation', {
    template: `
    <nav class="nav has-shadow">
        <div class="nav-left">
          <a class="nav-item">
            <img src="assets/img/pdxfun_logo.png" alt="PDX Fun logo" style="height: 90px;">
          </a>
        </div>
      
      
        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
      
        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div class="nav-right nav-menu">
          <a class="nav-item">
            Inventory
          </a>
          <a class="nav-item">
            About
          </a>
          <a class="nav-item">
            Reviews
          </a>
        </div>
      </nav>
    `
});

new Vue({
   el: "#app" 
});