const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;

router.get('/health/db', (req, res) => {
  res.json({ status: 'ok', db: 'connected' });
});
