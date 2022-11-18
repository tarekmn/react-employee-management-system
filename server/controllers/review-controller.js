const Review = require("../models/Review")
const connection = require("../config/connection")

require("dotenv").config()

const createReview = async (req, res) => {
  try {
    const createQuery = await Review.create(req.body);
    res.status(200).json(sample);
  } catch (err) {
    res.status(400).json({ message: 'Unable to create Review' });
  }
}

const getAllReviews = async (req, res) => {
  try {
    const getAllQuery = await Review.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  } catch (err) {
    res.status(400).json({ message: 'No reviews found' });
  }
}

const getReviewById = async (req, res) => {
  try {
    const getByIdQuery = await Review.findById(req.params.id)
    res.status(200).json({ result: "success", payload: getByIdQuery })
  } catch (err) {
    res.status(400).json({ result: "fail", message: 'No review found by that id' })
  }
}

const getReviewByEmployeeId = async (req, res) => {
  try {
    const reviewsByEmployee = await Review.find({
      employee: {
        _id: req.params.id
      }
    })
    res.status(200).json({ result: "success", payload: reviewsByEmployee })
  } catch (err) {
    res.status(400).json({ result: "fail", message: 'No employees found by that supervisor id' })
  }
}

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  getReviewByEmployeeId
}