const formContactUs = document.querySelector('.contact--contactUs-form');
function show2() {
  document.getElementById('booking').style.display = 'block';
  document.getElementById('Volunteer').style.display = 'none';

}
function show1() {
  document.getElementById('booking').style.display = 'none';
  document.getElementById('Volunteer').style.display = 'block';
}
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
});
