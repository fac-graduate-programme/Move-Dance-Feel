const formContactUs = document.querySelector('.booking--contactUs-form');

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

    .then((res) => {
      if (res.msg === 'done') {
        console.log(88888888);
      } else if (res.msg === 'inputs not validate') {
        console.log(9999999);
      } else {
        console.log(777777777);
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return true;
});
