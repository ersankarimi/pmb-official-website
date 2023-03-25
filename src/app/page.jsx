"use client";

import { Heading, HeadingLevel } from "ariakit/heading";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import heroTentangKami from "../../public/hero-tentang-kami.png";
import heroImage from "../../public/hero.png";

const Home = () => (
  <>
    <section className="container relative m-auto grid grid-rows-[max-content_1fr] gap-12 px-8 py-4 md:grid-rows-none md:py-8 md:px-12 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.25fr_1fr] 2xl:grid-cols-[1.5fr_1fr]">
      <div className="flex h-max flex-col gap-8">
        <div className="flex flex-col gap-4">
          <HeadingLevel>
            <HeadingLevel>
              <Heading className="font-semibold uppercase text-inquares-pizazz-600">
                Himpunan Mahasiswa Informatika
              </Heading>
            </HeadingLevel>
            <Heading className="text-4xl font-bold tracking-wider text-inquares-hippie-green-700 md:text-5xl 2xl:text-6xl">
              Departemen Pengembangan Minat dan Bakat
            </Heading>
            <p className="text-lg font-medium text-inquares-blue-whale-600 2xl:w-5/6">
              Kami menyediakan kesempatan untuk berpartisipasi dalam berbagai
              kegiatan seperti workshop, seminar, kompetisi, dan lainnya yang
              didedikasikan untuk mengembangkan minat dan bakat mahasiswa
              Informatika dan Bisnis Digital .
            </p>
          </HeadingLevel>
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
            className=" h-full w-full object-contain"
          />
        </picture>
      </div>
    </section>

    <section className="container m-auto grid grid-cols-2 items-center rounded-2xl bg-inquares-hippie-green-300 px-8 py-4 md:px-12 md:py-8">
      <picture>
        <Image src={heroTentangKami} alt="Gambar Hero Tentang Kami" />
      </picture>
      <div className="flex flex-col gap-8">
        <HeadingLevel>
          <Heading className="text-5xl font-bold tracking-wide text-inquares-hippie-green-900">
            Tentang Kami
          </Heading>
          <div className="flex flex-col gap-2">
            <p className="xl:text-lg">
              Departemen Pengembangan Minat dan Bakat (PMB) HMIF 2023 adalah
              departemen yang bertanggung jawab untuk membantu mahasiswa
              Informatika dan Bisnis Digital dalam mengembangkan minat dan bakat
              mereka di luar kegiatan akademik.
            </p>
            <p className="xl:text-lg">
              Kami menyediakan beragam program dan kegiatan yang dapat membantu
              mahasiswa mengeksplorasi minat dan bakat mereka, serta mengasah
              keterampilan yang relevan dengan bidang teknologi informasi.
            </p>
          </div>

          <Link
            href="/"
            className="group flex w-max items-center gap-2 rounded-md bg-inquares-hippie-green-900/80 px-12 py-3 text-lg font-medium text-inquares-hippie-green-200 ring-inquares-pizazz-400/80 transition-all duration-200 hover:bg-inquares-hippie-green-900/90 focus:ring-2 active:bg-inquares-hippie-green-900 active:ring-[3px]"
          >
            Baca selengkapnya
            <MdArrowForward className="h-5 w-5 duration-200 group-hover:translate-x-1" />
          </Link>
        </HeadingLevel>
      </div>
    </section>
  </>
);

export default Home;
