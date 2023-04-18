import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

import { Separator } from "@/components";

import { useMediaQuery } from "@/hooks";

import logoHmif from "../../../public/assets/logo/logo-hmif.png";
import logoInquares from "../../../public/assets/logo/logo-inquares.png";
import logoItk from "../../../public/assets/logo/logo-itk.png";
import logoKm from "../../../public/assets/logo/logo-km.png";
import logoPmb from "../../../public/assets/logo/logo-pmb.png";
import { AccordionNavLink } from "./accordion-nav-link";
import { DropdownNavLink } from "./dropdown-nav-link";
import { NavLink } from "./nav-link";

const programKerjaList = [
  {
    label: "Mapping Kompetensi dan Minat",
    href: "/program-kerja/mapping-kompetensi-dan-minat",
  },
  {
    label: "Database Capaian Mahasiswa",
    href: "/program-kerja/database-capaian-mahasiswa",
  },
  {
    label: "Video Learning Center",
    href: "/program-kerja/video-learning-center",
  },
  {
    label: "Program Peningkatan Kompetensi dan Keterampilan",
    href: "/program-kerja/program-peningkatan-kompetensi-dan-keterampilan",
  },
  {
    label: "Peningkatan Kompetensi dan Wawasan: Acara Kuliah Tamu HMIF",
    href: "/program-kerja/kuliah-tamu-hmif",
  },
  {
    label: "Ngobrol Santai",
    href: "/program-kerja/ngobrol-santai",
  },
  {
    label: "Hackathon HMIF",
    href: "/program-kerja/hackathon-hmif",
  },
];

const lainnyaItems = [
  {
    label: "Informasi",
    href: "/informasi",
  },
  {
    label: "Acara dan kagiatan",
    href: "/acara-dan-kagiatan",
  },
  {
    label: "Sumber Belajar",
    href: "/sumber-belajar",
  },
];

const lingkunganItems = [
  {
    label: "Github",
    href: "https://github.com/pmb-community",
    target: "_blank",
  },
  {
    label: "Discord",
    href: "https://discord.gg/qsHUEshECN",
    target: "_blank",
  },
];

