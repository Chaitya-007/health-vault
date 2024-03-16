import GlobeDemo from "@/components/3D/globe";
import React from "react";
import { Navbar } from "@/components/home/navbar";

const Home = () => {
  return (
    <main>
      <div className="h-full">
        <div className="h-[80px] fixed inset-y-0 w-full z-50">
          <Navbar />
        </div>
        <main className="pt-[80px] h-full">
          <div className="p-4 bg-white dark:bg-black rounded-lg flex items-center flex-col w-screen">
            <h2 className="text-navy text-2xl mb-4">
              Get Started with Health Vault
            </h2>
            <p className="text-lg">
              Create a secure and shareable medical record system for patients
              and doctors.
            </p>
          </div>
          <GlobeDemo />
        </main>
      </div>
    </main>
  );
};

export default Home;
