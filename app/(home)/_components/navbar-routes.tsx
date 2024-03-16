"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import ModeToggle from "@/components/DarkMode";
import Link from "next/link";
import Logo from "@/components/navbar/logo";

export const NavbarRoutes = () => {
  const { userId } = useAuth();

  return (
    <>
      <div className="flex justify-between items-center w-screen">
        <Logo />
        <div>
          <Link href="/dashboard" className="text-navy text-lg">
            Dashboard
          </Link>
        </div>
        <div className="flex px-2">
          <div className="mx-4">
            <ModeToggle />
          </div>
          {userId ? <UserButton /> : <SignInButton />}
        </div>
      </div>
    </>
  );
};
