'use client'

import { useRouter } from 'next/navigation';

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { InformationCard } from "@components/InformationCard";
import { Button } from "@components/Button";

import taskJson from "@/data/task.json";

import { useState, useEffect } from "react";

export default function Task() {
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

                <section className="h-full w-full pt-8 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-8 overflow-y-scroll dark:bg-neutral-700">
                    <article className="flex flex-col gap-y-3">
                        <h1 className="text-neutral-700 dark:text-neutral-0 font-medium text-h3-small sm:text-h3-medium lg:text-h3-large">
                            Daftar Tugas Perkuliahan
                        </h1>

                        <section className="flex gap-x-6 justify-end">
                            <Button
                                variant="primary"
                                state="active"
                                behavior="hug-content"
                                size="small"
                                label="Tugas"
                                onClickHandler={() => router.push("/task/create",)}
                            />
                        </section>
                    </article>

                    <section className="w-full py-4 flex flex-col md:flex-wrap md:flex-row gap-4 overflow-y-scroll">
                        {taskJson.map((task) => {
                            return <InformationCard task={task} key={task.id} />;
                        })}
                    </section>
                </section>
                
            </section>
        </main>
    );
}