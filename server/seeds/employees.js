const Mongoose = require("mongoose")
const Employee = require("../models/Employee")
const connection = require("../config/connection")

const seedEmployees = [
  { 
    _id: new Mongoose.Types.ObjectId("63779800608be5189d3c6429"),
    fname: "Mary", 
    lname: "Smith", 
    title: "President", 
    address: "123 Pine Street",
    city: "Portland",
    state: "OR",
    zip: "54532",
    email: "msmith@gmail.com", 
    salary: 145000 ,
    staff: [
      new Mongoose.Types.ObjectId("63779ffc346e943464682d7e")
    ],
    isManager: true,
    isAdmin: true,
    password: "msmith"
  },

  { 
    _id: new Mongoose.Types.ObjectId("63779ffc346e943464682d7e"),
    fname: "Joanna", 
    lname: "Johnson", 
    title: "VP, Marketing", 
    address: "9870 Spruce Street",
    city: "Portland",
    state: "OR",
    zip: "54532",
    email: "jjohnsom@gmail.com", 
    salary: 106000 ,
    isManager: true,
    isAdmin: true,
    staff: [
      new Mongoose.Types.ObjectId("63779fa141a7ae104b5f07d3")
    ],
    supervisor: new Mongoose.Types.ObjectId("63779800608be5189d3c6429"),
    password: "jjohnson"
  },

  { 
    _id: new Mongoose.Types.ObjectId("63779fa141a7ae104b5f07d3"),
    fname: "Henry", 
    lname: "Randolph", 
    title: "Marketing Director", 
    address: "9404 Maple Street",
    city: "Portland",
    state: "OR",
    zip: "54532",
    email: "hrandolph@gmail.com", 
    salary: 99000 ,
    isManager: true,
    isAdmin: false,
    supervisor: new Mongoose.Types.ObjectId("63779ffc346e943464682d7e"),
    password: "hrandolph"
  }
]

const seed = async () => {
  const queryFirst = await Employee.find({})
  if( queryFirst && queryFirst.length === 0 ){
    console.log("seeding employees...")

    const seed = await Promise.all(seedEmployees.map( async (emp) => await Employee.create(emp) ) )

    console.log("seeding done")
    process.exit()
  } else {
    console.log("no seeding needed")
    process.exit()
  }
}


seed();