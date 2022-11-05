const express = require('express')
const router = express.Router()

const { registerUser, singninUser } = require('../controller/userController')
const {
  createTodo,
  updateTodo,
  getAllTodo,
  deleteTodo,
} = require('../controller/todoController')
router.route('/register').post(registerUser)
router.route('/signin').post(singninUser)

router.route('/create-todo').post(createTodo)
router.route('/update-todo/:id').patch(updateTodo)
router.route('/Todo').get(getAllTodo)
router.route('/todo/:id').delete(deleteTodo)
module.exports = router
