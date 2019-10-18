exports.get = (req, res) => {
  res.render('support', {
    js: ['domSupport'],
    css: 'support',
  });
};
