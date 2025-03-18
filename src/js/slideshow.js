let i = 0;
initSlider();

function initSlider() {
  setInterval(changeImg, 7000);
}

function changeImg() {
  const slide = document.querySelector('#slide');
  const images = getImgArr();
    slide.style.opacity = 0.8;
  setTimeout(() => {
    i = (i + 1) % images.length;
    slide.src = images[i];
    slide.style.opacity = 1;
  }, 500);
}

function getImgArr() {
  const images = [];
  for (let i = 1; i < 6; i++) {
    images.push(`./public/images/landing/landingFood${i}.png`);
  }
  return images;
}
