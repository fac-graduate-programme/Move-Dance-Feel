
// eslint-disable-next-line no-unused-vars
exports.server = (err, req, res, next) => {
  res.render('error', {
    status: 500,
    errorMessage: err.message,
  });
};
