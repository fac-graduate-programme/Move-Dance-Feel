
// eslint-disable-next-line no-unused-vars
exports.server = (err, req, res, next) => {
  res.status(500).render('error', {
    status: 500,
    errorMessage: err.message,
  });
};
