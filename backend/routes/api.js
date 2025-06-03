const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Calvin Youth Academy API',
    version: '1.0.0',
    status: 'running'
  });
});

module.exports = router;
