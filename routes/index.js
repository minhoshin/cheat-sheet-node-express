const express = require('express');
const asyncHandler = require('express-async-handler') // Async Error Handling Middleware for Express
const router = express.Router();

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('index', { title: 'Express' });
}));

module.exports = router;
