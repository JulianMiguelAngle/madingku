'use client'

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { InformationCard } from "@components/InformationCard";
import { GroupCard } from "@components/GroupCard";

import taskJson from "@/data/task.json";
import groupJson from "@/data/group.json";

import { useState, useEffect } from "react";

export default function Mading() {
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

                <section className="h-full w-full pt-8 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-8 overflow-y-scroll dark:bg-neutral-700">
                    <article className="flex flex-col gap-y-2">
                        <h1 className="text-neutral-700 dark:text-neutral-0 font-medium text-h2-small sm:text-h2-medium lg:text-h2-large">
                            Hai, Zahra 👋🏻
                        </h1>
                        <p className="text-neutral-500 dark:text-neutral-200 text-body-small sm:text-body-medium leading-body-small sm:leading-body-medium">
                            Yuk bangun komunitas kelas yang lebih interaktif dan terhubung dengan Madingku
                        </p>
                    </article>

                    <section className="w-full flex flex-col">
                        <h1 className="text-neutral-700 dark:text-neutral-0 font-medium text-h3-small sm:text-h3-medium lg:text-h3-large">
                            Informasi tugas
                        </h1>

                        <section className="w-full py-4 flex gap-x-4 overflow-x-scroll">
                            {taskJson.map((task) => {
                                return <InformationCard task={task} key={task.id} />;
                            })}
                        </section>
                    </section>

                    <section className="w-full pb-8 flex flex-col">
                        <h1 className="text-neutral-700 dark:text-neutral-0 font-medium text-h3-small sm:text-h3-medium lg:text-h3-large">
                            Kelompok Mu
                        </h1>

                        <section className="w-full py-4 flex gap-x-4 overflow-x-scroll">
                            {groupJson.map((group) => {
                                return <GroupCard group={group} key={group.id} />;
                            })}
                        </section>
                    </section>
                </section>
                
            </section>
        </main>
    );
}