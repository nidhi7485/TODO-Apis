const Todo = require('../model/Todo')

const createTodo = async (req, res) => {
  // console.log(req.body)
  try {
    const todo = await Todo.create(req.body)
    console.log(req.body)
    res.json({ todo })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTodo = async (req, res) => {
  try {
    // console.log(req.params)
    const { id: todoID } = req.params
    const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!todo) {
      return res.status(404).json({ msg: `no task found of this ${todoId}` })
    }
    res.status(200).json({ todo })
  } catch (error) {
    console.log(error)
  }
}

const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find()
    console.log(todo)
    res.status(200).json({ todo })
  } catch (error) {
    console.log(error)
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params
    const todo = await Todo.findOneAndDelete({ _id: todoId })
    if (!todo) {
      return res.status(404).json({ msg: `no task found of this ${todoId}` })
    }
    res.status(200).json({ msg: 'deleted successfuly', todo })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createTodo,
  updateTodo,
  getAllTodo,
  deleteTodo,
}
