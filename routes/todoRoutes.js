const express = require('express')
const router = express.Router()

const { registerUser, singninUser } = require('../controller/userController')

router.route('/register').post(registerUser)
router.route('/signin').post(singninUser)
module.exports = router
