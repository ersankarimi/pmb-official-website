import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

import logoPMB from "../../../public/logo-pmb.png";

const lingkunganItems = [
  {
    label: "Github",
    href: "https://github.com/pmb-community",
    target: "_blank",
    icon: FaGithub,
  },
  {
    label: "Discord",
    href: "https://discord.gg/qsHUEshECN",
    target: "_blank",
    icon: FaDiscord,
  },
];

const footerItems = [
  {
    title: "PMB",
    items: [
      {
        label: "Tentang Kami",
        href: "/tentang-kami",
      },
      {
        label: "Program Kerja",
        href: "/program-kerja",
      },
    ],
  },
  {
    title: "Lainnya",
    items: [
      {
        label: "Informasi",
        href: "lainnya/informasi",
      },
      {
        label: "Acara dan kagiatan",
        href: "lainnya/acara-dan-kagiatan",
      },
      {
        label: "Sumber Belajar",
        href: "lainnya/sumber-belajar",
      },
    ],
  },
  {
    title: "Lingkungan",
    items: [
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
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="mt-12 flex flex-col items-center justify-center gap-5 bg-inquares-hippie-green-300/40 p-8 py-4 px-6 shadow-sm backdrop-blur-md md:px-8 lg:px-12 lg:py-20">
      <div className="container flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center justify-center gap-3">
            <picture>
              <Image src={logoPMB} alt="PMB Logo" />
            </picture>
            <p className="max-w-md text-center text-inquares-blue-whale-600/80">
              Departemen PMB HMIF 2023 membantu mahasiswa Informatika dan Bisnis
              Digital mengembangkan minat dan bakat dalam dan diluar kegiatan
              akademik.
            </p>
          </div>

          <div className="grid grid-cols-[max-content_max-content] items-center">
            {lingkunganItems.map(({ label, href, target, icon }) => {
              const IconComponent = icon;

              return (
                <Link
                  key={`footer-lingkungan-item-${label}`}
                  href={href}
                  target={target}
                  className="group relative h-full w-full scale-75 overflow-hidden rounded-full bg-inquares-hippie-green-300/90 p-3 outline-none transition-all duration-200 focus:ring-4 focus:ring-inquares-hippie-green-500/60"
                >
                  <IconComponent className="h-8 w-8 text-inquares-hippie-green-900/80 duration-200 group-hover:scale-110 group-hover:text-inquares-hippie-green-900 group-focus:scale-110 group-focus:text-inquares-hippie-green-900" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          {footerItems.map(({ title, items }) => {
            return (
              <div
                className="flex flex-col gap-4"
                key={`footer-section-item-${title}`}
              >
                <h3 className="font-semibold">{title}</h3>
                <div className="flex flex-col gap-2">
                  {items.map(({ label, href, target = "_self" }) => {
                    return (
                      <Link
                        key={`footer-beranda-item-${title}-${label}`}
                        href={href}
                        target={target}
                        className="text-inquares-blue-whale-600/80 hover:text-inquares-blue-whale-600"
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
