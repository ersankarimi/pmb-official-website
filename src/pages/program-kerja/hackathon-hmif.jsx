import Head from "next/head";

import { UnderDevelopment } from "@/components";

const HackathonHmif = () => {
  return (
    <>
      <Head>
        <title>Hackathon HMIF | PMB HMIF 2023</title>
        <meta
          name="description"
          content="Kegiatan ini diselenggarakan untuk mengasah skill dengan mengadu kemampuan mahasiswa Informatika pada ajang ini untuk mempersiapkan mahasiswa-mahasiswa pada ajang kompetitif lainnya."
        />
        <meta property="og:title" content="Hackathon HMIF | PMB HMIF 2023" />
        <meta
          property="og:description"
          content="Kegiatan ini diselenggarakan untuk mengasah skill dengan mengadu kemampuan mahasiswa Informatika pada ajang ini untuk mempersiapkan mahasiswa-mahasiswa pada ajang kompetitif lainnya."
        />
        <meta
          property="og:url"
          content="https://pmb-community.vercel.app/program-kerja/hackathon-hmif"
        />
        <meta
          property="og:image"
          content="https://pmb-community.vercel.app/images/program-kerja/hackathon-hmif.png"
        />
      </Head>

      <UnderDevelopment />
    </>
  );
};

export default HackathonHmif;
