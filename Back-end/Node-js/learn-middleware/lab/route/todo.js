const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'GET Todos' });
});
router.post('/', (req, res) => {
  res.json({ message: 'POST Todos' });
});
router.put('/', (req, res) => {
  res.json({ message: 'PUT Todos' });
});
router.delete('/', (req, res) => {
  res.json({ message: 'DELETE Todos' });
});

module.exports = router;
