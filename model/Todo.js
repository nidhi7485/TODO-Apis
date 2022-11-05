const mongoose = require('mongoose')
const Register = require('../model/Register')
const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'Register',
      required: [true, 'please provide user'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Todo', todoSchema)
