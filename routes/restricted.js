import pagetitle from index;

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('restricted', {user: req.session.user, title: pagetitle()});
});

module.exports = router;
