import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

import errorIllustration from "../../public/assets/error-illustration.png";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Acara dan Kegiatan | PMB HMIF 2023</title>
        <meta
          name="description"
          content="Halaman ini akan berisi mengenai acara dan kegiatan yang akan dan sudah dilaksanakan oleh PMB HMIF 2023."
        />
        <meta property="og:title" content="Tentang Kami | PMB HMIF 2023" />
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
          content="https://raw.githubusercontent.com/pmb-community/pmb-official-website/main/public/page-not-found.png"
        />
      </Head>{" "}
      <section className="grid grid-rows-[max-content_1fr] items-center gap-20 overflow-hidden lg:grid-cols-2 lg:grid-rows-1">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-inquares-green-apple-900 md:text-4xl xl:text-5xl">
              Ooops!
            </h1>
            <h1 className="text-3xl font-bold text-inquares-green-apple-900 md:text-4xl xl:text-5xl">
              Halaman Tidak Ditemukan
            </h1>
          </div>

          <p className="sm:w-3/4 md:w-1/2 md:text-lg lg:w-5/6 2xl:w-3/4">
            Maaf soal itu! Silakan kunjungi beranda kami untuk mendapatkan
            tempat yang Anda tuju.
          </p>

          <Link href="/" tabIndex={-1}>
            <Button variant="pizzaz" fontWeight="medium">
              Kembali ke beranda
            </Button>
          </Link>
        </div>

        <picture className="relative flex h-96">
          <Image
            src={errorIllustration}
            alt="Error Illustration"
            className="h-full w-full object-contain"
          />
        </picture>
      </section>
    </>
  );
};

export default ErrorPage;
