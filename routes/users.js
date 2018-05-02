var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.render('users', { title: 'You are so cool' });
});

module.exports = router;
