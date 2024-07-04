'use client'

import bearMakeAMistake from "@assets/Emoji/Bear make a mistake.avif";

import Image from "next/image";
import { useRouter, useParams, usePathname } from 'next/navigation';

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { BreadchumbsContainer, Breadchumb } from "@components/Breadchumbs";
import { CitizenProfile } from '@components/Citizen';
import { Button } from "@components/Button";

import groupJson from "@/data/groupNew.json";

import { useState, useEffect } from "react";

export default function Page() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams<{ groupId: string }>();

    const [isMounted, setIsMounted] = useState(false);

    const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");
    const [dropdownProfileState, setDropdownProfileState] = useState<"closed" | "opened">("closed");
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const group = groupJson.find((group) => group.id === params.groupId);
    
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

                <section className="h-full w-full pt-8 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-8 overflow-y-scroll dark:bg-neutral-700">
                    <BreadchumbsContainer>
                        <Breadchumb label="Kelompok" href="/group" />
                        <Breadchumb label="Pemrograman I" href="/group/2312" />
                        <Breadchumb label="Buat kelompok" href="/group/2312/create" highlighted />
                    </BreadchumbsContainer>
                    
                    {group ? (
                        <article className="flex flex-col gap-y-8">
                            <h1 className="text-h2-small sm:text-h2-medium lg:text-h2-large font-medium text-neutral-700 dark:text-neutral-0">
                                Membuat Desain ERD: Klinik / Puskesmas
                            </h1>

                            {group.member ? (
                                <section className="flex flex-col gap-y-4">
                                    <section className="flex gap-x-6 items-center justify-between">
                                        <h2 className="text-h4-small sm:text-h4-medium text-neutral-600 dark:text-neutral-100">
                                            Daftar Anggota
                                        </h2>

                                        <p className="text-body-small sm:text-body-medium text-neutral-400 dark:text-neutral-300">
                                            3 Orang
                                        </p>
                                    </section>

                                    <section className="flex flex-col gap-y-4">
                                        {group.member?.map((member) => {
                                            return (
                                                <CitizenProfile 
                                                    key={member.nim}
                                                    avatar={member.avatar} 
                                                    nim={member.nim} 
                                                    name={member.name} 
                                                />
                                            );
                                        })}
                                    </section>
                                </section>
                            ) : (
                                <article className="flex flex-col items-center gap-y-4">
                                    <Image
                                        height={100}
                                        width={100}
                                        src={bearMakeAMistake}
                                        alt="Bear make a mistake"
                                    />

                                    <section className="flex flex-col gap-y-2 items-center text-center">
                                        <h2 className="font-medium text-neutral-700 dark:text-neutral-0 text-h3-small md:text-h3-medium ">
                                            Kelompok Masing Kosong
                                        </h2>

                                        <p className="text-neutral-500 dark:text-neutral-100 leading-body-small md:leading-body-medium text-body-small md:text-body-medium">
                                            Tekan tombol <span className="font-medium text-neutral-600 dark:text-fiera-100">edit kelompok</span> untuk menambahkan anggota  baru.
                                        </p>
                                    </section>
                                </article>
                            )}

                            

                            <section className="pb-6 flex md:hidden flex-col gap-4 items-end">
                                <Button
                                    variant="secondary"
                                    state="active"
                                    behavior="fill-container"
                                    size="large"
                                    label="Edit Kelompok"
                                    onClickHandler={() => router.push(pathname + "/edit")}
                                />

                                <Button
                                    variant="destructive"
                                    state="active"
                                    behavior="fill-container"
                                    size="large"
                                    label="Hapus Kelompok"
                                    // onClickHandler={() => router.push(pathname + "/edit")}
                                />
                            </section>

                            <section className="pb-6 hidden md:flex flex-row-reverse gap-4 items-end">
                                <Button
                                    variant="secondary"
                                    state="active"
                                    behavior="fill-container"
                                    size="large"
                                    label="Edit Kelompok"
                                    onClickHandler={() => router.push(pathname + "/edit")}
                                />

                                <Button
                                    variant="destructive"
                                    state="active"
                                    behavior="fill-container"
                                    size="large"
                                    label="Hapus Kelompok"
                                    // onClickHandler={() => router.push(pathname + "/edit")}
                                />
                            </section>
                        </article>
                    ) : (
                        <h1>Data tidak ditemukan</h1>
                    )}

                    
                </section>
            </section>
        </main>
    );
}