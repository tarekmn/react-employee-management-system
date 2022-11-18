const router = require('express').Router()

const { 
  getAllEmployees, 
  getEmployeeById, 
  createEmployee, 
  authenticateLogin, 
  lookupEmployeeByToken 
} = require('../../controllers/employee-controller')

// Declare the routes that point to the controllers above
router.route('/').get(getAllEmployees)
router.route('/').post(createEmployee)

router.route("/auth").post(authenticateLogin)
router.route("/lookup").get(lookupEmployeeByToken)

router.route('/:id').get(getEmployeeById)

module.exports = router;