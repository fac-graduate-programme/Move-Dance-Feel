const currentEvents = require('../utils/currentEvents');

exports.get = async (req, res, next) => {
  try {
    const data = await currentEvents();
    res.render('about', {
      js: ['domAbout'],
      css: 'about',
      data,
    });
  } catch (e) {
    next(e);
  }
};
