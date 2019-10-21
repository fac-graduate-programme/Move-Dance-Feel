const popup = document.querySelector('.popup');
const inputsContactUs = document.querySelectorAll('.contact-inputs');
const popupMassage = document.querySelector('.popup--content-message');
const poppUpDone = document.querySelector('.popup--content-Done');
const textarea = document.querySelector('.contactUs--formMessage');
const errorMessage = document.querySelector('.error-message-span');



function show2() {
  document.getElementById('booking').style.display = 'block';
  document.getElementById('Volunteer').style.display = 'none';

}
function show1() {
  document.getElementById('booking').style.display = 'none';
  document.getElementById('Volunteer').style.display = 'block';
}

const innerTextRemove = arrayOfElements => arrayOfElements.forEach((element) => {
  // eslint-disable-next-line no-param-reassign
  textarea.value = '';
  element.value = '';
});

const validateEamil = email => /^[\w.-_%+]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(email);



document.addEventListener('submit', function (event) {
  if (event.target.classList.contains('contact--contactUs-form')) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataContactUs = {};
    formData.forEach((value, key) => {
      dataContactUs[key] = value;
    });
    const { email, } = dataContactUs;
    if (!validateEamil(email)) {
      errorMessage.textContent = 'Please enter a valid email';
      return false;
    }
    console.log({dataContactUs})
    fetch('/contact',
      {
        method: 'POST',
        body: JSON.stringify(dataContactUs),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then((res) => {
        if (res.msg === 'done') {
          popup.classList.add('popup-show');
          popupMassage.textContent = 'We received your message, we will send you our response soon.';
        }
        else if (res.msg === 'not done') {
          popup.classList.add('popup-show');
          popupMassage.textContent = 'We dont received your message, enternet connection off or server error please try again later.';
        }
      })
      .catch(() => {
        popup.classList.add('popup-show');
        popupMassage.textContent = 'please try again and enter validate values';
      });
    return true;

  }
}, false);


poppUpDone.addEventListener('click', (e) => {
  e.preventDefault();
  innerTextRemove(Array.from(inputsContactUs));
  popup.classList.remove('popup-show');

});
