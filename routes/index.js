const express = require('express');
const router = express.Router();

router.use('/services', require('./services'));
router.use('/appointments', require('./appointments'));

module.exports = router;