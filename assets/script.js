const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

let index = 0;
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const dots = document.querySelector('.dots');

arrowLeft.addEventListener('click', () => {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
});

arrowRight.addEventListener('click', () => {
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
});

for (let i = 0; i <= slides.length - 1; i++) {
  const dot = document.createElement('div');
  if (i === index) {
    dot.className = 'dot dot_selected';
  } else {
    dot.className = 'dot';
  }
  dots.appendChild(dot);
}