export const Header = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [selectedAccordionItem, setSelectedAccordionItem] = useState("");
  const isUnderLG = useMediaQuery("(max-width: 1024px)");

  const handleAccordionChange = (value) => {
    setSelectedAccordionItem(value);
  };

  const handleToggleNavbar = () => {
    if (isUnderLG) {
      document.body.style.overflow = navbarIsOpen ? "auto" : "hidden";
      setNavbarIsOpen((currentState) => !currentState);
    } else {
      setNavbarIsOpen(true);
    }
  };

  useEffect(() => {
    setSelectedAccordionItem("");
    if (!isUnderLG) {
      setNavbarIsOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [isUnderLG]);

  return (
    <header className="sticky top-0 z-10 w-full bg-inquares-loafer-500 bg-inquares-loafer-500/80 py-3 px-6 shadow-sm backdrop-blur-[6px] md:px-8 lg:px-12 lg:py-4">
      <div className="m-auto flex w-full items-center justify-between lg:container">
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src={logoItk}
            alt="Logo ITK"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
          <Image
            src={logoKm}
            alt="Logo KM ITK"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
          <Image
            src={logoHmif}
            alt="Logo HMIF"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
          <Image
            src={logoInquares}
            alt="Logo INQUARES"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
          <Image
            src={logoPmb}
            alt="Logo PMB"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
        </div>
        <nav className="flex h-max items-center gap-4 px-2">
          <button
            type="button"
            className="rounded-md bg-inquares-hippie-green-300/60 p-1 outline-none ring-inquares-hippie-green-400/80 backdrop-blur-xl transition-all duration-200 hover:bg-inquares-hippie-green-300/80 focus:ring-2 active:bg-inquares-hippie-green-300 active:ring-[3px] lg:hidden"
            onClick={handleToggleNavbar}
          >
            {navbarIsOpen ? (
              <MdClose className="h-6 w-6 text-inquares-hippie-green-800/60 hover:text-inquares-hippie-green-800/80 active:text-inquares-hippie-green-800" />
            ) : (
              <MdMenu className="h-6 w-6 text-inquares-hippie-green-800/60 hover:text-inquares-hippie-green-800/80 active:text-inquares-hippie-green-800" />
            )}
          </button>

          <ul
            className={cn(
              "absolute left-0 top-full flex h-screen w-full flex-col gap-6 overflow-auto bg-inquares-loafer-500 p-8 pb-20 lg:static lg:flex lg:h-auto lg:flex-row lg:gap-6 lg:overflow-visible lg:bg-transparent lg:p-0",
              {
                hidden: !navbarIsOpen,
                flex: navbarIsOpen,
              },
            )}
          >
            <li className="flex items-center">
              <NavLink href="/" onClick={handleToggleNavbar}>
                Beranda
              </NavLink>
            </li>

            <li className="flex items-center">
              <NavLink href="/tentang-kami" onClick={handleToggleNavbar}>
                Tentang
              </NavLink>
            </li>

            <li>
              {!isUnderLG ? (
                <DropdownNavLink
                  triggerTextValue="Program Kerja"
                  dropdownItems={programKerjaList}
                />
              ) : (
                <AccordionNavLink
                  isOpen={selectedAccordionItem === "program-kerja"}
                  onValueChange={handleAccordionChange}
                  triggerTextValue="Program Kerja"
                  value={selectedAccordionItem}
                  accordionItemValue="program-kerja"
                  accordionItems={programKerjaList}
                  handleToggleNavbar={handleToggleNavbar}
                />
              )}
            </li>

            <li>
              {!isUnderLG ? (
                <DropdownNavLink
                  triggerTextValue="Lainnya"
                  dropdownItems={lainnyaItems}
                />
              ) : (
                <AccordionNavLink
                  value={selectedAccordionItem}
                  isOpen={selectedAccordionItem === "lainnya"}
                  onValueChange={handleAccordionChange}
                  triggerTextValue="Lainnya"
                  accordionItemValue="lainnya"
                  accordionItems={lainnyaItems}
                  handleToggleNavbar={handleToggleNavbar}
                />
              )}
            </li>

            <li className="hidden items-center lg:flex">
              <Separator
                orientation="vertical"
                className="hidden h-1/2 w-[1px] bg-inquares-blue-whale-500/40 lg:block"
              />
            </li>
            <li className="items-center gap-4 lg:flex">
              {!isUnderLG ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com/pmb-community"
                    target="_blank"
                    className="rounded-sm p-1 outline-none focus:text-inquares-blue-whale-500 focus:ring-2 focus:ring-inquares-hippie-green-400"
                  >
                    <FaGithub className="h-5 w-5 text-inquares-blue-whale-500/70 transition-all duration-200 hover:scale-125 hover:text-inquares-blue-whale-500 active:scale-75 lg:text-base xl:text-lg" />
                  </Link>
                  <Link
                    href="https://discord.gg/qsHUEshECN"
                    target="_blank"
                    className="rounded-sm p-1 outline-none focus:text-inquares-blue-whale-500 focus:ring-2 focus:ring-inquares-hippie-green-400"
                  >
                    <FaDiscord className="h-5 w-5 text-inquares-blue-whale-500/70 transition-all duration-200 hover:scale-125 hover:text-inquares-blue-whale-500 lg:text-base xl:text-lg" />
                  </Link>
                </div>
              ) : (
                <AccordionNavLink
                  value={selectedAccordionItem}
                  isOpen={selectedAccordionItem === "lingkungan"}
                  onValueChange={handleAccordionChange}
                  triggerTextValue="Lingkungan"
                  accordionItemValue="lingkungan"
                  accordionItems={lingkunganItems}
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
