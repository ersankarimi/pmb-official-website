"use client";

import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

import logoHmif from "../../public/logo-hmif.png";
import logoItk from "../../public/logo-itk.png";
import logoKm from "../../public/logo-km.png";
import logoPmb from "../../public/logo-pmb.png";

const logoClasses = "h-8 w-8 md:h-12 md:w-full object-contain object-center ";

const NavLink = ({ children, href, onClick }) => {
  return (
    <li>
      <Link className="w-full" href={href} onClick={onClick}>
        <div className="relative z-0 w-max overflow-hidden rounded-md p-2 transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:top-1/2 before:w-5/12 before:bg-inquares-pizazz-300 before:transition-all before:duration-500 hover:before:w-full sm:p-1">
          <span className="relative text-2xl font-semibold text-inquares-blue-whale-500/80 duration-200 hover:text-inquares-blue-whale-500 sm:text-base md:text-lg">
            {children}
          </span>
        </div>
      </Link>
    </li>
  );
};

export const Header = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const handleToggleNavbar = () => {
    document.body.style.overflow = navbarIsOpen ? "auto" : "hidden";
    setNavbarIsOpen((navbarIsOpen) => !navbarIsOpen);
  };

  return (
    <header className="sticky top-0 bg-inquares-loafer-500 p-4 shadow-sm md:m-auto">
      <div className="m-auto flex w-full items-center justify-between md:container">
        <div className="flex items-center gap-2 md:gap-4">
          <Image src={logoItk} alt="HMIF Logo" className={logoClasses}></Image>
          <Image src={logoKm} alt="HMIF Logo" className={logoClasses}></Image>
          <Image src={logoHmif} alt="HMIF Logo" className={logoClasses}></Image>
          <Image src={logoPmb} alt="HMIF Logo" className={logoClasses}></Image>
        </div>

        <nav className="flex items-center gap-4">
          <button
            type="button"
            className="rounded-sm transition-all duration-200 focus:ring-2 focus:ring-inquares-hippie-green-500 active:ring-[3px] sm:hidden"
            onClick={handleToggleNavbar}
          >
            <MdMenu className="h-6 w-6 text-inquares-blue-whale-500" />
          </button>

          <ul
            className={cn(
              "absolute left-0 top-full h-screen w-full flex-col gap-8 bg-inquares-loafer-500 p-8 sm:static sm:flex sm:h-full sm:flex-row sm:bg-transparent sm:p-0",
              {
                hidden: !navbarIsOpen,
                flex: navbarIsOpen,
              },
            )}
          >
            <NavLink href="/" onClick={handleToggleNavbar}>
              Beranda
            </NavLink>
            <NavLink href="/" onClick={handleToggleNavbar}>
              Tentang Kami
            </NavLink>
            <NavLink href="/" onClick={handleToggleNavbar}>
              Program Kerja
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
