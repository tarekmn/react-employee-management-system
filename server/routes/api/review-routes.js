const router = require('express').Router()

const {
  getAllReviews,
  getReviewById,
  createReview,
  getReviewByEmployeeId
} = require('../../controllers/review-controller')

// Declare the routes that point to the controllers above
router.route('/').get(getAllReviews)
router.route('/').post(createReview)

router.route('/:id').get(getReviewById)
router.route('/employee/:id').get(getReviewByEmployeeId)

module.exports = router;