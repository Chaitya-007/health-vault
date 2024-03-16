"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import ModeToggle from "@/components/DarkMode";
import Link from "next/link";
import Logo from "@/components/navbar/logo";

const Links = [
  { name: "Home", href: "/" },
  { name: "Get Started", href: "/user" },
  { name: "Contact Us", href: "/contact" },
];

export const NavbarRoutes = () => {
  const { userId } = useAuth();

  return (
    <>
      <div className="flex justify-between items-center w-screen">
        <Logo />
        <div className="flex px-2 items-center">
          {Links.map((link) => (
            <div className="mx-4" key={link.href}>
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            </div>
          ))}
          <div className="mx-4">
            <ModeToggle />
          </div>
          {userId ? (
            <UserButton />
          ) : (
            <div className="bg-blue-600 p-3 rounded-xl">
              <SignInButton />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
