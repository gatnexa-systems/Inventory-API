// TODO: implement JWT auth
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.status(501).json({ error: 'Not implemented yet' });
});

module.exports = router;
