exports.get = (req, res) => {
  res.render('events', {
    js: ['domEvents'],
    css: 'events',
    title: 'Move Dance Feel UK: events, where & when',
  });
};
