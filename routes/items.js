const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ items: [] });
});

module.exports = router;

router.post('/', (req, res) => {
  res.status(501).json({ error: 'Not implemented yet' });
});

router.get('/:id', (req, res) => {
  res.status(501).json({ error: 'Not implemented yet' });
});
