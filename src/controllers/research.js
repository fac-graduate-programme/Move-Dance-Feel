exports.get = (req, res) => {
  res.render('research', {
    js: ['domResearch'],
    css: 'research',
    title: 'Move Dance Feel UK: Research, reports & evidence',
  });
};
