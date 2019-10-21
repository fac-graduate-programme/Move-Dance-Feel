exports.get = (req, res) => {
    res.render('support', {
      js: ['domSupport'],
      css: 'support',
      title: 'Move Dance Feel UK: Support us, be a partner',
    });
  };
  
