const express = require('express');
const router = express.Router();
const totalBalanceController = require('../controller/TotalBalance');

router.get('/customer', totalBalanceController.byCustomer);
router.get('/branch', totalBalanceController.byBranch);

module.exports = router;
