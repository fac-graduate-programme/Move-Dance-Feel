exports.get = (req, res) => {
  res.render('events', {
    js: ['domEvents'],
    css: 'events',
  });
};
