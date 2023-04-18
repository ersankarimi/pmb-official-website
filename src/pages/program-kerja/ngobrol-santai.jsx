import Head from "next/head";

import { UnderDevelopment } from "@/components";

const NgobrolSantai = () => {
  return (
    <>
      <Head>
        <title>Ngobrol Santai | PMB HMIF 2023</title>
        <meta
          name="description"
          content="Ngobrol Santai adalah salah satu program kerja yang dibuat oleh HMIF untuk membantu mahasiswa dalam menentukan jurusan yang sesuai dengan minat dan bakatnya. Program kerja ini bertujuan untuk melakukan mapping atau pemetaan terkait kompetensi dan minat warga HMIF ITK 2023."
        />
        <meta property="og:title" content="Ngobrol Santai | PMB HMIF 2023" />
        <meta
          property="og:description"
          content="Ngobrol Santai adalah salah satu program kerja yang dibuat oleh HMIF untuk membantu mahasiswa dalam menentukan jurusan yang sesuai dengan minat dan bakatnya. Program kerja ini bertujuan untuk melakukan mapping atau pemetaan terkait kompetensi dan minat warga HMIF ITK 2023."
        />
        <meta
          property="og:url"
          content="https://pmb-community.vercel.app/program-kerja/ngobrol-santai"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/pmb-community/pmb-official-website/main/public/ngobrol-santai.png"
        />
      </Head>

      <UnderDevelopment />
    </>
  );
};

export default NgobrolSantai;
