exports.get = (req, res) => {
  res.render('downloads', {
    js: ['domDownloads'],
    css: 'downloads',
    title: 'Move Dance Feel UK: information, flyer, download',
  });
};
