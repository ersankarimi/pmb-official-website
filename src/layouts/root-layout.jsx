import cn from "classnames";
import { Open_Sans as OpenSans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from "@/components";

import { useMediaQuery } from "@/hooks";

import logoHmif from "../../public/logo-hmif.png";
import logoInquares from "../../public/logo-inquares.png";
import logoItk from "../../public/logo-itk.png";
import logoKm from "../../public/logo-km.png";
import logoPmb from "../../public/logo-pmb.png";

export const openSans = OpenSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "PMB HMIF 2023",
  description: "Website Departemen Pengembangan Minat dan Bakat HMIF 2023",
  icons: {
    icon: "/logo-pmb.png",
    shortcut: "/logo-pmb.png",
  },
};

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

const NavLink = ({ children, href, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-center rounded-sm p-1 text-2xl font-semibold text-inquares-blue-whale-500/70 outline-none transition-all duration-200 hover:text-inquares-blue-whale-500 focus:text-inquares-blue-whale-500 focus:ring-2 focus:ring-inquares-hippie-green-400 lg:text-base xl:text-lg"
  >
    {children}
  </Link>
);

const DropdownNavLink = ({ triggerTextValue, dropdownItems }) => (
  <DropdownMenu modal={false}>
    <DropdownMenuTrigger asChild>
      <button
        type="button"
        className="group flex items-center rounded-sm p-1 text-2xl font-semibold text-inquares-blue-whale-500/70 outline-none outline-1 transition-all duration-200 hover:text-inquares-blue-whale-500 focus:text-inquares-blue-whale-500 focus:outline-inquares-hippie-green-300 focus:ring-2 focus:ring-inquares-hippie-green-400 lg:text-base xl:text-lg"
      >
        {triggerTextValue}
        <MdKeyboardArrowDown className="text-inquares-blue-whale-500/80 group-hover:text-inquares-blue-whale-500" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className="z-20 flex flex-col gap-1 border-b-2 border-b-inquares-blue-whale-200 bg-inquares-loafer-500 py-2 sm:w-48 sm:rounded-lg sm:shadow-lg"
      arrowFillClassName="fill-transparent"
    >
      {dropdownItems.map(({ label, href }) => (
        <DropdownMenuItem
          key={`dropdown-menu-item-${href}`}
          asChild
          className="rounded-md px-3 py-2 text-inquares-blue-whale-500/80 outline-none transition-all duration-200 hover:bg-inquares-pizazz-200 hover:text-inquares-blue-whale-700 focus:bg-inquares-pizazz-200 focus:ring-2 focus:ring-inquares-pizazz-500/60 sm:rounded-none"
        >
          <Link href={href}>{label}</Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

const AccordionNavLink = ({
  value,
  isOpen,
  triggerTextValue,
  accordionItemValue,
  accordionItems,
  onValueChange,
}) => (
  <Accordion
    type="single"
    collapsible
    onValueChange={onValueChange}
    open={isOpen}
    value={value}
  >
    <AccordionItem value={accordionItemValue}>
      <AccordionHeader>
        <AccordionTrigger asChild>
          <button
            type="button"
            className="group flex items-center rounded-sm p-1 text-2xl font-semibold text-inquares-blue-whale-500/70 outline-none outline-1 transition-all duration-200 hover:text-inquares-blue-whale-500 focus:text-inquares-blue-whale-500 focus:outline-inquares-hippie-green-300 focus:ring-2 focus:ring-inquares-hippie-green-400 lg:text-base xl:text-lg"
          >
            {triggerTextValue}
            <MdKeyboardArrowDown className="text-inquares-blue-whale-500/80 group-hover:text-inquares-blue-whale-500" />
          </button>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent className="mt-2 flex-col gap-2 rounded-xl py-2 data-[state='open']:flex data-[state='closed']:hidden">
        {accordionItems.map(({ label, href }) => (
          <Link
            href={href}
            key={`accordion-navlink-${href}`}
            className="w-full rounded-sm px-3 py-2 font-medium text-inquares-blue-whale-500/80 outline-none transition-all duration-200 hover:bg-inquares-pizazz-200 hover:text-inquares-blue-whale-500 focus:bg-inquares-pizazz-200 focus:ring-2 focus:ring-inquares-pizazz-500/60 sm:rounded-none"
          >
            {label}
          </Link>
        ))}
        <Separator className="h-[1px] w-full bg-inquares-blue-whale-400/80" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const Header = () => {
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
    <header className="sticky top-0 z-10 m-auto w-full bg-inquares-loafer-500 bg-inquares-loafer-500/80 py-3 px-6 shadow-sm backdrop-blur-[6px] md:px-8 lg:px-12 lg:py-4">
      <div className="m-auto flex w-full items-center justify-between lg:container">
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
        <nav className="flex h-max items-center gap-4 px-2">
          <button
            type="button"
            className="rounded-md bg-inquares-hippie-green-300/60 p-1 outline-none ring-inquares-hippie-green-400/80 backdrop-blur-xl transition-all duration-200 hover:bg-inquares-hippie-green-300/80 focus:ring-2 active:bg-inquares-hippie-green-300 active:ring-[3px] lg:hidden"
            onClick={handleToggleNavbar}
          >
            <MdMenu className="h-6 w-6 text-inquares-hippie-green-800/60 hover:text-inquares-hippie-green-800/80 active:text-inquares-hippie-green-800" />
          </button>

          <ul
            className={cn(
              "absolute left-0 top-full h-screen w-full flex-col gap-3 overflow-auto bg-inquares-loafer-500 p-8 pb-20 lg:static lg:flex lg:h-auto lg:flex-row lg:gap-8 lg:overflow-visible lg:bg-transparent lg:p-0",
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
              <NavLink href="/" onClick={handleToggleNavbar}>
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
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export const RootLayout = ({ children }) => (
  <>
    <Header />
    <main className="m-auto flex max-w-7xl flex-[2] flex-col gap-40 overflow-x-hidden p-4 lg:container md:p-8 xl:p-12">
      {children}
    </main>
  </>
);
