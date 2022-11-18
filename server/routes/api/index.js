const router = require('express').Router();
const employeeRoutes = require('./employee-routes');
const reviewRoutes = require('./review-routes');

router.use('/employee', employeeRoutes);
router.use('/review', reviewRoutes);
module.exports = router;