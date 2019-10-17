const volunteerForm = document.querySelector('.volunteer--contact-form');

volunteerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(volunteerForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
        console.log(data);
    });

    fetch('/volunteer-form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
});