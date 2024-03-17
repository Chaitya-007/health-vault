import Image from "next/image";
import React from "react";
import healthimage from "@/public/health.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const UserPage = () => {
  return (
    <main>
      <div className="text-3xl font-bold p-4">DashBoard</div>
      <div className="relative">
        <Image
          src={healthimage}
          alt="health"
          objectFit="cover"
          className="w-screen h-80 p-4 rounded-xl opacity-35"
        />
        <div className="absolute top-0 p-4">
          <h3 className="p-4 text-xl font-bold">Welcome !</h3>
          <div className="text-3xl font-bold p-4">View Appointment</div>
          <p className=" font-serif p-4 w-[80vw] text-wrap">
            Thanks for using our service. We are here to help you. You can view
            your appointment here.We are always tying to provide the best
            service to you. You can view your appointment here and we Reach
            Patient Appointment at home
          </p>
          <div className="flex w-[80vw] justify-center">
            <Button className="bg-blue-600 text-white">
              <Link href="/waiting-appointment">View Appointment</Link>
            </Button>
          </div>
        </div>
        <h2 className="text-3xl m-4">Status</h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-[40vw] border border-cyan-600 rounded-xl m-4">
            <h2 className="p-3 text-xl font-bold">2</h2>
            <p className="p-3 text-xl font-bold">New Appointment</p>
            <div className="bg-yellow-300 text-black pl-4 mt-4 text-xl font-bold rounded-b-xl">
              <Link href="/appointments">View Details</Link>
            </div>
          </div>
          <div className="w-[40vw] border border-cyan-600 rounded-xl m-4">
            <h2 className="p-3 text-xl font-bold">2</h2>
            <p className="p-3 text-xl font-bold">Approved Appointment</p>
            <div className="bg-yellow-300 text-black pl-4 mt-4 text-xl font-bold rounded-b-xl">
              <Link href="/appointments">View Details</Link>
            </div>
          </div>
          <div className="w-[40vw] border border-cyan-600 rounded-xl m-4">
            <h2 className="p-3 text-xl font-bold">2</h2>
            <p className="p-3 text-xl font-bold">Cancelled Appointment</p>
            <div className="bg-yellow-300 text-black pl-4 mt-4 text-xl font-bold rounded-b-xl">
              <Link href="/appointments">View Details</Link>
            </div>
          </div>
          <div className="w-[40vw] border border-cyan-600 rounded-xl m-4">
            <h2 className="p-3 text-xl font-bold">2</h2>
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

export default UserPage;
