"use client";

import { Heading, HeadingLevel } from "ariakit/heading";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import blobGreenHero from "../../public/blob-green-hero.svg";
import heroImage from "../../public/hero.png";

const Home = () => (
  <>
    <section className="container m-auto grid grid-rows-[max-content_1fr] gap-12 px-8 md:grid-rows-none md:px-12 lg:grid-cols-[1.5fr_1fr]">
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
            <p className="text-lg 2xl:w-5/6">
              Pengembangan minat dan bakat adalah proses meningkatkan kemampuan
              individu dalam bidang yang sesuai dengan minat atau kecenderungan
              alaminya. Hal ini bertujuan untuk mengoptimalkan potensi dan
              kreativitas individu, sehingga mampu mencapai prestasi yang lebih
              baik dalam bidang yang diminatinya.
            </p>
          </HeadingLevel>
        </div>
        <Link
          href="/"
          className="group flex w-max items-center gap-2 rounded-md bg-inquares-pizazz-200 px-12 py-3 text-lg font-medium text-inquares-pizazz-900 transition-all duration-200 hover:bg-inquares-pizazz-300/80 focus:ring-2 focus:ring-inquares-pizazz-300 active:bg-inquares-pizazz-300/90 active:ring-2"
        >
          Tentang Kami
          <MdArrowForward className="h-5 w-5 duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="relative">
        <picture className="flex h-full w-full">
          <Image
            src={heroImage}
            alt="Hero Image"
            className=" h-full w-full object-contain"
          />
        </picture>
        <Image
          src={blobGreenHero}
          alt="Blob Green Hero Ilustration"
          className="absolute inset-0 -z-10"
        />
      </div>
    </section>
    <section />
  </>
);

export default Home;
