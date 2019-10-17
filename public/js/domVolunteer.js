const volunteerForm = document.querySelector('.volunteer--contact-form');

volunteerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const volunteerData = new VolunteerData(volunteerForm);
    const data = {};
    volunteerData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/volunteer-form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
});