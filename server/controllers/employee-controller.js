const Employee = require("../models/Employee")
const jwt = require("jsonwebtoken")
const cookie = require("cookie")
const bcrypt = require("bcrypt")
const connection = require("../config/connection")

require("dotenv").config()

const createEmployee = async (req, res) => {
  try {
    const createQuery = await Employee.create(req.body);
    res.status(200).json(sample);
  } catch(err) {
    res.status(400).json({ message: 'Unable to create employee' });
  }
}
  
const getAllEmployees = async (req, res) => {
  try {
    const getAllQuery = await Employee.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  } catch(err) {
    res.status(400).json({ message: 'No employees found' });
  }
}

const getEmployeeById = async (req, res) => {
  try {
    const getByIdQuery = await Employee.findById(req.params.id)
    res.status(200).json({ result: "success", payload: getByIdQuery })
  } catch(err) {
    res.status(400).json({ result: "fail", message: 'No employee found by that id' })
  }
}


const authenticateLogin = async (req, res) => {
  const foundEmployee = await Employee.findOne({ email: req.body.email })
  if( !foundEmployee ) return res.status(401).json({ message: "Login failed." })

  const isValid = await bcrypt.compare(req.body.password, foundEmployee.password)
  if( !isValid ) return res.status(401).json({ message: "Login failed." })

  const { password, ...modifiedEmployee } = foundEmployee
  const token = jwt.sign({ _id: foundEmployee._id, email: foundEmployee.email}, process.env.JWT_SECRET)

  res
    .status(200)
    .set({ "auth-token": token })
    .json({ result: "success", employee: modifiedEmployee, token: token })
}


const lookupEmployeeByToken = async (req, res) => {
  if( !req.headers || !req.headers.cookie ) return res.status(401).json({msg: "un-authorized"})
  
  const cookies = cookie.parse(req.headers.cookie)
  const token = cookies["auth-token"]  //cookies.authToken
  if( !token ) return res.status(401).json({msg: "un-authorized"})
  
  const isVerified = jwt.verify(token, process.env.JWT_SECRET)
  if( !isVerified ) return res.status(401).json({msg: "un-authorized"})

  const employee = await Employee.findById(isVerified._id)
  if( !employee ) return res.status(401).json({msg: "un-authorized"})

  return res.status(200).json({ result: "success", payload: employee })
}

module.exports = { 
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  authenticateLogin,
  lookupEmployeeByToken
}