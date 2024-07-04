'use client'

import { useRouter } from 'next/navigation';
import Image from "next/image";

import gearLight from "@assets/Light/Settings.svg";

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { GroupCard } from "@components/GroupCard";
import { BreadchumbsContainer, Breadchumb } from "@components/Breadchumbs";

import groupJson from "@/data/groupNew.json";

import { useState, useEffect } from "react";

export default function Page() {
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

                <section className="h-full w-full pt-8 flex flex-col gap-y-6 overflow-hidden dark:bg-neutral-700">
                    
                    <section className="px-4 sm:px-6 lg:px-12 flex flex-col gap-y-6">
                        <BreadchumbsContainer>
                            <Breadchumb label="Kelompok" href="/group" />
                            <Breadchumb label="Basis Data I" href="/group/12312" highlighted />
                        </BreadchumbsContainer>

                        <article className="px-6 py-[18px] flex flex-col gap-y-4 bg-fiera-300 shadow-[0_2px_20px_0_rgba(188,181,247,100%)] dark:shadow-none rounded-lg">

                            <section className="flex flex-col gap-y-3">

                                <section className="flex items-center justify-between">
                                    <h1 className={`
                                        font-semibold text-neutral-0 text-h2-small sm:text-h2-medium lg:text-h2-large
                                    `}>
                                        Basis Data 1
                                    </h1>

                                    <Image
                                        src={gearLight}
                                        alt="Gear icon"
                                        onClick={() => router.push("/group/2131/create")}
                                    />
                                </section>

                                <p className="text-body-small sm:text-body-large text-neutral-0">
                                    2 SKS
                                </p>
                            </section>
                            

                            <h2 className="text-neutral-0 text-h4-small sm:text-h4-medium lg:text-h4-large">
                                King Sarbung Racing
                            </h2>
                        </article>
                        
                    </section>

                    <section className="w-full flex flex-col gap-y-4 overflow-hidden">
                        <label className="px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-x-6">
                            <h1 className="text-neutral-700 dark:text-neutral-0 font-medium text-h3-small sm:text-h3-medium lg:text-h3-large">
                                Daftar Kelompok
                            </h1>

                            <p className="text-neutral-400 dark:text-neutral-300 font-medium text-body-small sm:text-body-medium">
                                7 Kelompok
                            </p>
                        </label>

                        <section className="px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row sm:flex-wrap gap-4 overflow-scroll pb-6">
                            {groupJson.map((group) => {
                                return <GroupCard group={group} key={group.id} />
                            })}
                        </section>
                    </section>                    
                </section>
            </section>
        </main>
    );
}