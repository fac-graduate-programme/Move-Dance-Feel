const endpoints = [
  'downloads',
  'events',
  'gallery',
  'research',
  'support',
];

const seo = [
  'Move Dance Feel UK: information, flyer, download',
  'Move Dance Feel UK: Support us, be a partner',
  'Move Dance Feel UK: images and videos',
  'Move Dance Feel UK: Research, reports & evidence',
  'Move Dance Feel UK: Support us, be a partner',
];

exports.get = (req, res) => {
  const { endpoint } = req.params;
  const position = endpoints.indexOf(endpoint);

  if (position !== -1) {
    const capitalisedEndpoint = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);
    res.render(endpoint, {
      js: [`dom${capitalisedEndpoint}`],
      css: endpoint,
      title: seo[position],
    });
  } else {
    res.render('error', {
      status: 404,
      errorMessage: 'Page Not Found',
    });
  }
};
