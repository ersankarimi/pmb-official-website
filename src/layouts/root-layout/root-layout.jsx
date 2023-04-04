import { Open_Sans as OpenSans } from "next/font/google";
import Head from "next/head";

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
      <Head>
        <title>PMB HMIF 2023</title>
        <meta
          name="description"
          content="Website Departemen Pengembangan Minat dan Bakat HMIF 2023"
        />
        <link rel="icon" href="/logo-pmb.png" />
        <link rel="shortcut icon" href="/logo-pmb.png" />
      </Head>
      <Header />
      <main className="m-auto flex max-w-7xl flex-[2] flex-col gap-40 overflow-x-hidden p-4 lg:container md:p-8 xl:p-12">
        {children}
      </main>
      <Footer />
    </>
  );
};
