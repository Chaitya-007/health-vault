"use client";
import React, { useState } from "react";

interface InsurancePlan {
  id: number;
  name: string;
  coverage: string;
  premium: number;
}

const InsurancePage: React.FC = () => {
  const [insurancePlans, setInsurancePlans] = useState<InsurancePlan[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode

  // Function to add a new insurance plan
  const addInsurancePlan = (plan: InsurancePlan) => {
    setInsurancePlans([...insurancePlans, plan]);
  };

  // Sample insurance plan data
  const sampleInsurancePlans: InsurancePlan[] = [
    { id: 1, name: "Basic Plan", coverage: "Accidental Coverage", premium: 50 },
    {
      id: 2,
      name: "Standard Plan",
      coverage: "Accidental and Medical Coverage",
      premium: 100,
    },
    {
      id: 3,
      name: "Premium Plan",
      coverage: "Accidental, Medical, and Travel Coverage",
      premium: 150,
    },
  ];

  // Display insurance plans
  const renderInsurancePlans = () => {
    return insurancePlans.map((plan) => (
      <div
        key={plan.id}
        className={`flex justify-between items-center border-b border-gray-200 py-2 px-4 ${
          darkMode
            ? "text-white bg-gray-800"
            : "text-gray-600 bg-white dark:bg-gray-800 dark:text-white"
        }`}
      >
        <span className="font-semibold">{plan.name}</span>
        <span>{plan.coverage}</span>
        <span>${plan.premium}</span>
      </div>
    ));
  };

  return (
    <div
      className={`flex justify-center items-start mt-8 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-800 dark:bg-gray-900 dark:text-white"
      }`}
    >
      <div className="w-1/2">
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
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                  name: { value: string };
                  coverage: { value: string };
                  premium: { value: string };
                };
                const name = target.name.value;
                const coverage = target.coverage.value;
                const premium = parseFloat(target.premium.value);
                addInsurancePlan({
                  id: insurancePlans.length + 1,
                  name,
                  coverage,
                  premium,
                });
                e.currentTarget.reset();
              }}
            >
              <div className="flex items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`rounded-lg border-${
                    darkMode ? "white" : "gray"
                  }-300 p-2 mr-2`}
                  required
                />
                <input
                  type="text"
                  name="coverage"
                  placeholder="Coverage"
                  className={`rounded-lg border-${
                    darkMode ? "white" : "gray"
                  }-300 p-2 mr-2`}
                  required
                />
                <input
                  type="number"
                  name="premium"
                  placeholder="Premium"
                  step="0.01"
                  className={`rounded-lg border-${
                    darkMode ? "white" : "gray"
                  }-300 p-2 mr-2`}
                  required
                />
                <button
                  type="submit"
                  className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
                    darkMode ? "hover:bg-blue-600" : "hover:bg-blue-400"
                  } focus:outline-none`}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          {/* Render existing insurance plans */}
          {renderInsurancePlans()}
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
