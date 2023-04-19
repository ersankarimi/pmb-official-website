import { Open_Sans as OpenSans } from "next/font/google";

import { PageSeo } from "@/components";

import { Footer } from "./footer";
import { Header } from "./header";

export const openSans = OpenSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const RootLayout = ({ children }) => {
  return (
    <>
      <PageSeo
        title="PMB HMIF 2023"
        description="Website Departemen Pengembangan Minat dan Bakat HMIF 2023"
        url="https://pmb-community.vercel.app/"
        imageUrl="https://raw.githubusercontent.com/pmb-community/pmb-official-website/main/public/assets/pages/beranda.png"
      />

      <Header />
      <main className="m-auto flex h-full w-full flex-1 flex-col items-center overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};
