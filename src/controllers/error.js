
// eslint-disable-next-line no-unused-vars
exports.server = (err, req, res, next) => {
  res.status(500).render('error', {
    status: "500 server error",
    errorMessage: "Sorry something went wrong on our end. Could you please try again? If the error persist please get in contact.",
  });
};
