const formContactUs = document.querySelector('.booking--contactUs-form');
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

});

