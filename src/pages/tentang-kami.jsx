import Head from "next/head";

import { UnderDevelopment } from "@/components";

const TentangKami = () => {
  return (
    <>
      <Head>
        <title>Tentang Kami | PMB HMIF 2023</title>
        <meta
          name="description"
          content="Tentang Kami adalah halaman yang berisi informasi mengenai PMB HMIF 2023. Halaman ini berisi informasi mengenai PMB HMIF 2023, seperti tujuan, visi, misi, dan program kerja yang akan dilakukan. Selain itu, halaman ini juga berisi informasi mengenai kontak yang dapat dihubungi untuk informasi lebih lanjut."
        />
        <meta property="og:title" content="Tentang Kami | PMB HMIF 2023" />
        <meta
          property="og:description"
          content="Tentang Kami adalah halaman yang berisi informasi mengenai PMB HMIF 2023. Halaman ini berisi informasi mengenai PMB HMIF 2023, seperti tujuan, visi, misi, dan program kerja yang akan dilakukan. Selain itu, halaman ini juga berisi informasi mengenai kontak yang dapat dihubungi untuk informasi lebih lanjut."
        />
        <meta
          property="og:url"
          content="https://pmb-community.vercel.app/tentang-kami"
        />
        <meta
          property="og:image"
          content="https://pmb-community.vercel.app/images/tentang-kami.png"
        />
      </Head>

      <UnderDevelopment />
    </>
  );
};

export default TentangKami;
