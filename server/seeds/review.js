const Mongoose = require("mongoose")
const Review = require("../models/Department")
const connection = require("../config/connection")


const seedReview = [



  {
    _id: new Mongoose.Types.ObjectId("6377bd55a630d379a93d6530"),
    employee: {
      _id: ""
    },
    author: {
      _id: ""
    },
    report: "sdfsd",
    score: 95,
  },

]

const seed = async () => {
  const queryFirst = await Review.find({})
  if (queryFirst && queryFirst.length === 0) {
    console.log("seeding review...")

    const seed = await Promise.all(seedDepartment.map(async (rev) => await Review.create(rev)))

    console.log("seeding done")
    process.exit()
  } else {
    console.log("no seeding needed")
    process.exit()
  }
}


seed();