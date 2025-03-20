
import { displayBusinessHours } from './todays-business-hours.js';
import { initSlideshow } from "./slideshow.js"

document.addEventListener('DOMContentLoaded', () => {
  if(document.location.pathname.includes('index.html')) {
    
      // Visa dagens öppetider
      displayBusinessHours();
      // caroussel för index.html
      initSlideshow();

  }

});

