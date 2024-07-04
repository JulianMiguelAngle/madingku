'use client'

import { useTheme } from "next-themes";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import clockLight from "@assets/Light/Clock.svg";
import clockDark from "@assets/Dark/Clock.svg";

import smileLight from "@assets/Light/Smile.svg";
import smileDark from "@assets/Dark/Smile.svg";

import userLight from "@assets/Light/User circle.svg";
import userDark from "@assets/Dark/User circle.svg";

import bookLight from "@assets/Light/Notebook.svg";
import bookDark from "@assets/Dark/Notebook.svg";

import linkLight from "@assets/Light/Link.svg";
import linkDark from "@assets/Dark/Link.svg";

import copyLight from "@assets/Light/Copy.svg";
import copyDark from "@assets/Dark/Copy.svg";

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { Breadchumb, BreadchumbsContainer } from "@components/Breadchumbs";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { InputDatetime } from "@components/InputDatetime";
import { Chips } from "@/app/components/Chips";

import { useState, useEffect } from "react";

export default function Edit() {
    const { resolvedTheme } = useTheme();
    const router = useRouter();

    const [isMounted, setIsMounted] = useState(false);

    const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");
    const [dropdownProfileState, setDropdownProfileState] = useState<"closed" | "opened">("closed");

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    if (!isMounted) return null;

    return (
        <main className="h-screen w-screen flex flex-col items-center">
            <MadingNavbar
                onClickAvatarHandler={() => setDropdownProfileState("opened")}
                onClickMenuHandler={() => setSidebarState("opened")}
            />

            <DropdownProfile
                state={dropdownProfileState}
                onClickOutsideHandler={() => setDropdownProfileState("closed")}
            />

            <section className="h-full w-full flex gap-y-1.5 overflow-y-scroll">
                <MadingSidebar 
                    state={sidebarState}
                    onClickCloseHandler={() => setSidebarState("closed")}
                />

                <section className="h-full w-full pt-8 pb-6 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-6 overflow-y-scroll dark:bg-neutral-700">
                    <BreadchumbsContainer>
                        <Breadchumb label="Tugas" href="/task" />
                        <Breadchumb label="Analisa dan perancangan sistem" href="/task" />
                        <Breadchumb label="Tambahkan tugas baru" href="/task/create" highlighted />
                    </BreadchumbsContainer>

                    <article className="flex flex-col gap-y-4">
                        <h1 className="font-semibold text-h2-small md:text-h2-medium lg:text-h2-large text-neutral-700 dark:text-neutral-0">
                            Membuat Class Diagram
                        </h1>

                        <h2 className="text-body-small md:text-body-medium text-neutral-600 dark:text-neutral-100">
                            Dibuat oleh <span className="font-medium text-neutral-600 dark:text-neutral-100">Achmad Julian</span>, 26 Mei pukul 17.00
                        </h2>
                    </article>

                    <article className="flex flex-col gap-5">
                        <section className="flex gap-x-6 items-center">
                            <label className="flex items-center gap-x-3 min-w-[120px] sm:min-w-[130px]">
                                <Image
                                    src={resolvedTheme === "light" ? clockLight : clockDark}
                                    alt="Clock icon"
                                />

                                <p className="font-medium text-body-small sm:text-body-medium text-neutral-400 dark:text-neutral-300">
                                    Tenggat
                                </p>
                            </label>

                            <p className="w-full text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-200">
                                1 Juni 2024 pukul 17.00
                            </p>
                        </section>

                        <section className="flex gap-x-6 items-center">
                            <label className="flex items-center gap-x-3 min-w-[120px] sm:min-w-[130px]">
                                <Image
                                    src={resolvedTheme === "light" ? smileLight : smileDark}
                                    alt="Clock icon"
                                />

                                <p className="font-medium text-body-small sm:text-body-medium text-neutral-400 dark:text-neutral-300">
                                    Kategori
                                </p>
                            </label>

                            <p className="px-2 py-1 text-body-small sm:text-body-medium text-neutral-0 bg-fiera-400 rounded-md">
                                Individu
                            </p>
                        </section>

                        <section className="flex gap-x-6 items-start">
                            <label className="flex items-center gap-x-3 min-w-[120px] sm:min-w-[130px]">
                                <Image
                                    src={resolvedTheme === "light" ? userLight : userDark}
                                    alt="Clock icon"
                                />

                                <p className="font-medium text-body-small sm:text-body-medium text-neutral-400 dark:text-neutral-300">
                                    Dosen
                                </p>
                            </label>

                            <p className="px-2 py-1 text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-200">
                                Rengga Herdiansyah
                            </p>
                        </section>

                        <section className="flex gap-x-6 items-start">
                            <label className="flex items-center gap-x-3 min-w-[120px] sm:min-w-[130px]">
                                <Image
                                    src={resolvedTheme === "light" ? bookLight : bookDark}
                                    alt="Book icon"
                                />

                                <p className="font-medium text-body-small sm:text-body-medium text-neutral-400 dark:text-neutral-300">
                                    Mata kuliah
                                </p>
                            </label>

                            <p className="px-2 py-1 text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-200">
                                Analisa dan Perancangan Sistem
                            </p>
                        </section>

                        <section className="flex gap-x-6 items-center">
                            <label className="flex items-center gap-x-3 min-w-[120px] sm:min-w-[130px]">
                                <Image
                                    src={resolvedTheme === "light" ? linkLight : linkDark}
                                    alt="Link icon"
                                />

                                <p className="font-medium text-body-small sm:text-body-medium text-neutral-400 dark:text-neutral-300">
                                    Lampiran
                                </p>
                            </label>

                            <button className={`
                                py-1 px-3 flex items-center gap-x-1.5 border border-solid rounded-md
                                bg-neutral-0 dark:bg-neutral-600 border-neutral-100 dark:border-neutral-500
                            `}
                            
                            onClick={() => navigator.clipboard.writeText("localhost:3000")}>
                                <p className="text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-200">
                                    Google drive
                                </p>

                                <Image
                                    src={resolvedTheme === "light" ? copyLight : copyDark}
                                    alt="Link icon"
                                />
                            </button>
                            
                        </section>
                    </article>

                    <article className="flex flex-col gap-y-2">
                        <h1 className="font-medium text-body-small sm:text-body-medium text-neutral-700 dark:text-neutral-0">
                            Deskripsi
                        </h1>

                        <p className="text-body-small sm:text-body-medium text-neutral-600 dark:text-neutral-0">
                            Anda dapat menggunakan alat bantu UML seperti UMLet, StarUML, atau Dia untuk membuat class diagram.
                        </p>
                    </article>

                    <section className="flex flex-col md:flex-row-reverse gap-4 items-end">
                        <Button
                            variant="secondary"
                            state="active"
                            behavior={window.screen.width >= 768 ? "hug-content" : "fill-container"}
                            size="large"
                            label="Edit Tugas"
                            onClickHandler={() => router.push("/task/21312/edit")}
                        />
                        <Button
                            variant="destructive"
                            state="active"
                            behavior={window.innerWidth >= 768 ? "hug-content" : "fill-container"}
                            size="large"
                            label="Hapus Tugas"
                        />
                    </section>
                </section>
                
            </section>
        </main>
    );
}