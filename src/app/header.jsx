"use client";

import {
  Menu,
  MenuButton,
  MenuButtonArrow,
  MenuItem,
  useMenuState,
} from "ariakit/menu";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

import logoHmif from "../../public/logo-hmif.png";
import logoInquares from "../../public/logo-inquares.png";
import logoItk from "../../public/logo-itk.png";
import logoKm from "../../public/logo-km.png";
import logoPmb from "../../public/logo-pmb.png";

const logoClasses = "h-8 sm:h-10 w-full md:h-12 object-contain object-center";
const programKerjaList = [
  {
    label: "Mapping Kompetensi dan Minat",
    href: "/mapping-kompetensi-dan-minat",
  },
  {
    label: "Database Capaian Mahasiswa",
    href: "/database-capaian-mahasiswa",
  },
  {
    label: "Video Learning Center",
    href: "/video-learning-center",
  },
  {
    label: "Program Peningkatan Kompetensi dan Keterampilan",
    href: "/program-peningkatan-kompetensi-dan-keterampilan",
  },
  {
    label: "Peningkatan Kompetensi dan Wawasan: Acara Kuliah Tamu HMIF",
    href: "/kuliah-tamu-hmif",
  },
  {
    label: "Ngobrol Santai",
    href: "/ngobrol-santai",
  },
  {
    label: "Hackathon HMIF",
    href: "/hackathon-hmif",
  },
];

const NavLink = ({ children, href, onClick }) => (
  <li>
    <Link
      className="group w-full outline-1 focus:outline-inquares-hippie-green-300"
      href={href}
      onClick={onClick}
    >
      <div className="before:content-[' '] relative z-0 w-max overflow-hidden rounded-sm p-2 transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:top-1/2 before:w-5/12 before:bg-inquares-pizazz-300 before:transition-all before:duration-500 hover:before:w-full group-focus:before:w-full sm:p-1">
        <span className="relative text-2xl font-semibold text-inquares-blue-whale-500/80 duration-200 hover:text-inquares-blue-whale-500 sm:text-base md:text-lg">
          {children}
        </span>
      </div>
    </Link>
  </li>
);

const Header = () => {
  const menu = useMenuState({ gutter: 12 });
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const handleToggleNavbar = () => {
    document.body.style.overflow = navbarIsOpen ? "auto" : "hidden";
    setNavbarIsOpen((currentState) => !currentState);
  };

  return (
    <header className="sticky top-0 z-50 m-auto w-full bg-inquares-loafer-500/80 py-3 px-4 shadow-sm backdrop-blur-[6px] lg:container md:px-8 lg:px-12 lg:py-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Image src={logoItk} alt="Logo ITK" className={logoClasses} />
          <Image src={logoKm} alt="Logo KM ITK" className={logoClasses} />
          <Image src={logoHmif} alt="Logo HMIF" className={logoClasses} />
          <Image
            src={logoInquares}
            alt="Logo INQUARES"
            className={logoClasses}
          />
          <Image src={logoPmb} alt="Logo PMB" className={logoClasses} />
        </div>

        <nav className="flex h-max items-center gap-4">
          <button
            type="button"
            className="rounded-md bg-inquares-hippie-green-300/60 p-1 outline-none ring-inquares-hippie-green-400/80 backdrop-blur-xl transition-all duration-200 hover:bg-inquares-hippie-green-300/80 focus:ring-2 active:bg-inquares-hippie-green-300 active:ring-[3px] sm:hidden"
            onClick={handleToggleNavbar}
          >
            <MdMenu className="h-6 w-6 text-inquares-hippie-green-800/60 hover:text-inquares-hippie-green-800/80 active:text-inquares-hippie-green-800" />
          </button>

          <ul
            className={cn(
              "absolute left-0 top-full h-screen w-full flex-col gap-3 bg-inquares-loafer-500 p-8 sm:static sm:flex sm:h-auto sm:flex-row sm:bg-transparent sm:p-0 lg:gap-8",
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

            <li className="relative">
              <MenuButton state={menu} className="flex items-center">
                <div className="group w-full outline-1 focus:outline-inquares-hippie-green-300">
                  <div className="before:content-[' '] relative z-0 w-max overflow-hidden rounded-sm p-2 transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:top-1/2 before:w-5/12 before:bg-inquares-pizazz-300 before:transition-all before:duration-500 hover:before:w-full group-focus:before:w-full sm:p-1">
                    <span className="relative text-2xl font-semibold text-inquares-blue-whale-500/80 duration-200 hover:text-inquares-blue-whale-500 sm:text-base md:text-lg">
                      Program Kerja
                    </span>
                  </div>
                </div>
                <MenuButtonArrow />
              </MenuButton>
              <Menu
                state={menu}
                className="inset-0 flex flex-col gap-1 border-b-2 border-b-inquares-blue-whale-200 bg-inquares-loafer-500 py-2 sm:w-48 sm:rounded-lg sm:shadow-lg"
              >
                {programKerjaList.map(({ label, href }) => (
                  <MenuItem
                    className="rounded-md px-3 py-2 text-inquares-blue-whale-500/80 transition-all duration-200 hover:bg-inquares-pizazz-200 hover:text-inquares-blue-whale-700 sm:rounded-none"
                    key={`menu-item-navbar-proker-${href}`}
                  >
                    <Link href="/">{label}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
