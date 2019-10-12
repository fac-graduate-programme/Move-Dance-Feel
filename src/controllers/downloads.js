exports.get = (req, res) => {
  res.render('downloads', {
    js: ['domDownloads'],
    css: 'downloads',
  });
};
