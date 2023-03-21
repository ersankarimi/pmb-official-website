import { Open_Sans } from "next/font/google";

import "./globals.css";
import { Header } from "./header";

export const openSans = Open_Sans({
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-screen w-screen max-w-[100vw] overflow-x-hidden bg-inquares-loafer-500 ${openSans.className}`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
