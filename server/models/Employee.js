const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");


const EmployeeSchema = new Schema({


  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  department: {
    type: Types.ObjectId,
    ref: "Department",
  },
  supervisor: {
    type: Types.ObjectId,
    ref: "Employee",
  },
  staff: [{
    type: Types.ObjectId,
    ref: "Employee",
  }],
  review: [{
    type: Types.ObjectId,
    ref: "Review",
  }],
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  isManager: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },



},
  {
    timestamps: true
  });

EmployeeSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this._doc.password, 10)
  next();
});

const Employee = model("Employee", EmployeeSchema);
module.exports = Employee;