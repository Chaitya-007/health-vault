import Image from "next/image";
import React from "react";
import healthimage from "@/public/health.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DoctorPage = () => {
  return (
    <main>
      <div className="text-3xl font-bold p-4">DashBoard</div>
      <div className="relative">
        <Image
          src={healthimage}
          alt="health"
          className="w-screen h-[50vh] lg:h-80 lg:p-4 rounded-xl opacity-35"
        />
        <div className="absolute top-0 p-2 lg:p-4">
          <h3 className="p-4 text-xl font-bold">Welcome !</h3>
          <div className="text-3xl font-bold p-4">View Appointment</div>
          <p className=" font-serif lg:p-4 lg:w-[80vw] text-wrap">
            Thank you for entrusting us with your healthcare needs. As your
            dedicated healthcare provider, I am committed to delivering the
            highest standard of care and attention to your well-being. Your
            appointment details are accessible through the provided link,
            ensuring seamless access to your healthcare journey. Additionally, I
            am available for home visits to ensure your comfort and convenience.
            Your health is my priority, and I am here to support you in
            achieving your wellness goals.
          </p>
          <div className="flex mt-6 lg:w-[80vw] justify-center">
            <Button className="bg-blue-600 text-white">
              <Link href="/waiting-appointment">View Appointment</Link>
            </Button>
          </div>
        </div>
        <h2 className="text-3xl m-4">Status</h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-[40vw] border border-cyan-600 rounded-xl m-4">
            <h2 className="p-3 text-xl font-bold">0</h2>
            <p className="p-3 text-xl font-bold">New Appointment</p>
            <div className="bg-yellow-300 text-black pl-4 mt-4 text-xl font-bold rounded-b-xl">
              <Link href="/appointments">View Details</Link>
            </div>
          </div>
          <div className="w-[40vw] border border-cyan-600 rounded-xl m-4">
            <h2 className="p-3 text-xl font-bold">0</h2>
            <p className="p-3 text-xl font-bold">Approved Appointment</p>
            <div className="bg-yellow-300 text-black pl-4 mt-4 text-xl font-bold rounded-b-xl">
              <Link href="/appointments">View Details</Link>
            </div>
          </div>
          <div className="w-[40vw] border border-cyan-600 rounded-xl m-4">
            <h2 className="p-3 text-xl font-bold">0</h2>
            <p className="p-3 text-xl font-bold">Cancelled Appointment</p>
            <div className="bg-yellow-300 text-black pl-4 mt-4 text-xl font-bold rounded-b-xl">
              <Link href="/appointments">View Details</Link>
            </div>
          </div>
          <div className="w-[40vw] border border-cyan-600 rounded-xl m-4">
            <h2 className="p-3 text-xl font-bold">0</h2>
            <p className="p-3 text-xl font-bold">Total Appointment</p>
            <div className="bg-yellow-300 text-black pl-4 mt-4 text-xl font-bold rounded-b-xl">
              <Link href="/appointments">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DoctorPage;
