'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

import bearStar from "@assets/Emoji/Bear star.avif";

import { MainNavbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Button } from "@components/Button";
import {  MainSidebar } from "@components/Sidebar";

import { useEffect, useState } from "react";

export default function Pricing() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (  
    <main className="h-screen w-screen transition-colors flex flex-col bg-neutral-0">      

      <MainNavbar 
        onClickMenuHandler={() => setSidebarState("opened")}
      />

      <MainSidebar
        state={sidebarState}
        onClickCloseHandler={() => setSidebarState("closed")}
      />

      <section className="pt-[217px] px-4 sm:px-6 lg:px-12 flex flex-col gap-y-[100px] bg-neutral-0">

        <article className="flex flex-col gap-y-4 items-center">
          <section className="flex flex-col gap-y-3 sm:gap-x-[18px] max-w-[600px] text-center relative">
            <Image
              src={bearStar}
              alt="bear star"
              className="h-[100px] w-[100px] rotate-[5deg] absolute right-0 top-[-80px]"
            />

            <h1 className="text-neutral-700 text-display-small font-bold sm:text-display-medium lg:text-display-large leading-display-small sm:leading-display-medium lg:leading-display-large tracking-display">
              <span style={{
                "background": "radial-gradient(50% 50% at 50% 50%, #DEDAFB 0%, #3522E7 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {"Sekali Bayar "}
              </span>
              Dapat Semua Fitur
            </h1>

            <h2 className="text-neutral-600 text-body-medium sm:text-body-large leading-body-medium">
                Tingkatkan Pengalaman Belajar Mu dengan Madingku - Dapatkan Semua Fitur Hanya dengan Sekali Bayar
            </h2>
          </section>
        </article>

        <section className="pb-28 flex flex-wrap items-center justify-center gap-6">
          <article className="max-w-[358px] lg:max-w-[400px] py-8 px-6 flex flex-col gap-y-8 bg-neutral-0 shadow-light-small  border-neutral-100 border-solid border-[1px] rounded-2xl">
              <section className="flex flex-col gap-y-3">
                <h2 className="text-neutral-600 tracking-heading text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3-small sm:leading-h3-medium lg:leading-h3-large">
                  Paket Kaga Bayar
                </h2>

                <section className="flex gap-x-2">
                  <h1 className="text-neutral-700 font-medium tracking-heading text-h1-small sm:text-h1-medium lg:text-h1-large leading-h1-small sm:leading-h1-medium lg:leading-h1-large">
                    Rp0
                  </h1>

                  <h3 className={`
                    text-fiera-400 font-medium tracking-body text-body-small sm:text-body-medium flex items-center
                    h-[31px] py-2 px-3 border-fiera-0 border-solid bg-[#F7F6FE] border-[1px] rounded-2xl rotate-[-8deg]
                  `}>
                    Buat yang pengen nyoba
                  </h3>
                </section>

              </section>

              <Button
                variant="primary"
                size="large"
                forcedLight
                state="active"
                behavior="fill-container"
                label="Yuk cobain"
                onClickHandler={() => router.push("register")}
              />

              <section className="flex flex-col gap-y-5">
                <h4 className="text-neutral-600 tracking-body text-body-small sm:text-body-medium lg:text-body-large">
                  Fitur dasar
                </h4>

                <ul className="flex flex-col gap-y-4 text-neutral-500 tracking-body font-medium text-body-small sm:text-body-medium">
                  <li className="flex gap-x-3 items-center">
                    <Image
                      src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Icons/Circle%20checkbox.svg?updatedAt=1719962477465"}
                      alt="Circle checkbox icon"
                      height={24}
                      width={24}
                    />

                    <p>
                      Manajemen warga kelas
                    </p>
                  </li>

                  <li className="flex gap-x-3 items-center">
                    <Image
                      src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Icons/Circle%20checkbox.svg?updatedAt=1719962477465"}
                      alt="Circle checkbox icon"
                      height={24}
                      width={24}
                    />

                    <p>
                      Beri dan kelola tugas
                    </p>
                  </li>

                  <li className="flex gap-x-3 items-center">
                    <Image
                      src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Icons/Circle%20checkbox.svg?updatedAt=1719962477465"}
                      alt="Circle checkbox icon"
                      height={24}
                      width={24}
                    />

                    <p>
                      Kelola kelompok mata kuliah
                    </p>
                  </li>

                  <li className="flex gap-x-3 items-center">
                    <Image
                      src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Icons/Circle%20checkbox.svg?updatedAt=1719962477465"}
                      alt="Circle checkbox icon"
                      height={24}
                      width={24}
                    />

                    <p>
                      Warga kelas terbatas (10 orang)
                    </p>
                  </li>
                </ul>
              </section>
          </article>

          <article className="max-w-[358px] lg:max-w-[400px] py-8 px-6 flex flex-col gap-y-8 bg-neutral-0 shadow-light-small  border-neutral-100 border-solid border-[1px] rounded-2xl">
              <section className="flex flex-col gap-y-3">
                <h2 className="text-neutral-600 tracking-heading text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3-small sm:leading-h3-medium lg:leading-h3-large">
                  Paket Premium
                </h2>

                <section className="flex gap-x-2">
                  <h1 className="text-neutral-700 font-medium tracking-heading text-h1-small sm:text-h1-medium lg:text-h1-large leading-h1-small sm:leading-h1-medium lg:leading-h1-large">
                    Rp30.000
                  </h1>

                  <h3 className={`
                    text-fiera-400 font-medium tracking-body text-body-small sm:text-body-medium flex items-center
                    h-[31px] py-2 px-3 border-fiera-0 border-solid bg-[#F7F6FE] border-[1px] rounded-2xl rotate-[-8deg]
                  `}>
                    Sekali bayar
                  </h3>
                </section>

              </section>

              <Button
                variant="primary"
                size="large"
                forcedLight
                state="disabled"
                behavior="fill-container"
                label="Belum tersedia di versi beta"
                onClickHandler={() => router.push("register")}
              />

              <section className="flex flex-col gap-y-5">
                <h4 className="text-neutral-600 tracking-body text-body-small sm:text-body-medium lg:text-body-large">
                  Semua fitur dasar dengan tambahan
                </h4>

                <ul className="flex flex-col gap-y-4 text-neutral-500 tracking-body font-medium text-body-small sm:text-body-medium">
                  <li className="flex gap-x-3 items-center">
                    <Image
                      src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Icons/Circle%20checkbox.svg?updatedAt=1719962477465"}
                      alt="Circle checkbox icon"
                      height={24}
                      width={24}
                    />

                    <p>
                      Analisa kelas
                    </p>
                  </li>

                  <li className="flex gap-x-3 items-center">
                    <Image
                      src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Icons/Circle%20checkbox.svg?updatedAt=1719962477465"}
                      alt="Circle checkbox icon"
                      height={24}
                      width={24}
                    />

                    <p>
                      Kelola kisi-kisi ulangan
                    </p>
                  </li>

                  <li className="flex gap-x-3 items-center">
                    <Image
                      src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Icons/Circle%20checkbox.svg?updatedAt=1719962477465"}
                      alt="Circle checkbox icon"
                      height={24}
                      width={24}
                    />

                    <p>
                      Penyimpanan file
                    </p>
                  </li>

                  <li className="flex gap-x-3 items-center">
                    <Image
                      src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Icons/Circle%20checkbox.svg?updatedAt=1719962477465"}
                      alt="Circle checkbox icon"
                      height={24}
                      width={24}
                    />

                    <p>
                      Warga kelas tidak terbatas
                    </p>
                  </li>
                </ul>
              </section>

          </article>
        </section>

        <section className="bg-neutral-0 pb-48">
          <article className="max-w-[600px] mx-4 sm:mx-auto p-6 flex flex-col gap-y-5 items-center text-center rounded-2xl bg-fiera-300">
            <h1 className="text-neutral-0 font-medium tracking-heading text-h2-small sm:text-h2-medium lg:text-h2-large leading-h2-small sm:leading-h2-medium lg:leading-h2-large">
              Ayo Kelola Kelas Dengan Madingku!
            </h1>

            <Button
              variant="secondary"
              size="large"
              forcedLight
              state="active"
              behavior="hug-content"
              label="Daftar Sekarang!"
              onClickHandler={() => router.push("register")}
            />
          </article>
        </section>

      </section>
      <Footer />
    </main>
  );
}