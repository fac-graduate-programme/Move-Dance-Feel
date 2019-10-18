const formContactUs = document.querySelector('.booking--contactUs-form');
const inputsContactUs = document.querySelectorAll('.booking-inputs');
const textarea = document.querySelector('.contactUs--formMessage');
const popup = document.querySelector('.popup');
const popupMassage = document.querySelector('.popup--content-message');
const poppUpDone = document.querySelector('.popup--content-Done');
const innerTextRemove = arrayOfElements => arrayOfElements.forEach((element) => {
  // eslint-disable-next-line no-param-reassign
  textarea.value = '';
  element.value = '';
});
const errorMessage = document.querySelector('.error-message-span');
const validateEamil = email => /^[\w.-_%+]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(email);
formContactUs.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formContactUs);
  const dataContactUs = {};
  formData.forEach((value, key) => {
    dataContactUs[key] = value;
  });
  const { email, } = dataContactUs;
  if (!validateEamil(email)) {
    errorMessage.textContent = 'Please enter a valid email';
    return false;
  }
  fetch('/booking-form', {
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

});
poppUpDone.addEventListener('click', (e) => {
  e.preventDefault();
  innerTextRemove(Array.from(inputsContactUs).slice(0, 3));
  popup.classList.remove('popup-show');

});
