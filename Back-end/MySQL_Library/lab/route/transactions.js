const express = require('express')
const router = express.Router()
const transactionController = require('../controller/transactions')

router.get('/',transactionController.getAllTransaction)
router.get('/:id',transactionController.getTransactionById)
router.post('/',transactionController.createTransaction)
router.put('/:id',transactionController.updateTransaction)
router.delete('/:id',transactionController.deleteTransactions)


module.exports = router