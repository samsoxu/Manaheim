import React from "react";
import { Link } from "react-router";

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      to={href}
      className={`${className} text-white! hover:text-gray-300! hover:underline! hover:underline-offset-8! font-normal!`}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
