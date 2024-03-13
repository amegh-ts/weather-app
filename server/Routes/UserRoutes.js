const { signUp } = require('../Controller/UserController')
const router = require('express').Router()

// signup
router.post('/signup',signUp)
//signin
router.post('/signin', signIn)

module.exports = router
