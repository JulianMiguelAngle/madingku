'use client'

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { Chips } from "@components/Chips";
import { SubjectCard } from "@components/SubjectCard";
import { BreadchumbsContainer, Breadchumb } from "@components/Breadchumbs";

import subjectJson from "@/data/subjectNew.json";

import { useState, useEffect } from "react";

export default function Page() {
    const [isMounted, setIsMounted] = useState(false);

    const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");
    const [dropdownProfileState, setDropdownProfileState] = useState<"closed" | "opened">("closed");

    const [sortByCategory, setSortByCategory] = useState<"all" | "no group" | "have group">("all");
    
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
                            <Breadchumb label="Kelompok" href="/group" highlighted />
                        </BreadchumbsContainer>

                        <h1 className="text-neutral-700 dark:text-neutral-0 font-medium text-h3-small sm:text-h3-medium lg:text-h3-large">
                            Daftar Kelompok Mata Kuliah
                        </h1>

                        <section className="flex flex-col gap-y-[18px]">
                            <p className="text-body-small sm:text-body-medium text-neutral-600 dark:text-neutral-100">
                                Urutkan:
                            </p>

                            <section className="flex flex-wrap gap-3">
                                <Chips
                                    label="Semua"
                                    state={sortByCategory === "all" ? "selected" : "active"}
                                    onSelectHandler={() => setSortByCategory("all")}
                                />

                                <Chips
                                    label="Ada kelompok"
                                    state={sortByCategory === "have group" ? "selected" : "active"}
                                    onSelectHandler={() => setSortByCategory("have group")}
                                />

                                <Chips
                                    label="Tidak ada kelompok"
                                    state={sortByCategory === "no group" ? "selected" : "active"}
                                    onSelectHandler={() => setSortByCategory("no group")}
                                />
                            </section>
                        </section>
                    </section>

                    <section className="px-4 sm:px-6 lg:px-12 flex flex-col gap-4 overflow-x-scroll pb-6">
                        {subjectJson.map((subject) => {
                            return <SubjectCard subject={subject} key={subject.id} />
                        })}
                    </section>
                </section>
                
            </section>
        </main>
    );
}