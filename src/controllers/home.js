exports.get = (req, res) => {
  res.render('home', {
    js: ['domHome'],
    css: 'home',
    title: 'Move Dance Feel UK: dance for women affected by cancer',
  });
};
