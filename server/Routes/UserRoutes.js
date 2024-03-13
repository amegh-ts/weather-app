const { signUp } = require('../Controller/UserController')
const router = require('express').Router()

// signup
router.post('/signup',signUp)


module.exports = router
