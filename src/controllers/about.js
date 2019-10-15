const currentEvents = require('../utils/currentEvents');

exports.get = async (req, res, next) => {
  try {
    const data = await currentEvents();
    // will remove the console.log when I have connected it to the frontend
    console.log(data);
    res.render('about', {
      js: ['domAbout'],
      css: 'about',
      data: data
    });
  } catch (e) {
    next(e);
  }
};
