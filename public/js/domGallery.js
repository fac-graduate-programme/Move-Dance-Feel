let slideIndex = 1;
// eslint-disable-next-line no-use-before-define
showSlides(slideIndex);

// eslint-disable-next-line no-unused-vars
function plusSlides(n) {
  // eslint-disable-next-line no-use-before-define
  showSlides(slideIndex += n);
}

// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
  // eslint-disable-next-line no-use-before-define
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slider-image');
  const dots = document.getElementsByClassName('demo');

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  // eslint-disable-next-line no-plusplus
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
