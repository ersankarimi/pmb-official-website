import Image from "next/image";
import Link from "next/link";

import { Button, PageSeo } from "@/components";

import mappingKompetensiDanMinatIllustration from "../../../public/assets/mapping-kompetensi-dan-minat-illustration.png";

const MappingKompetensiDanMinat = () => {
  return (
    <>
      <PageSeo
        title="Mapping Kompetensi dan Minat | PMB HMIF 2023"
        description="Mapping Kompetensi dan Minat adalah salah satu program kerja yang dibuat oleh HMIF untuk membantu mahasiswa dalam menentukan jurusan yang sesuai dengan minat dan bakatnya. Program kerja ini bertujuan untuk melakukan mapping atau pemetaan terkait kompetensi dan minat warga HMIF ITK 2023."
        url="https://pmb-community.vercel.app/program-kerja/mapping-kompetensi-dan-minat"
        image="https://raw.githubusercontent.com/pmb-community/pmb-official-website/main/public/assets/pages/mapping-kompetensi-dan-minat.png"
      />

      <section className="mx-auto grid grid-rows-[max-content_1fr] items-center gap-8 overflow-hidden px-8 py-20 lg:container md:gap-20 lg:grid-cols-2 lg:grid-rows-1">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold uppercase text-inquares-hippie-green-700">
              Program Kerja
            </h3>
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold text-inquares-hippie-green-900 2xl:w-3/4">
                Mapping Kompetensi dan Minat
              </h1>
              <div className="flex flex-col gap-2">
                <p className="text-lg">
                  Program kerja ini bertujuan untuk melakukan mapping atau
                  pemetaan terkait kompetensi dan minat warga HMIF ITK 2023.
                  Dengan adanya program kerja ini, diharapkan dapat membantu
                  kami (PMB) untuk mendata dan mengetahui minat dan bakat warga
                  HMIF ITK 2023.
                </p>
                <p className="text-lg">
                  Dari hasil mapping tersebut, kami akan menentukan program,
                  kegiatan dan acara apa saja yang cocok untuk mendukung minat
                  dan bakat dari warga HMIF ITK.
                </p>
              </div>
            </div>
          </div>

          <Link href="/" tabIndex={-1}>
            <Button variant="pizzaz" fontWeight="medium">
              Isi form mapping sekarang
            </Button>
          </Link>
        </div>

        <picture className="relative flex h-96 w-full">
          <Image
            src={mappingKompetensiDanMinatIllustration}
            alt="Mapping Kompetensi dan Minat Illustration"
            className="object-contain"
          />
        </picture>
      </section>
    </>
  );
};

export default MappingKompetensiDanMinat;
