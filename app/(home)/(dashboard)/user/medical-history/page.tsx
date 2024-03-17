"use client";

import React, { useState } from "react";

interface MedicalRecord {
  id: number;
  date: string;
  diagnosis: string;
  medication: string;
}

const MedicalHistory: React.FC = () => {
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

  // Function to toggle dark mode

  // Function to add a new medical record
  const addMedicalRecord = (record: MedicalRecord) => {
    setMedicalRecords([...medicalRecords, record]);
  };

  // Display medical records
  const renderMedicalRecords = () => {
    return medicalRecords.map((record) => (
      <div
        key={record.id}
        className={`flex justify-between items-center border-b border-gray-200 py-2 px-4 dark:text-white dark:bg-gray-800" : "text-gray-600 dark:bg-white"`}
      >
        <span>{record.date}</span>
        <span className="font-semibold">{record.diagnosis}</span>
        <span>{record.medication}</span>
      </div>
    ));
  };

  return (
    <div className={`flex justify-center items-start mt-8 dark:text-white`}>
      <div className="w-1/2">
        <div className={`rounded-lg shadow-lg p-4 dark:bg-gray-800`}>
          <h2 className={`text-lg font-semibold mb-4 dark:text-white`}>
            Medical History
          </h2>
          <div className="mb-4">
            {/* Dark mode toggle button */}

            {/* Form to add a new medical record */}
            <h3 className={`text-md font-semibold mb-2 dark:text-white`}>
              Add New Medical Record
            </h3>
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                  date: { value: string };
                  diagnosis: { value: string };
                  medication: { value: string };
                };
                const date = target.date.value;
                const diagnosis = target.diagnosis.value;
                const medication = target.medication.value;
                addMedicalRecord({
                  id: medicalRecords.length + 1,
                  date,
                  diagnosis,
                  medication,
                });
                // Reset the form directly
                e.currentTarget.reset();
              }}
            >
              <div className="flex items-center">
                <input
                  type="date"
                  name="date"
                  className="rounded-lg border-gray-300 p-2 mr-2"
                  required
                />
                <input
                  type="text"
                  name="diagnosis"
                  placeholder="Diagnosis"
                  className="rounded-lg border-gray-300 p-2 mr-2"
                  required
                />
                <input
                  type="text"
                  name="medication"
                  placeholder="Medication"
                  className="rounded-lg border-gray-300 p-2 mr-2"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          {/* Render existing medical records */}
          {renderMedicalRecords()}
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
