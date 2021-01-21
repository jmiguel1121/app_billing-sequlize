const router = require('express').Router();
const customerCtl = require('./../controllers/customer-controller');

// routes
router.get('/customer', customerCtl.getCustomer);

module.exports = router;