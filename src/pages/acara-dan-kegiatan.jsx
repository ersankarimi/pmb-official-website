import Head from "next/head";

import { UnderDevelopment } from "@/components";

const AcaraDanKegiatan = () => {
  return (
    <>
      <Head>
        <title>Acara dan Kegiatan | PMB HMIF 2023</title>
        <meta
          name="description"
          content="Halaman ini akan berisi mengenai acara dan kegiatan yang akan dan sudah dilaksanakan oleh PMB HMIF 2023."
        />
        <meta
          property="og:title"
          content="Acara dan Kegiatan | PMB HMIF 2023"
        />
        <meta
          property="og:description"
          content="Halaman ini akan berisi mengenai acara dan kegiatan yang akan dan sudah dilaksanakan oleh PMB HMIF 2023."
        />
        <meta
          property="og:url"
          content="https://pmb-community.vercel.app/acara-dan-kegiatan"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/pmb-community/pmb-official-website/main/public/assets/pages/acara-dan-kegiatan.png"
        />
      </Head>

      <UnderDevelopment />
    </>
  );
};

export default AcaraDanKegiatan;
