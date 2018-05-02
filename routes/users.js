const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.render('users', { title: 'You are so cool' });
});

module.exports = router;
