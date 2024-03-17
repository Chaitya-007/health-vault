import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  available: boolean;
}

const AvailableDocter: React.FC = () => {
  // Sample doctor data
  const sampleDoctors: Doctor[] = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology", available: true },
    { id: 2, name: "Dr. Johnson", specialty: "Dermatology", available: false },
    { id: 3, name: "Dr. Lee", specialty: "Orthopedics", available: true },
    { id: 4, name: "Dr. Kim", specialty: "Pediatrics", available: true },
  ];

  // <div
  //   key={doctor.id}
  //   className={`flex justify-between items-center border-b border-gray-200 py-2 px-4 ${
  //     doctor.available ? "text-green-600" : "text-red-600"
  //   }`}
  // >
  //   <span className="font-semibold">{doctor.name}</span>
  //   <span>{doctor.specialty}</span>
  //   <span>{doctor.available ? "Available" : "Not Available"}</span>
  // </div>
  const renderDoctors = () => {
    return (
      <Table className="p-4">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Specialty</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleDoctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell className="font-medium">{doctor.name}</TableCell>
              <TableCell>{doctor.specialty}</TableCell>
              <TableCell>
                {doctor.available ? "Available" : "Not Available"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div className="flex justify-center items-start mt-8">
      <div className="bg-white rounded-lg shadow-lg p-4 dark:bg-gray-900 w-[80vw]">
        <h2 className="text-lg font-semibold mb-4">Available Doctors</h2>
        {renderDoctors()}
      </div>
    </div>
  );
};

export default AvailableDocter;
