const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

router.get('/about', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

router.get('/portfolio', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

router.get('/imprint', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

router.get('/blog', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

module.exports = router;
