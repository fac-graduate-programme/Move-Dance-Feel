const router = require('express').Router();
const home = require('./downloads');

router.get('/', home.get);


module.exports = router;
