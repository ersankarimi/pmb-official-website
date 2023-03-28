import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { Separator } from "@/components";

import heroTentangKami from "../../public/hero-tentang-kami.png";
import heroImage from "../../public/hero.png";

const Home = () => (
  <>
    <section className="grid grid-cols-1 grid-rows-[max-content_1fr] gap-12 md:grid-rows-none lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.25fr_1fr] 2xl:grid-cols-[1.5fr_1fr]">
      <div className="flex h-max flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
        <div className="flex flex-col gap-4 sm:w-5/6 lg:w-full">
          <h3 className="font-semibold uppercase text-inquares-pizazz-600">
            HIMPUNAN MAHASISWA INFORMATIKA
          </h3>
          <h1 className="text-4xl font-bold tracking-wider text-inquares-hippie-green-700 sm:text-5xl 2xl:text-6xl">
            Departemen Pengembangan Minat dan Bakat
          </h1>
          <p className="font-medium text-inquares-blue-whale-600 lg:text-lg 2xl:w-5/6">
            Kami menyediakan kesempatan untuk berpartisipasi dalam berbagai
            kegiatan seperti workshop, seminar, kompetisi, dan lainnya yang
            didedikasikan untuk mengembangkan minat dan bakat mahasiswa
            Informatika dan Bisnis Digital .
          </p>
        </div>
        <Link
          href="/"
          className="group flex w-max items-center gap-2 rounded-md bg-inquares-pizazz-300/80 px-12 py-3 text-lg font-medium text-inquares-pizazz-900 ring-inquares-pizazz-400/80 transition-all duration-200 hover:bg-inquares-pizazz-300/90 focus:ring-2 active:bg-inquares-pizazz-300 active:ring-[3px]"
        >
          Program Kami
          <MdArrowForward className="h-5 w-5 duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      <div>
        <picture className="flex h-full max-h-[320px] w-full md:max-h-[380px] lg:max-h-[420px]">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="h-full w-full object-contain"
            priority
          />
        </picture>
      </div>
    </section>

    <section className="relative grid grid-cols-1 grid-rows-[max-content_1fr] items-center gap-12 overflow-hidden rounded-2xl bg-inquares-hippie-green-300 p-8 sm:p-8 md:p-12 lg:grid-cols-2 lg:grid-rows-1 lg:py-14">
      <div className="absolute -top-8 left-0 h-96 w-96 rounded-full bg-inquares-hippie-green-400/40 blur-2xl" />
      <div className="absolute -bottom-[20%] right-0 h-96 w-96 rounded-full bg-inquares-hippie-green-400/40 blur-2xl" />
      <picture className="relative flex h-full max-h-[320px] w-full md:max-h-[380px] lg:max-h-[520px]">
        <Image
          src={heroTentangKami}
          alt="Gambar Hero Tentang Kami"
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </picture>
      <div className="m-auto flex flex-col gap-8 sm:max-w-[80%]">
        <div className="flex w-max flex-col gap-1">
          <h2 className="text-3xl font-bold tracking-wide text-inquares-hippie-green-900 lg:text-4xl 2xl:text-5xl">
            Tentang Kami
          </h2>
          <Separator className="h-1 w-1/2 bg-inquares-hippie-green-900" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="xl:text-lg">
            Departemen Pengembangan Minat dan Bakat (PMB) HMIF 2023 adalah
            departemen yang bertanggung jawab untuk membantu mahasiswa
            Informatika dan Bisnis Digital dalam mengembangkan minat dan bakat
            mereka didalam maupun diluar kegiatan akademik.
          </p>
          <p className="xl:text-lg">
            Kami menyediakan beragam program dan kegiatan yang dapat membantu
            mahasiswa mengeksplorasi minat dan bakat mereka, serta mengasah
            keterampilan yang relevan dengan bidang teknologi informasi.
          </p>
        </div>

        <Link
          href="/"
          className="group flex w-max items-center gap-2 rounded-md border-2 border-inquares-hippie-green-900/80 px-8 py-2 text-base font-medium text-inquares-hippie-green-900 outline-none ring-inquares-hippie-green-800/80 transition-all duration-200 hover:bg-inquares-hippie-green-900/90 hover:text-inquares-hippie-green-200 focus:ring-2 active:bg-inquares-hippie-green-900 active:ring-[3px] lg:text-lg"
        >
          Baca selengkapnya
        </Link>
      </div>
    </section>
  </>
);

export default Home;
