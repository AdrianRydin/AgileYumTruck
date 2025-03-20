let i = 0;

function initSlideshow() {
  setInterval(changeImg, 4000);
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
    images.push(`../public/images/landing/landingFood${i}.png`);
    // console.log(images);
  }
  return images;
}

export default initSlideshow();
