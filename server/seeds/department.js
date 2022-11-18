const Mongoose = require("mongoose")
const Department = require("../models/Department")
const connection = require("../config/connection")


const seedDepartment = [



  {
    _id: new Mongoose.Types.ObjectId("6377bc1663a922b710b2f253"),
    name: "Executive"
  },
  {
    _id: new Mongoose.Types.ObjectId("6377bc4c512483df2d0fda97"),
    name: "HR"
  },
  {
    _id: new Mongoose.Types.ObjectId("6377bc546c0a68c13b7d43b3"),
    name: "Marketing"
  },
  {
    _id: new Mongoose.Types.ObjectId("6377bc5b0ef219100768e734"),
    name: "Sales"
  },
  {
    _id: new Mongoose.Types.ObjectId("6377bc61153cf30a18ebc552"),
    name: "Development"
  }

]

const seed = async () => {
  const queryFirst = await Department.find({})
  if (queryFirst && queryFirst.length === 0) {
    console.log("seeding department...")

    const seed = await Promise.all(seedDepartment.map(async (dep) => await Department.create(dep)))

    console.log("seeding done")
    process.exit()
  } else {
    console.log("no seeding needed")
    process.exit()
  }
}


seed();