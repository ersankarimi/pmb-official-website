import Head from "next/head";

import { UnderDevelopment } from "@/components";

const Informasi = () => {
  return (
    <>
      <Head>
        <title>Informasi | PMB HMIF 2023</title>
        <meta
          name="description"
          content="Informasi adalah halaman yang berisi informasi mengenai perlombaan, bootcamp, workshop, atau program lainnya yang berkaitan dengan teknologi yang diselenggarakan oleh PMB HMIF dan dari mitra lainnya yang ada di Indonesia."
        />
        <meta property="og:title" content="Tentang Kami | PMB HMIF 2023" />
        <meta
          property="og:description"
          content="Informasi adalah halaman yang berisi informasi mengenai perlombaan, bootcamp, workshop, atau program lainnya yang berkaitan dengan teknologi yang diselenggarakan oleh PMB HMIF dan dari mitra lainnya yang ada di Indonesia."
        />
        <meta
          property="og:url"
          content="https://pmb-community.vercel.app/informasi"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/pmb-community/pmb-official-website/main/public/informasi.png"
        />
      </Head>

      <UnderDevelopment />
    </>
  );
};

export default Informasi;
