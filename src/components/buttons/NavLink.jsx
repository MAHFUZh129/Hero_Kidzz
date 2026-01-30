"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const isActive =
    href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link
    // href={href}
    // className={`${path.startsWith(href) && "text-primary"} font-bold `}
      className={`${isActive && "text-primary"} font-medium`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;