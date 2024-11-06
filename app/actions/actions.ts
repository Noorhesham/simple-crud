"use server";
import { EmployeeSchema } from "./../components/EmployeeForm";
import Employee, { EmployeeProps } from "../models/employeeModel";
import connect from "../utils/connect";
import { z } from "zod";

export const CreateEmployee = async (data: z.infer<typeof EmployeeSchema>) => {
  try {
    await connect();
    const employee = await Employee.create(data);
    console.log(employee);
    if (!employee) throw new Error("Failed to create employee");
    const EmployeeObj = JSON.parse(JSON.stringify(employee));
    return { data: { EmployeeObj }, success: true, message: "Employee created successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to create employee" };
  }
};
export const UpdateEmployee = async (id: string, data: z.infer<typeof EmployeeSchema>) => {
  try {
    await connect();
    const employee = await Employee.findByIdAndUpdate(id, data);
    if (!employee) throw new Error("Failed to create employee");
    const EmployeeObj = JSON.parse(JSON.stringify(employee));
    return { data: { EmployeeObj }, success: true, message: "Employee Updated successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update employee" };
  }
};
export const DeleteEmployee = async (id: string) => {
  try {
    await connect();
    const employee = await Employee.deleteOne({ _id: id });

    return { success: true, message: "Employee deleted successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete employee" };
  }
};
