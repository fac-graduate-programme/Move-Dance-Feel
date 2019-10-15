const router = require('express').Router();

const error = require('./error');
const home = require('./home');
const about = require('./about');
const events = require('./events');
// const currentEvent = require('./events');
const support = require('./support');
const research = require('./research');
const downloads = require('./downloads');
// const volunteer = require('./volunteer');
// const volunteerForm = require('./volunteerForm');
// const bookingForm = require('./bookingForm');

router.get('/', home.get);
router.get('/about', about.get);
router.get('/events', events.get);
// router.get('/current-events', currentEvent.get);
router.get('/support', support.get);
router.get('/research', research.get);
router.get('/downloads', downloads.get);
// router.get('/contact', contact.get);
// router.get('/volunteer', volunteer.get);
// router.post('/volunteer-form', volunteerForm.post);
// router.post('/booking-form', bookingForm.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
