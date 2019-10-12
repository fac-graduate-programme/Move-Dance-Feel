exports.get = (req, res) => {
    res.render('about', {
      js: ['domAbout'],
      css: 'about',
    });
  };
