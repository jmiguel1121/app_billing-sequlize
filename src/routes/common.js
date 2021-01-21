const router = require('express').Router();
const commonCtl = require('./../controllers/common-controller');


// routes
router.get('/', commonCtl.test);

module.exports = router;
