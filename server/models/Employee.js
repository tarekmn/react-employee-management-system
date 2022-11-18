const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

const EmployeeSchema = new Schema({

},
{
  timestamps: true
});

EmployeeSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this._doc.password, 10)
  next();
});

const Employee = model("Employee", EmployeeSchema);
module.exports = Employee;