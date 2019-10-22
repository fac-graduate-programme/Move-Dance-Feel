const router = require('express').Router();

const error = require('./error');
const home = require('./home');
const about = require('./about');
const contact = require('./contact');
const generic = require('./generic');


router.get('/', home.get);
router.get('/about', about.get);
router.post('/contact', contact.post);
router.get('/contact', contact.get);

// generic router and 404
router.get('/:endpoint', generic.get);

router.use(error.server);

module.exports = router;
