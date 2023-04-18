import Head from "next/head";

import { UnderDevelopment } from "@/components";

const DatabaseCapaianMahasiswa = () => {
  return (
    <>
      <Head>
        <title>Database Capaian Mahasiswa | PMB HMIF 2023</title>
        <meta
          name="description"
          content="Program kerja ini bertujuan untuk membuat database capaian mahasiswa Informatika dan Bisnis Digital ITK. Database ini akan berisi capaian mahasiswa Informatika dan Bisnis Digital ITK dalam berbagai bidang, baik bidang akademik maupun non-akademik."
        />
        <meta
          property="og:title"
          content="Database Capaian Mahasiswa | PMB HMIF 2023"
        />
        <meta
          property="og:description"
          content="Program kerja ini bertujuan untuk membuat database capaian mahasiswa Informatika dan Bisnis Digital ITK. Database ini akan berisi capaian mahasiswa Informatika dan Bisnis Digital ITK dalam berbagai bidang, baik bidang akademik maupun non-akademik."
        />
        <meta
          property="og:url"
          content="https://pmb-community.vercel.app/program-kerja/database-capaian-mahasiswa"
        />
        <meta
          property="og:image"
          content="https://pmb-community.vercel.app/images/program-kerja/database-capaian-mahasiswa.png"
        />
      </Head>

      <UnderDevelopment />
    </>
  );
};

export default DatabaseCapaianMahasiswa;
