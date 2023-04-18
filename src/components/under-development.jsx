import Image from "next/image";
import Link from "next/link";

import underDevelopmentIllustration from "../../public/under-development.png";
import { Button } from "./button";

export const UnderDevelopment = ({ children }) => {
  return (
    <section className="grid grid-rows-[max-content_1fr] items-center gap-20 overflow-hidden lg:grid-cols-2 lg:grid-rows-1">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-inquares-green-apple-900 md:text-4xl xl:text-5xl">
            Segera hadir!
          </h1>
          <h1 className="text-2xl font-bold text-inquares-green-apple-900/90 md:text-3xl xl:text-4xl">
            Halaman Yang Anda Tuju Sedang Dalam Pengembangan
          </h1>
        </div>

        <p className="sm:w-3/4 md:w-1/2 md:text-lg lg:w-5/6 2xl:w-3/4">
          Kami sedang melakukan pengembangan pada halaman yang Anda tuju.
          Silakan kembali ke beranda untuk melihat halaman lainnya.
        </p>

        <Link href="/" tabIndex={-1}>
          <Button variant="pizzaz" fontWeight="medium">
            Kembali ke beranda
          </Button>
        </Link>
      </div>

      <picture className="relative flex h-96">
        <Image
          src={underDevelopmentIllustration}
          alt="Error Illustration"
          className="h-full w-full object-contain"
          priority
        />
      </picture>

      {children}
    </section>
  );
};
