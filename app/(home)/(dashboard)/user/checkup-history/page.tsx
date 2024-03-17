import React, { useState } from "react";

interface Checkup {
  id: number;
  date: string;
  doctor: string;
  diagnosis: string;
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
    { id: 1, date: "2023-12-10", doctor: "Dr. Smith", diagnosis: "Fever" },
    {
      id: 2,
      date: "2024-01-15",
      doctor: "Dr. Johnson",
      diagnosis: "Sprained ankle",
    },
    { id: 3, date: "2024-02-20", doctor: "Dr. Lee", diagnosis: "Common cold" },
  ];

  // <div
  //   key={checkup.id}
  //   className="flex justify-between items-center border-b border-gray-200 py-2 px-4"
  // >
  //   <span className="text-gray-600">{checkup.date}</span>
  //   <span className="font-semibold text-blue-600">{checkup.doctor}</span>
  //   <span className="text-gray-700">{checkup.diagnosis}</span>
  // </div>
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
