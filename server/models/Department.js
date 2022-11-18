const { Schema, model } = require("mongoose");

const DepartmentSchema = new Schema({
  name: { type: String }
},
{
  timestamps: true
});

const Department = model("Department", DepartmentSchema);
module.exports = Department;