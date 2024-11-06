"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./FormInput";
import { Button } from "@/components/ui/button";
import { CreateEmployee, UpdateEmployee } from "../actions/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import CustomButton from "./CustomButton";
export const EmployeeSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email(),
  age: z.union([z.string(), z.number()]).refine((val) => Number(val) > 0, { message: "Age must be greater than 0" }),
});

const EmployeeForm = ({ defaultData }: { defaultData?: z.infer<typeof EmployeeSchema> & any }) => {
  const form = useForm<z.infer<typeof EmployeeSchema>>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: {
      name: defaultData?.name || "",
      email: defaultData?.email || "",
      age: defaultData?.age || 0,
    },
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  console.log(form.formState.errors);
  async function onSubmit(data: z.infer<typeof EmployeeSchema>) {
    startTransition(async () => {
      console.log(data);
      const res = defaultData?._id ? await UpdateEmployee(defaultData?._id, data) : await CreateEmployee(data);
      if (res.success) {
        toast.success(res.message);
        router.refresh();
      } else toast.error(res.error);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" px-6 py-3 space-y-8">
        <h2 className=" text-2xl font-semibold text-white">Add Employee</h2>
        {[
          { name: "name", label: "Name", placeHolder: "Enter your name ..." },
          { name: "email", label: "Email", placeHolder: "Enter your email ..." },
          { name: "age", label: "Age", placeHolder: "Enter your age ...", type: "number" },
        ].map((item, i) => (
          <FormInput {...item} key={i} />
        ))}
        <CustomButton disabled={isPending} text={`${defaultData?._id ? "Update" : "Add"} Employee`} />
      </form>
    </Form>
  );
};

export default EmployeeForm;
