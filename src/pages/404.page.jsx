import Image from "next/image";
import Link from "next/link";

import errorIllustration from "../../public/error-illustration.png";

const ErrorPage = () => {
  return (
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
          Maaf soal itu! Silakan kunjungi beranda kami untuk mendapatkan tempat
          yang Anda tuju.
        </p>

        <Link
          href="/"
          className="group flex w-max items-center gap-2 rounded-md bg-inquares-pizazz-300/80 px-12 py-3 text-lg font-medium text-inquares-pizazz-900 ring-inquares-pizazz-400/80 transition-all duration-200 hover:bg-inquares-pizazz-300/90 focus:ring-2 active:bg-inquares-pizazz-300 active:ring-[3px]"
        >
          Kembali ke beranda
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
  );
};

export default ErrorPage;
