const express = require('express');
const router = express.Router();
const branchController = require('../controller/Branch');

router.get('/', branchController.getAllBranch);
router.get('/:id', branchController.getBranchById);
router.post('/', branchController.createBranch);
router.put('/:id', branchController.updateBranch);
router.delete('/:id', branchController.deleteBranch);

module.exports = router;
