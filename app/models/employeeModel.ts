import mongoose, { Schema } from "mongoose";
export interface EmployeeProps {
  name: string;
  email: string;
  age: number;
}
const employeeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
export default Employee;
