exports.get = (req, res) => {
  res.render('home', {
    js: ['domHome'],
    css: 'home',
  });
};
