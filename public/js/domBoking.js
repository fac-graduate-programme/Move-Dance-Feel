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
formContactUs.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formContactUs);
  const dataContactUs = {};
  formData.forEach((value, key) => {
    dataContactUs[key] = value;
  });

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
    })
    .catch(() => {
      popupMassage.textContent = 'error server please try again later';
    });
  return true;

});
poppUpDone.addEventListener('click', (e) => {
  e.preventDefault();
  innerTextRemove(Array.from(inputsContactUs).slice(0, 3));
  popup.classList.remove('popup-show');

});