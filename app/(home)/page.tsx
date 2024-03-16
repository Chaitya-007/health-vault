import GlobeDemo from "@/components/3D/globe";
import React from "react";

const Home = () => {
  return (
    <main>
      <div className="p-4 bg-white dark:bg-black rounded-lg flex items-center flex-col w-screen">
        <h2 className="text-navy text-2xl mb-4">
          Get Started with Health Vault
        </h2>
        <p className="text-lg">
          Create a secure and shareable medical record system for patients and
          doctors.
        </p>
      </div>
      <GlobeDemo />
    </main>
  );
};

export default Home;
