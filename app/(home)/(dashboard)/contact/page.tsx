import React from "react";
import ContactRight from "./ContactDesign/ContactRight";
import EarthCanvas from "@/components/3D/Earth/EarthCanvas";
import Contact from "@/components/EmailContact/PerfectContact";

const ContactPage = () => {
  return (
    <>
      <main className="pt-32 max-w-full ">
        <ContactRight />
        <section className="flex lg:flex-row mb-4 lg:mb-16 items-center flex-col">
          <div className="lg:w-1/2 text-center h-[60vh] lg:block hidden w-full z-40">
            <EarthCanvas />
          </div>
          <div className="lg:w-1/2 w-11/12 z-40">
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
