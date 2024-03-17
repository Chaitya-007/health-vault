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

  const renderDoctors = () => {
    return sampleDoctors.map((doctor) => (
      <div
        key={doctor.id}
        className={`flex justify-between items-center border-b border-gray-200 py-2 px-4 ${
          doctor.available ? "text-green-600" : "text-red-600"
        }`}
      >
        <span className="font-semibold">{doctor.name}</span>
        <span>{doctor.specialty}</span>
        <span>{doctor.available ? "Available" : "Not Available"}</span>
      </div>
    ));
  };

  return (
    <div className="flex justify-center items-start mt-8">
      <div className="w-1/2">
        <div className="bg-white rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Available Doctors</h2>
          {renderDoctors()}
        </div>
      </div>
    </div>
  );
};

export default AvailableDocter;
