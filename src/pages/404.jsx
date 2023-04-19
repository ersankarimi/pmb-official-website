import Image from "next/image";
import Link from "next/link";

import { Button, PageSeo } from "@/components";

import errorIllustration from "../../public/assets/error-illustration.png";

const ErrorPage = () => {
  return (
    <>
      <PageSeo
        title="Halaman Tidak Ditemukan | PMB HMIF 2023"
        description="Halaman yang Anda cari tidak ditemukan. Halaman ini berisi informasi mengenai halaman yang tidak ditemukan."
        url="https://pmb-community.vercel.app/404"
        imageUrl="https://raw.githubusercontent.com/pmb-community/pmb-official-website/main/public/assets/pages/page-not-found.png"
      />

      <section className="mx-auto grid grid-rows-[max-content_1fr] items-center gap-8 overflow-hidden px-8 py-20 lg:container md:gap-20 lg:grid-cols-2 lg:grid-rows-1">
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
