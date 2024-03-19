"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth, currentUser } from "@clerk/nextjs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InsuranceSchema } from "./schema";
import { z } from "zod";
import { Toaster, toast } from "sonner";
interface InsurancePlan {
  id: string;
  name: string;
  company: string;
  insuranceCost: number;
  benificial: string;
  document: string;
}
export type InsuaranceFormSchema = z.infer<typeof InsuranceSchema>;
const InsurancePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InsuaranceFormSchema>({
    // resolver: zodResolver(ContactFormSchema),
  });

  const { userId } = useAuth();
  useEffect(() => {
    const getInsuranceData = async () => {
      try {
        const response = await fetch(`/api/insurance/${userId}`);
        const data = await response.json();
        setInsurancePlans(data);
      } catch (error) {
        console.error("Error fetching insurance data:", error);
      }
    };
    getInsuranceData();
  }, [userId]);
  const [insurancePlans, setInsurancePlans] = useState<InsurancePlan[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode

  // Function to add a new insurance plan
  const addInsurancePlan = (plan: InsurancePlan) => {
    setInsurancePlans([...insurancePlans, plan]);
  };

  const processForm: SubmitHandler<InsuaranceFormSchema> = async (data) => {
    const response = await fetch("/api/insurance", {
      method: "POST",
      body: JSON.stringify({ ...data, id: userId! }),
    });
    const { success } = await response.json();
    console.log(success);
    if (success) {
      addInsurancePlan({
        ...data,
        id: userId!,
      });
      toast("Data has been sent!");
      reset();
      return;
    }
    toast("Something went wrong!");
    return;
  };
  // Display insurance plans
  const renderInsurancePlans = () => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Policy Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Claim Date</TableHead>
            <TableHead>Benificial</TableHead>
            <TableHead>Document</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {insurancePlans.map((plan, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>{plan.company}</TableCell>
              <TableCell>${plan.insuranceCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start mt-8">
      <div>
        <div
          className={`rounded-lg shadow-lg p-4 ${
            darkMode ? "bg-gray-800" : "bg-white dark:bg-gray-800"
          } border ${
            darkMode
              ? "border-gray-700"
              : "border-gray-200 dark:border-gray-700"
          }`}
        >
          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-800 dark:text-white"
            }`}
          >
            Insurance Plans
          </h2>
          <div className="mb-4">
            {/* Dark mode toggle button */}

            {/* Form to add a new insurance plan */}
            <h3
              className={`text-md font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-800 dark:text-white"
              }`}
            >
              Add New Insurance Plan
            </h3>
            <form onSubmit={handleSubmit(processForm)}>
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Name"
                  className={`rounded-lg border-${
                    darkMode ? "white" : "gray"
                  }-300 p-2 mr-2`}
                  {...register("name", { required: true })}
                />
                <Input
                  type="text"
                  placeholder="company"
                  className={`rounded-lg border-${
                    darkMode ? "white" : "gray"
                  }-300 p-2 mr-2`}
                  {...register("company", { required: true })}
                />
                <Input
                  type="number"
                  placeholder="insuranceCost"
                  step="0.01"
                  className={`rounded-lg border-${
                    darkMode ? "white" : "gray"
                  }-300 p-2 mr-2`}
                  {...register("insuranceCost", { required: true })}
                />
                <Input
                  type="text"
                  placeholder="Benificial"
                  className={`rounded-lg border-${
                    darkMode ? "white" : "gray"
                  }-300 p-2 mr-2`}
                  {...register("benificial", { required: true })}
                />
                <Button
                  type="submit"
                  className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
                    darkMode ? "hover:bg-blue-600" : "hover:bg-blue-400"
                  } focus:outline-none`}
                >
                  Add
                </Button>
              </div>
            </form>
          </div>
          {/* Render existing insurance plans */}
        </div>
      </div>
      <div className="mt-8 lg:w-[80vw]">{renderInsurancePlans()}</div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default InsurancePage;
