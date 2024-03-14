const { signUp, signIn, viewProfile } = require('../Controller/UserController')
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken')
const router = require('express').Router()

// signup
router.post('/signup',signUp)
//signin
router.post('/signin', signIn)
// view profile
router.get('/viewprofile/:id', verifyToken, verifyTokenAndAuthorization, viewProfile)

module.exports = router
