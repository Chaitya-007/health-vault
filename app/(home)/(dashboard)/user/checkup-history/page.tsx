import React, { useState } from "react";

interface Checkup {
  id: number;
  date: string;
  doctor: string;
  diagnosis: string;
}

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

  const renderCheckupHistory = () => {
    return sampleCheckupHistory.map((checkup) => (
      <div
        key={checkup.id}
        className="flex justify-between items-center border-b border-gray-200 py-2 px-4"
      >
        <span className="text-gray-600">{checkup.date}</span>
        <span className="font-semibold text-blue-600">{checkup.doctor}</span>
        <span className="text-gray-700">{checkup.diagnosis}</span>
      </div>
    ));
  };

  return (
    <div className="flex justify-center items-start mt-8">
      <div className="w-1/2">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Checkup History</h2>
          {renderCheckupHistory()}
        </div>
      </div>
    </div>
  );
};

export default CheckupHistory;
