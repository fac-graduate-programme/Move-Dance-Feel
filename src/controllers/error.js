exports.client = (req, res) => {
  res.render('error', {
    status: 404,
    errorMessage: 'Page Not Found',
  });
};
// eslint-disable-next-line no-unused-vars
exports.server = (err, req, res, next) => {
  res.render('error', {
    status: 500,
    errorMessage: err.message,
  });
};
