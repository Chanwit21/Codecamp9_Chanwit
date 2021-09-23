const express = require('express');
const router = express.Router();
const accountController = require('../controller/Account');

router.get('/', accountController.getAllAccount);
router.get('/:id', accountController.getAllAccount);
router.post('/', accountController.createAccount);
router.put('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);
router.get('/customer/:id', accountController.getAccountsByCustomerId);
router.get('/branch/:id', accountController.getAccountsByBranchId);
router.get('/branch/:branchId/customer/:customerId', accountController.getAccountsByBranchIdAndCustomerId);

module.exports = router;
