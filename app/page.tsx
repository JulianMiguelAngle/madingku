'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

import bearHappy from "@assets/Emoji/Bear happy.avif";
import bearLove from "@assets/Emoji/Bear love.avif";
import bearStar from "@assets/Emoji/Bear star.avif";

import mockup from "@assets/Light/Mockup/mockup.json";
import testimonial from "@/data/testimonial.json";

import { MainNavbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Button } from "@components/Button";
import { FeatureOption } from "@components/FeatureOption";
import { Testimonial } from "@components/Testimonial";
import {  MainSidebar } from "@components/Sidebar";

import { useEffect, useState, useRef } from "react";

import { useIsVisible } from "@lib/scroll-transition";

export default function Home() {
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

      <section className="px-4 sm:px-6 lg:px-12 flex flex-col gap-y-[100px] bg-neutral-0">

        <article className="pt-[217px] h-screen flex flex-col gap-y-4 items-center">
          <p className="py-2 px-3 w-fit bg-[#F7F6FE] text-fiera-400 rounded-2xl text-body-small sm:text-body-medium">
            <span className="font-medium">Madingku</span> beta
          </p>

          <section className="flex flex-col gap-y-3 sm:gap-x-[18px] max-w-[600px] text-center relative">
            <Image
              src={bearHappy}
              alt="bear happy"
              className="h-[100px] w-[100px] rotate-[5deg] absolute right-0 top-[-80px]"
            />

            <h1 className="text-neutral-700 text-display-small font-bold sm:text-display-medium lg:text-display-large leading-display-small sm:leading-display-medium lg:leading-display-large tracking-display">
              Tetap Terhubung Dengan
              <span style={{
                "background": "radial-gradient(50% 50% at 50% 50%, #DEDAFB 0%, #3522E7 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {" Madingku"}
              </span>
            </h1>

            <h2 className="text-neutral-600 text-body-medium sm:text-body-large leading-body-medium">
              Madingku adalah aplikasi web yang dapat membantu mu mengatur kelas.
            </h2>
          </section>

          <section className="flex gap-x-3 sm:gap-x-[18px]">
            <Button
              variant="secondary"
              size="large"
              forcedLight
              state="active"
              behavior="hug-content"
              label="Buat akun"
              onClickHandler={() => router.push("register")}
            />

            <Button
              variant="primary"
              size="large"
              forcedLight
              state="active"
              behavior="hug-content"
              label="Masuk"
              onClickHandler={() => router.push("/login")}
            />
          </section>
          
        </article>

        <MadingkuInteractivity />

        <section className="flex flex-col gap-y-[100px]">
          <ManageClassCitizen />
          <ManageTask />
          <ManageGroup />
        </section>
      </section>

      <section className="py-36 bg-neutral-0">
        <section className="relative">
          <span 
            aria-description="Blur transition"
            className="block h-[30px] bg-fiera-500 blur-[50px] absolute top-0 right-0 left-0"
          />

          <span 
            aria-description="Blur transition"
            className="block h-[30px] bg-fiera-500 blur-[50px] absolute bottom-0 right-0 left-0"
          />

          <article className="py-20 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-12 bg-neutral-700 rounded-3xl overflow-hidden relative z-[1]">

            <section className="flex flex-col gap-y-2 text-center">
              <h1 className="text-neutral-0 font-bold text-h1-small sm:text-h1-medium lg:text-h1-large leading-h1-small">
                Lebih Nyaman dengan 
                <span style={{
                  "background": "linear-gradient(180deg, #FFF 0%, #9187F2 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>{" Mode Gelap"}</span>
              </h1>

              <h2 className="text-neutral-100 text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body">
                Bekerja dan belajar dengan lebih nyaman, terutama di malam hari atau di ruangan dengan pencahayaan redup.
              </h2>
            </section>

            <section className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center">
            <section className="flex justify-center">
              <Image
                alt="Class citizen list mobile"
                src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Mockup%20Dark/Mobile/Citizen%20list.avif?updatedAt=1719927723507"}
                objectFit="contain"
                className="sm:hidden"
                height={300}
                width={300}
              />

              <Image
                alt="Class citizen list tablet"
                src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Mockup%20Dark/Tablet/Citizen%20list.avif?updatedAt=1719927723507"}
                objectFit="contain"
                className="hidden sm:block"
                height={300}
                width={500}
              />
            </section>

            <section className="flex justify-center">
              <Image
                alt="Class citizen list mobile"
                src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Mockup%20Dark/Mobile/Subject.avif?updatedAt=1719927723474"}
                objectFit="contain"
                className="sm:hidden"
                height={300}
                width={300}
              />

              <Image
                alt="Class citizen list tablet"
                src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Mockup%20Dark/Tablet/Subject.avif?updatedAt=1719927723474"}
                objectFit="contain"
                className="hidden sm:block"
                height={300}
                width={500}
              />
            </section>

            <section className="flex justify-center">
              <Image
                alt="Class citizen list mobile"
                src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Mockup%20Dark/Mobile/Task.avif?updatedAt=1719927723442"}
                objectFit="contain"
                className="sm:hidden"
                height={300}
                width={300}
              />

              <Image
                alt="Class citizen list tablet"
                src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Mockup%20Dark/Tablet/Task.avif?updatedAt=1719927723442"}
                objectFit="contain"
                className="hidden sm:block"
                height={300}
                width={500}
              />
            </section>
            </section>

          </article>
        </section>
      </section>

      <article className="pb-36 bg-neutral-0 flex flex-col gap-y-4">
        <section className="px-4 flex flex-col items-center gap-y-2 text-center">

          <section className="max-w-[600px] relative">
            <h1 className="text-neutral-700 font-semibold tracking-heading text-h2-small sm:text-h2-medium lg:text-h2-large leading-h2-small sm:leading-h2-medium lg:leading-h2-large">
              Kami Sangat Senang dengan Madingku!
            </h1>

            <Image
              src={bearLove}
              alt="bear happy"
              className="h-[60px] w-[60px] rotate-[5deg] absolute left-4 top-[-50px]"
            />

            <Image
              src={bearStar}
              alt="bear happy"
              className="h-[60px] w-[60px] rotate-[5deg] absolute right-6 top-[20px]"
            />
          </section>

          <h2 className="text-neutral-600 tracking-body text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large">
            100+ pemangku kepentingan di kelas sudah mencoba
          </h2>

        </section>

        <section className="pt-2 pb-4 px-4 flex lg:justify-center gap-x-4 overflow-scroll">
          {testimonial.map((testimony) => {
            return (
              <Testimonial
                key={testimony.id}
                name={testimony.name}
                avatar={testimony.photo}
                color={testimony.color}
                role={testimony.role}
                content={testimony.testimonial}
              />
            );
          })}
        </section>
      </article>

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

      <Footer />
    </main>
  );
}

function MadingkuInteractivity() {
  const [isWithInteractivity, setIsWithInteractivity] = useState(true);

  return (
    <article className="w-full flex flex-col gap-y-5 items-center">

      <section className="text-center flex flex-col items-center gap-y-1.5">
        <h1 className="text-neutral-700 font-bold text-h1-small sm:text-h1-medium lg:text-h1-large tracking-heading leading-h1-small sm:leading-h1-medium lg:leading-h1-large">
          Interaktivitas Kelas
        </h1>

        <h2 className="text-neutral-600 text-body-small sm:text-body-medium tracking-body leading-body-small sm:leading-body-medium">
          Madingku menyediakan solusi untuk mengelola informasi penting di kelas Mu.
        </h2>
      </section>

      <fieldset className="p-1.5 w-fit flex items-center bg-neutral-0 shadow-light-small rounded-lg">
        <button className={`
          py-1.5 px-3 h-[32px] sm:h-[34px] w-fit text-body-small sm:text-body-medium tracking-body text-center rounded-md
          ${!isWithInteractivity ? "select-none bg-fiera-400 text-neutral-0" : "cursor-pointer bg-neutral-0 text-neutral-500"}
        `}
        onClick={() => setIsWithInteractivity(false)}>
          Tanpa Madingku
        </button>

        <button className={`
          py-1.5 px-3 h-[32px] sm:h-[34px] w-fit text-body-small sm:text-body-medium tracking-body text-center rounded-md
          ${isWithInteractivity ? "select-none bg-fiera-400 text-neutral-0" : "cursor-pointer bg-neutral-0 text-neutral-500"}
        `}
        onClick={() => setIsWithInteractivity(true)}>
          Dengan Madingku
        </button>
      </fieldset>

      {isWithInteractivity ? (
        <section className="w-full flex justify-center">
          <Image
            alt="Class interactivity"
            src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Interactivity%20with%20madingku/Mobile.avif?updatedAt=1719927926062"}
            height={200}
            width={300}
            objectFit="contain"
            className="sm:hidden"
          />

          <Image
            alt="Class interactivity"
            src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Interactivity%20with%20madingku/Tablet.avif?updatedAt=1719927926585"}
            height={400}
            width={600}
            objectFit="contain"
            className="hidden sm:block lg:hidden"
          />

          <Image
            alt="Class interactivity"
            src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Interactivity%20with%20madingku/Desktop.avif?updatedAt=1719927926135"}
            height={600}
            width={1000}
            objectFit="contain"
            className="hidden lg:block"
          />
        </section>
      ) : (
        <section className="w-full flex justify-center">
          <Image
            alt="Class without interactivity"
            src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Interactivity%20without%20madingku/Mobile.avif?updatedAt=1719927956518"}
            height={200}
            width={300}
            objectFit="contain"
            className="sm:hidden"
          />

          <Image
            alt="Class without interactivity"
            src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Interactivity%20without%20madingku/Tablet.avif?updatedAt=1719927956740"}
            height={400}
            width={600}
            objectFit="contain"
            className="hidden sm:block lg:hidden"
          />

          <Image
            alt="Class interactivity"
            src={"https://ik.imagekit.io/Jul1an/Madingku%20Assets/Interactivity%20without%20madingku/Desktop.avif?updatedAt=1719927956662"}
            height={600}
            width={1000}
            objectFit="contain"
            className="hidden lg:block"
          />
        </section>
      )}
    </article>
  );
}

function ManageClassCitizen() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const [selectedFeature, setSelectedFeature] = useState<"class-citizen" | "lecture" | "subject">("class-citizen");

  const manageClassMockup = mockup.manageClass;
  
  const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABBSURBVHgBLYzBDcAwCAN9EvuvWTX95lscQgJIgDnMnJlIsl0N10SM50fIlQL2UTHebKGDLl3yEFdTfEUev353bSwSRCYyOpToaAAAAABJRU5ErkJggg==";

  return (
    <article ref={ref}
    className={`flex flex-col md:flex-row items-center md:items-start justify-center gap-6 transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>

      <section className="md:py-6 flex flex-col items-center md:items-start gap-y-6 md:gap-x-8">

        <section className="flex flex-col gap-y-2 text-center md:text-left max-w-[400px]">
          <h1 className="text-neutral-700 font-semibold tracking-heading text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3 sm:leading-h3-medium lg:leading-h3-large">
            Manajemen Warga Kelas
          </h1>

          <h2 className="text-neutral-600 tracking-body text-body-small sm:text-body-medium leading-body-small sm:leading-body-medium">
            Kamu dapat memberikan tanggung jawab yang akan mendorong mereka berkontribusi secara aktif dalam komunitas kelas.
          </h2>
        </section>

        <fieldset className="w-full flex flex-col gap-y-2 max-w-[400px]">
          <FeatureOption
            label="Warga kelas✊🏻"
            state={selectedFeature === "class-citizen" ? "selected" : "active"}
            onClickOptionHandler={() => setSelectedFeature("class-citizen")}
          />

          <FeatureOption
            label="Menambahkan mata kuliah dan dosennya 📖"
            state={selectedFeature === "subject" ? "selected" : "active"}
            onClickOptionHandler={() => setSelectedFeature("subject")}
          />

          <FeatureOption
            label="Mau nambahin dosen yang belum ada..."
            state={selectedFeature === "lecture" ? "selected" : "active"}
            onClickOptionHandler={() => setSelectedFeature("lecture")}
          />
        </fieldset>
      </section>


      <section className={`${selectedFeature === "class-citizen" ? "block" : "hidden"} flex justify-center`}>
        <Image
          src={manageClassMockup[0].url[0]}
          alt={manageClassMockup[0].name[0]}
          height={400}
          width={300}
          placeholder="blur"
          blurDataURL={base64}
          objectFit="contain"
          className="sm:hidden"
        />

        <Image
          src={manageClassMockup[0].url[1]}
          alt={manageClassMockup[0].name[1]}
          height={300}
          width={400}
          placeholder="blur"
          blurDataURL={base64}
          className="hidden sm:block"
        />
      </section>

      <section className={`${selectedFeature === "subject" ? "block" : "hidden"} flex justify-center`}>
        <Image
          src={manageClassMockup[1].url[0]}
          alt={manageClassMockup[1].name[0]}
          height={400}
          width={300}
          placeholder="blur"
          blurDataURL={base64}
          objectFit="contain"
          className="sm:hidden"
        />

        <Image
          src={manageClassMockup[1].url[1]}
          alt={manageClassMockup[1].name[1]}
          height={300}
          width={400}
          placeholder="blur"
          blurDataURL={base64}
          className="hidden sm:block"
        />
      </section>

      <section className={`${selectedFeature === "lecture" ? "block" : "hidden"} flex justify-center`}>
        <Image
          src={manageClassMockup[2].url[0]}
          alt={manageClassMockup[2].name[0]}
          height={400}
          width={300}
          placeholder="blur"
          blurDataURL={base64}
          className="sm:hidden"
        />

        <Image
          src={manageClassMockup[2].url[1]}
          alt={manageClassMockup[2].name[1]}
          height={300}
          width={400}
          placeholder="blur"
          blurDataURL={base64}
          className="hidden sm:block"
        />
      </section>
    </article>
  );
}

function ManageTask() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const [selectedFeature, setSelectedFeature] = useState<"task-list" | "create-task" | "edit-task">("task-list");
  
  const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABBSURBVHgBLYzBDcAwCAN9EvuvWTX95lscQgJIgDnMnJlIsl0N10SM50fIlQL2UTHebKGDLl3yEFdTfEUev353bSwSRCYyOpToaAAAAABJRU5ErkJggg==";
  
  const manageTaskMockup = mockup.manageTask;

  return (
    <article ref={ref}
    className={`flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-6 transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>

      <section className="md:py-6 flex flex-col items-center md:items-start gap-6">

        <section className="flex flex-col gap-y-2 text-center md:text-left max-w-[400px]">
          <h1 className="text-neutral-700 font-semibold tracking-heading text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3 sm:leading-h3-medium lg:leading-h3-large">
            Beri dan Kelola Tugas
          </h1>

          <h2 className="text-neutral-600 tracking-body text-body-small sm:text-body-medium leading-body-small sm:leading-body-medium">
            Kamu dapat membuat tugas serta menambahkan instruksi yang jelas supaya mudah dipahami oleh warga kelas.
          </h2>
        </section>

        <fieldset className="w-full flex flex-col gap-y-2 max-w-[600px]">
          <FeatureOption
            label="Lihat daftar tugas 👀"
            state={selectedFeature === "task-list" ? "selected" : "active"}
            onClickOptionHandler={() => setSelectedFeature("task-list")}
          />

          <FeatureOption
            label="Buat tugas, biar jadi manusia teladan"
            state={selectedFeature === "create-task" ? "selected" : "active"}
            onClickOptionHandler={() => setSelectedFeature("create-task")}
          />

          <FeatureOption
            label="Edit tugas... ⭐"
            state={selectedFeature === "edit-task" ? "selected" : "active"}
            onClickOptionHandler={() => setSelectedFeature("edit-task")}
          />
        </fieldset>
      </section>       

      <section className={`${selectedFeature === "task-list" ? "block" : "hidden"} flex justify-center`}>
        <Image
          src={manageTaskMockup[0].url[0]}
          alt={manageTaskMockup[0].name[0]}
          height={400}
          width={300}
          placeholder="blur"
          blurDataURL={base64}
          objectFit="contain"
          className="sm:hidden"
        />

        <Image
          src={manageTaskMockup[0].url[1]}
          alt={manageTaskMockup[0].name[1]}
          height={300}
          width={400}
          placeholder="blur"
          blurDataURL={base64}
          className="hidden sm:block"
        />
      </section>

      <section className={`${selectedFeature === "create-task" ? "block" : "hidden"} flex justify-center`}>
        <Image
          src={manageTaskMockup[1].url[0]}
          alt={manageTaskMockup[1].name[0]}
          height={400}
          width={300}
          placeholder="blur"
          blurDataURL={base64}
          objectFit="contain"
          className="sm:hidden"
        />

        <Image
          src={manageTaskMockup[1].url[1]}
          alt={manageTaskMockup[1].name[1]}
          height={300}
          width={400}
          placeholder="blur"
          blurDataURL={base64}
          className="hidden sm:block"
        />
      </section>

      <section className={`${selectedFeature === "edit-task" ? "block" : "hidden"} flex justify-center`}>
        <Image
          src={manageTaskMockup[2].url[0]}
          alt={manageTaskMockup[2].name[0]}
          height={400}
          width={300}
          placeholder="blur"
          blurDataURL={base64}
          objectFit="contain"
          className="sm:hidden"
        />

        <Image
          src={manageTaskMockup[2].url[1]}
          alt={manageTaskMockup[2].name[1]}
          height={300}
          width={400}
          placeholder="blur"
          blurDataURL={base64}
          className="hidden sm:block"
        />
      </section>
    </article>
  );
}

function ManageGroup() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const [selectedFeature, setSelectedFeature] = useState<"group-list" | "create-group">("group-list");
  
  const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABBSURBVHgBLYzBDcAwCAN9EvuvWTX95lscQgJIgDnMnJlIsl0N10SM50fIlQL2UTHebKGDLl3yEFdTfEUev353bSwSRCYyOpToaAAAAABJRU5ErkJggg==";
  
  const manageGroupMockup = mockup.manageGroup;

  return (
    <article ref={ref}
    className={`flex flex-col md:flex-row items-center md:items-start justify-center gap-6 transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>

      <section className="md:py-6 flex flex-col items-center md:items-start gap-y-6 md:gap-x-8">

        <section className="flex flex-col gap-y-2 text-center md:text-left max-w-[400px]">
          <h1 className="text-neutral-700 font-semibold tracking-heading text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3 sm:leading-h3-medium lg:leading-h3-large">
            Kelola Kelompok Mata Kuliah
          </h1>

          <h2 className="text-neutral-600 tracking-body text-body-small sm:text-body-medium leading-body-small sm:leading-body-medium">
            Kamu dapat membuat kelompok untuk berbagai mata kuliah dan menambahkan warga kelas sebagai anggota kelompok.
          </h2>
        </section>

        <fieldset className="w-full flex flex-col gap-y-2 max-w-[600px]">
          <FeatureOption
            label="Lihat daftar kelompok 🧑‍🤝‍🧑"
            state={selectedFeature === "group-list" ? "selected" : "active"}
            onClickOptionHandler={() => setSelectedFeature("group-list")}
          />

          <FeatureOption
            label="Buat kelompok otomatis, alih-alih birokrasi"
            state={selectedFeature === "create-group" ? "selected" : "active"}
            onClickOptionHandler={() => setSelectedFeature("create-group")}
          />
        </fieldset>
      </section>

      <section className={`${selectedFeature === "group-list" ? "block" : "hidden"} flex justify-center`}>
        <Image
          src={manageGroupMockup[0].url[0]}
          alt={manageGroupMockup[0].name[0]}
          height={400}
          width={300}
          placeholder="blur"
          blurDataURL={base64}
          objectFit="contain"
          className="sm:hidden"
        />

        <Image
          src={manageGroupMockup[0].url[1]}
          alt={manageGroupMockup[0].name[1]}
          height={300}
          width={400}
          placeholder="blur"
          blurDataURL={base64}
          className="hidden sm:block"
        />
      </section>

      <section className={`${selectedFeature === "create-group" ? "block" : "hidden"} flex justify-center`}>
        <Image
          src={manageGroupMockup[1].url[0]}
          alt={manageGroupMockup[1].name[0]}
          height={400}
          width={300}
          placeholder="blur"
          blurDataURL={base64}
          objectFit="contain"
          className="sm:hidden"
        />

        <Image
          src={manageGroupMockup[1].url[1]}
          alt={manageGroupMockup[1].name[1]}
          height={300}
          width={400}
          placeholder="blur"
          blurDataURL={base64}
          className="hidden sm:block"
        />
      </section>

    </article>
  );
}