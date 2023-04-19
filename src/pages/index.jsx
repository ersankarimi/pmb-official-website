import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { PageSeo, Separator } from "@/components";

import databaseCapaianMahasiswaIllustration from "../../public/assets/database-capaian-mahasiswa-illustration.png";
import hackathonHmifIllustration from "../../public/assets/hackathon-hmif-illustration.png";
import heroImage from "../../public/assets/hero-beranda-illustration.png";
import heroTentangKami from "../../public/assets/hero-tentang-kami-illustration.png";
import kuliahTamuIllustration from "../../public/assets/kuliah-tamu-illustration.png";
import mappingKompetensiDanMinatIllustration from "../../public/assets/mapping-kompetensi-dan-minat-illustration.png";
import ngobrolSantaiIllustration from "../../public/assets/ngobrol-santai-illustration.png";
import programKompetensiDanKeterampilanIllustration from "../../public/assets/program-kompetensi-dan-keterampilan-illustration.png";
import videoLearningCenterIllustration from "../../public/assets/video-learning-center-illustration.png";

const Home = ({ programKerjaList }) => {
  return (
    <>
      <PageSeo
        title="Beranda | PMB HMIF 2023"
        description="Selamat datang di website PMB HMIF 2023. Website ini berisi informasi mengenai PMB HMIF 2023, program kerja HMIF, sumber belajar, dan lainnya yang dapat membantu kamu dalam mengembangkan diri dan menambah wawasan."
        url="https://pmb-community.vercel.app/"
        imageUrl="https://raw.githubusercontent.com/pmb-community/pmb-official-website/main/public/assets/pages/beranda.png"
      />

      <div className="mb-20 flex w-full flex-col items-center justify-center gap-32 py-12">
        <section className="grid grid-cols-1 grid-rows-[max-content_1fr] gap-12 px-4 lg:container md:grid-rows-none md:p-8 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.25fr_1fr] xl:px-12 2xl:grid-cols-[1.5fr_1fr]">
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

        <section className="flex w-full items-center justify-center overflow-hidden rounded-tr-[32px] rounded-tl-[32px] bg-inquares-hippie-green-300 p-12">
          <div className="relative grid grid-cols-1 grid-rows-[max-content_1fr] items-center gap-12 rounded-2xl lg:container  lg:grid-cols-2 lg:grid-rows-1 lg:py-14">
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
                  Informatika dan Bisnis Digital dalam mengembangkan minat dan
                  bakat mereka didalam maupun diluar kegiatan akademik.
                </p>
                <p className="xl:text-lg">
                  Kami menyediakan beragam program dan kegiatan yang dapat
                  membantu mahasiswa mengeksplorasi minat dan bakat mereka,
                  serta mengasah keterampilan yang relevan dengan bidang
                  teknologi informasi.
                </p>
              </div>

              <Link
                href="/"
                className="group flex w-max items-center gap-2 rounded-md border-2 border-inquares-hippie-green-900/80 px-8 py-2 text-base font-medium text-inquares-hippie-green-900 outline-none ring-inquares-hippie-green-800/80 transition-all duration-200 hover:bg-inquares-hippie-green-900/90 hover:text-inquares-hippie-green-200 focus:ring-2 active:bg-inquares-hippie-green-900 active:ring-[3px] lg:text-lg"
              >
                Baca selengkapnya
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-20 px-4 lg:container xl:px-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold tracking-wide text-inquares-hippie-green-600 lg:text-4xl 2xl:text-5xl">
              Program Kerja
            </h2>
            <p className="text-center text-lg lg:w-3/4">
              PMB memiliki beberapa program kerja yang bisa membantu
              mengoptimalkan minat dan bakat anda
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:grid-rows-1">
            {programKerjaList.map(({ id, title, description, image, link }) => {
              if (title === "Hackathon HMIF") {
                return (
                  <Link
                    key={`beranda-program-kerja-list-item-${id}`}
                    href={link}
                    className="grid content-center items-center justify-center gap-8 overflow-hidden rounded-lg bg-gradient-beranda-proker-card py-8 px-5 outline-none ring-inquares-hippie-green-500/80 delay-75 duration-300 hover:ring-4 focus:ring-4 sm:col-span-2 sm:row-start-1 md:col-start-1 md:grid-cols-[1fr_1.25fr] md:px-12 2xl:col-span-1 2xl:col-start-1 2xl:row-span-2 2xl:row-start-1 2xl:grid-cols-1"
                  >
                    <picture className="flex h-40 w-full md:h-64  xl:h-56 2xl:h-64">
                      <Image
                        src={image}
                        alt={`${title} Illustration`}
                        className="h-full w-full object-contain sm:scale-105 2xl:scale-100"
                      />
                    </picture>

                    <div className="text-inquares flex flex-col items-center justify-center gap-2 text-center text-inquares-hippie-green-900">
                      <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
                      <p>{description}</p>
                    </div>
                  </Link>
                );
              }

              return (
                <Link
                  key={`beranda-program-kerja-list-item-${id}`}
                  href={link}
                  className="flex flex-col gap-8 rounded-lg bg-gradient-beranda-proker-card py-8 px-5 outline-none ring-inquares-hippie-green-500/80 delay-75 duration-300 hover:ring-4 focus:ring-4"
                >
                  <picture className="flex h-40 w-full">
                    <Image
                      src={image}
                      alt="Mapping Kompetensi dan Minat Illustration"
                      className="h-full w-full object-contain"
                    />
                  </picture>

                  <div className="text-inquares flex flex-col items-center justify-center gap-2 text-center text-inquares-hippie-green-900">
                    <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
                    <p>{description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      programKerjaList: [
        {
          id: 1,
          title: "Mapping Kompetensi dan Minat",
          description:
            "Program kerja ini bertujuan untuk mengetahui minat, bakat, serta potensi yang dimiliki oleh setiap mahasiswa Informatika dan Bisnis Digital ITK.",
          image: mappingKompetensiDanMinatIllustration,
          link: "/program-kerja/mapping-kompetensi-dan-minat",
        },
        {
          id: 2,
          title: "Database Capaian Mahasiswa",
          description:
            "Program kerja ini bertujuan untuk mengetahui capaian mahasiswa Informatika dan Bisnis Digital ITK dalam berbagai bidang, baik bidang akademik maupun non-akademik.",
          image: databaseCapaianMahasiswaIllustration,
          link: "/program-kerja/database-capaian-mahasiswa",
        },
        {
          id: 3,
          title: "Video Learning Center",
          description:
            "Menyediakan video pembelajaran yang berkualitas tinggi untuk memfasilitasi proses pembelajaran mahasiswa. Video-video ini dibuat dengan tujuan untuk memudahkan mahasiswa mencari sumber daya belajar.",
          image: videoLearningCenterIllustration,
          link: "/program-kerja/video-learning-center",
        },
        {
          id: 4,
          title: "Program Peningkatan Kompetensi dan Keterampilan",
          description:
            "Kegiatan mahasiswa untuk melatih, membimbing, dan mengajarkan ilmu sesuai dengan minat dan bakat masing-masing mahasiswa Informatika dan Bisnis Digital ITK.",
          image: programKompetensiDanKeterampilanIllustration,
          link: "/program-kerja/program-peningkatan-kompetensi-dan-keterampilan",
        },
        {
          id: 5,
          title: "Peningkatan Kompetensi dan Wawasan: Acara Kuliah Tamu HMIF",
          description:
            "Kegiatan ini diselenggarakan untuk menambah dan memperluas wawasan mahasiswa Informatika melalui pembicara yang sesuai dengan bidangnya khususnya di bidang Informatika atau lainnya.",
          image: kuliahTamuIllustration,
          link: "/program-kerja/kuliah-tamu-hmif",
        },
        {
          id: 6,
          title: "Ngobrol Santai",
          description:
            "Kegiatan ini bertujuan untuk meningkatkan keterampilan berbicara dan mendengarkan, mengembangkan kemampuan berdiskusi, serta meningkatkan wawasan mahasiswa Informatika dan Bisnis Digital ITK.",
          image: ngobrolSantaiIllustration,
          link: "/program-kerja/ngobrol-santai",
        },
        {
          id: 7,
          title: "Hackathon HMIF",
          description:
            "Kegiatan ini diselenggarakan untuk mengasah skill dengan mengadu kemampuan mahasiswa Informatika pada ajang ini untuk mempersiapkan mahasiswa-mahasiswa pada ajang kompetitif lainnya.",
          image: hackathonHmifIllustration,
          link: "/program-kerja/hackathon-hmif",
        },
      ],
    },
  };
};

export default Home;
