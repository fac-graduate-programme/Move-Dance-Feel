exports.get = (req, res) => {
    res.render('research', {
      js: ['domResearch'],
      css: 'research',
    });
  };
  