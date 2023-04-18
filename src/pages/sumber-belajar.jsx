import Head from "next/head";

import { UnderDevelopment } from "@/components";

const SumberBelajar = () => {
  return (
    <>
      <Head>
        <title>Sumber Belajar | PMB HMIF 2023</title>
        <meta
          name="description"
          content="Temukan sumber belajar terbaik dari berbagai sumber untuk meningkatkan keahlian programming dan skill digital Anda di website kami. Dapatkan akses ke tutorial, artikel, dan sumber daya lainnya yang akan membantu Anda mengembangkan keterampilan Anda."
        />
        <meta property="og:title" content="Tentang Kami | PMB HMIF 2023" />
        <meta
          property="og:description"
          content="Temukan sumber belajar terbaik dari berbagai sumber untuk meningkatkan keahlian programming dan skill digital Anda di website kami. Dapatkan akses ke tutorial, artikel, dan sumber daya lainnya yang akan membantu Anda mengembangkan keterampilan Anda."
        />
        <meta
          property="og:url"
          content="https://pmb-community.vercel.app/sumber-belajar"
        />
        <meta
          property="og:image"
          content="https://pmb-community.vercel.app/images/sumber-belajar.png"
        />
      </Head>

      <UnderDevelopment />
    </>
  );
};

export default SumberBelajar;
