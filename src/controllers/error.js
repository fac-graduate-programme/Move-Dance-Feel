exports.client = (req, res) => {
  res.render('error', {
    status: 404,
    errorMessage: 'Page Not Found',
  });
};
exports.server = (err, req, res) => {
  res.render('error', {
    status: 500,
    errorMessage: err.message,
  });
};
