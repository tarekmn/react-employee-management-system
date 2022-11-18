const router = require('express').Router()

const { 
  getAllReviews, 
  getReviewById, 
  createReview
} = require('../../controllers/review-controller')

// Declare the routes that point to the controllers above
router.route('/').get(getAllReviews)
router.route('/').post(createReview)

router.route('/:id').get(getReviewById)

module.exports = router;