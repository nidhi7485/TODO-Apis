const Register = require('../model/Register')
const bcrypt = require('bcryptjs')
const registerUser = async (req, res) => {
  try {
    //   console.log(req.body)
    const userRegister = await Register.create(req.body)
    const token = userRegister.createJWT()
    res.status(200).json({ userRegister })
  } catch (error) {
    console.log(error)
  }
}

const singninUser = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.send('Invalid email or password')
    }
    const user = await Register.findOne({ email })
    if (!user) {
      return res.send('Invalid credentials')
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      return res.send('Invalid password')
    }
    console.log(user)
    const token = user.createJWT()
    res
      .status(200)
      .json({ msg: 'successfully signin', user: { name: user.name }, token })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  registerUser,
  singninUser,
}
