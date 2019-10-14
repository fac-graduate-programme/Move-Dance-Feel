exports.get = (req, res) => {
    res.render('volunteer', {
        js: ['domVolunteer'],
        css: 'volunteer',
    });
};