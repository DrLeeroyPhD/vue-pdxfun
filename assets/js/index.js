Vue.component('navigation', {
  template: 
  `
    <nav class="nav">
        <div class="brand-img nav-left">
          <img src="assets/img/pdxfun_logo.png" />
        </div>
        <div class="nav-right">
          <a href="#" class="nav-item">Inventory</a>
          <a href="#" class="nav-item">About</a>
          <a href="#" class="nav-item">Reviews</a>
        </div>
      </nav>
  `
});


new Vue({
   el: "#app" 
});