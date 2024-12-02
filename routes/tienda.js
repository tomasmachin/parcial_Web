import pagetitle from index;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tienda', {user:req.session.user, title: pagetitle()});
});

module.exports = router;
