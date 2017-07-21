const express = require('express')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Sign in: POST /auth
router.post('/auth', authMiddleware.authenticateSignIn, authMiddleware.signTokenHandler)

// Registration: POST /auth/register
router.post('/auth/register', authMiddleware.register, authMiddleware.signTokenHandler)

module.exports = router
