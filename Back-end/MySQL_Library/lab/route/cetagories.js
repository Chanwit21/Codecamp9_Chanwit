const express = require('express');
const router = express.Router();
const cetagoryController = require('../controller/cetagories');

router.get('/', cetagoryController.getAllCetagory);
router.get('/:id', cetagoryController.getCetagoryById);
router.post('/', cetagoryController.createCetagory);
router.put('/:id', cetagoryController.updateCetagory);
router.delete('/:id', cetagoryController.deleteCetagory);

module.exports = router;
