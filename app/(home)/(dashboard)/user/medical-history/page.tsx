"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { useAuth, currentUser } from "@clerk/nextjs";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "sonner";
import { error } from "console";
interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
  medication: string;
}
const MedicalRecordSchema = z.object({
  date: z.string(),
  diagnosis: z.string().min(2, "Please Elaborate on the diagnosis"),
  medication: z.string().min(2, "Please Elaborate on the medication"),
});

export type MedicalRecordFormSchema = z.infer<typeof MedicalRecordSchema>;

const MedicalHistory: React.FC = () => {
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

  // Function to toggle dark mode

  // Function to add a new medical record
  const addMedicalRecord = (record: MedicalRecord) => {
    setMedicalRecords([...medicalRecords, record]);
  };
  // const [date, setDate] = React.useState<Date>();

  // Display medical records
  const renderMedicalRecords = () => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Diagnosis</TableHead>
            <TableHead>Medication</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicalRecords.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell className="font-medium">{plan.date}</TableCell>
              <TableCell>{plan.diagnosis}</TableCell>
              <TableCell>{plan.medication}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }, //
  } = useForm<MedicalRecordFormSchema>({
    resolver: zodResolver(MedicalRecordSchema),
  });

  const { userId } = useAuth();
  useEffect(() => {
    const getInsuranceData = async () => {
      try {
        const response = await fetch(`/api/medication/${userId}`);
        const data = await response.json();
        setMedicalRecords(data);
      } catch (error) {
        console.error("Error fetching insurance data:", error);
      }
    };
    getInsuranceData();
  }, [userId]);
  const processForm: SubmitHandler<MedicalRecordFormSchema> = async (data) => {
    console.log(data);
    const response = await fetch("/api/medication", {
      method: "POST",
      body: JSON.stringify({ ...data, id: userId! }),
    });
    const { success } = await response.json();
    console.log(success);
    if (success) {
      addMedicalRecord({ ...data, id: userId! });
      toast("Data has been sent!");
      reset();
      return;
    }
    toast("Something went wrong!");
    return;
  };
  return (
    <div
      className={`flex flex-col items-center justify-start mt-8 dark:text-white`}
    >
      <div className="w-1/2">
        <div className={`rounded-lg shadow-lg p-4 dark:bg-gray-800`}>
          <div className="mb-4">
            {/* Dark mode toggle button */}

            {/* Form to add a new medical record */}
            <h3 className={`text-md font-semibold mb-2 dark:text-white`}>
              Add New Medical Record
            </h3>
            <form onSubmit={handleSubmit(processForm)}>
              <div className="flex items-center">
                <div className="mr-1">
                  {/* <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[200px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        {...register("date", { required: true })}
                      />
                    </PopoverContent>
                  </Popover> */}
                  {/* error display if date is not selected */}
                  <input
                    type="date"
                    {...register("date")}
                    className="p-2 rounded-lg border border-white"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Diagnosis"
                    className="rounded-lg border-gray-300 p-2 mr-2"
                    {...register("diagnosis", { required: true })}
                  />
                  {errors.diagnosis && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.diagnosis.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Medication"
                    className="rounded-lg border-gray-300 p-2 mr-2"
                    {...register("medication", { required: true })}
                  />
                  {errors.medication && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.medication.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Add
                </Button>
              </div>
            </form>
          </div>
          {/* Render existing medical records */}
        </div>
      </div>
      <div className="w-[85vw] mt-20">
        <h2 className="text-lg font-semibold mb-4">Medical Records</h2>
        {renderMedicalRecords()}
      </div>
    </div>
  );
};

export default MedicalHistory;
