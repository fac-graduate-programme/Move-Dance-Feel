document.onscroll = () => {
  const nav = document.querySelector('#navbar');
  console.log("test", this.scrollY)
  if(this.scrollY <= 800) {nav.style.backgroundColor = "rgba(255, 255, 255, 0.0)"; nav.style.boxShadow = "none"}else {nav.style.backgroundColor = "#fff"; nav.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.2)"};
};

// Start of slider code
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


  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // eslint-disable-next-line no-plusplus
  slides[slideIndex - 1].style.display = 'block';

}
