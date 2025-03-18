import { displayBusinessHours } from './todays-business-hours.js';
import { initSlideshow } from './slideshow.js';

document.addEventListener('DOMContentLoaded', () => {
  // Visa dagens öppetider
  displayBusinessHours();
  // caroussel för index.html
  initSlideshow();
  // spara bilderna i en array
  // set timer och byt bild efter timer är slut
  // matmeny antal mat
  // Gör att span.textContent ökar eller minskar när man trycker på + eller -
  // spara antalet som man väljer i #count på mat meny
  // return antal
  // matmeny mat
  // spara matval i en array
  // hämta antal från förra funktionen och lägg till det i array
  // spara array i localStorage
  // kundvagn
  // ankalla funktionen clearContainer()
  // Hämta matval array från localStorage
  // kundvagn antal mat
  // vid tryck på + eller - hämta värdet av det matvalet och gör -1 eller +1
  // spara nya värdet i localStorage
  // visa totalpris
  // (matval2[i].price * matval2[i].amount)
  // bokningsbekräftelse SKAPA INLOGGNING/REGISTRERING FÖRST
  // Skapa refensnummer till den individuella beställnigen
  // Referensnummret blir +1 för varje beställning
  // OM man är inloggad, spara beställningen i localStorage för användaren i orders
  // kvitto
  // Hämta beställningen från localStorage
  // Visa pris, namn på produkten/produkter, antal för varje produkt, totalpris och referensnummret
});
