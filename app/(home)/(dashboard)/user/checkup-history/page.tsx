import React, { useState } from "react";

interface Checkup {
  id: number;
  date: string;
  doctor: string;
  diagnosis: string;
  bill: number;
  precription: string;
  document: string;
}
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CheckupHistory: React.FC = () => {
  // Sample checkup history data
  const sampleCheckupHistory: Checkup[] = [
    {
      id: 1,
      date: "2023-12-10",
      doctor: "Dr. Smith",
      diagnosis: "Fever",
      precription: "paracetamol",
      bill: 100,
      document: "https://www.google.com",
    },
    {
      id: 2,
      date: "2023-12-10",
      doctor: "Dr. Johnson",
      bill: 100,
      diagnosis: "Cough",
      precription: "paracetamol",
      document: "https://www.google.com",
    },
    {
      id: 3,
      date: "2023-12-10",
      doctor: "Dr. Lee",
      bill: 100,
      diagnosis: "Headache",
      precription: "paracetamol",
      document: "https://www.google.com",
    },
    {
      id: 4,
      date: "2023-12-10",
      doctor: "Dr. Kim",
      diagnosis: "Stomachache",
      bill: 100,
      precription: "paracetamol",
      document: "https://www.google.com",
    },
  ];
  const renderCheckupHistory = () => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Diagnosis</TableHead>
            <TableHead>Doctors</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleCheckupHistory.map((checkup) => (
            <TableRow key={checkup.id}>
              <TableCell className="font-medium">{checkup.date}</TableCell>
              <TableCell>{checkup.diagnosis}</TableCell>
              <TableCell>{checkup.doctor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div className="flex justify-center items-start mt-8">
      <div className="bg-white rounded-lg shadow-lg p-4 dark:bg-gray-900 w-[80vw]">
        <h2 className="text-lg font-semibold mb-4">Checkup History</h2>
        {renderCheckupHistory()}
      </div>
    </div>
  );
};

export default CheckupHistory;
